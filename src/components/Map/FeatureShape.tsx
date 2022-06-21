import { Polygon, Circle, Marker, Tooltip } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';

import theme from '../../utils/theme';
import { Properties } from '../../models/feature';

type GeometryProps = {
	type: string;
	coordinates: number[] | number[][][];
	properties: Properties;
	isMarker: boolean;
};

const shapeStyles = {
	fillColor: theme.palette.feature.light,
	color: theme.palette.feature.main,
	weight: 1,
	opacity: 1,
	fillOpacity: 0.8
};

const FeatureShape = ({
	type,
	coordinates,
	properties,
	isMarker
}: GeometryProps) => {
	let coord;
	if (type === 'Point') {
		coord = [coordinates[1], coordinates[0]];
	} else {
		coord = coordinates;
	}

	const featureTooltip = <Tooltip>{properties.mainLocation}</Tooltip>;

	if (isMarker) {
		if (type === 'Point') {
			return (
				<Marker position={coord as LatLngExpression}>{featureTooltip}</Marker>
			);
		} else {
			if (Array.isArray(coord[0])) {
				return (
					<Marker
						position={
							L.GeoJSON.coordsToLatLngs(coord[0])[0] as LatLngExpression
						}
					>
						{featureTooltip}
					</Marker>
				);
			}
		}
	}

	return (
		<>
			{type === 'Polygon' && (
				<Polygon
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					positions={L.GeoJSON.coordsToLatLngs(coord[0] as any)}
					{...shapeStyles}
				>
					{featureTooltip}
				</Polygon>
			)}
			{type === 'Point' && (
				<Circle
					center={coord as LatLngExpression}
					radius={properties.radius ? properties.radius : 1500}
					{...shapeStyles}
				>
					{featureTooltip}
				</Circle>
			)}
		</>
	);
};

export default FeatureShape;
