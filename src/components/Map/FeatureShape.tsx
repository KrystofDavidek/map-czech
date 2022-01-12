import { Polygon, Circle } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';

type GeometryProps = {
	type: string;
	coordinates: number[] | number[] | number[][][];
	properties: any;
};

const shapeStyles = {
	fillColor: '#ff7800',
	color: '#000',
	weight: 1,
	opacity: 1,
	fillOpacity: 0.8
};

const FeatureShape = ({ type, coordinates, properties }: GeometryProps) => {
	let coord;
	if (type === 'Point') {
		coord = [coordinates[1], coordinates[0]];
	}

	return (
		<>
			{type === 'Polygon' && (
				<Polygon
					positions={L.GeoJSON.coordsToLatLngs(coordinates[0] as any)}
					{...shapeStyles}
				/>
			)}
			{type === 'Point' && (
				<Circle
					center={coord as LatLngExpression}
					radius={properties.radius ? properties.radius : 1500}
					{...shapeStyles}
				/>
			)}
		</>
	);
};

export default FeatureShape;
