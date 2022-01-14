import { useCallback } from 'react';
import { FeatureGroup, useMap } from 'react-leaflet';

import { useDialog } from '../../contexts/DialogContext';
import { featuresJson } from '../../data';
import { Feature, FeatureCollection } from '../../models/feature';
import { getZoom, getZoomCoords } from '../../utils/map';
import theme from '../../utils/theme';
import FeatureDialog from '../Dialogs/FeatureDialog';

import FeatureShape from './FeatureShape';

const Features = () => {
	const map = useMap();
	const zoom = useCallback(map => getZoom(map), []);
	const zoomCoords = useCallback(coordinates => getZoomCoords(coordinates), []);
	const { openDialog } = useDialog();

	const handleOnClick = (feature: Feature) => {
		openDialog({
			Content: FeatureDialog,
			props: {
				feature
			}
		});
	};

	// eslint-disable-next-line react/jsx-no-useless-fragment
	if (!featuresJson) return <></>;

	return (
		<>
			{(featuresJson as FeatureCollection).features.map(
				(feature: Feature, index: number) => (
					<FeatureGroup
						eventHandlers={{
							click: () => {
								map.setView(
									zoomCoords(feature.geometry.coordinates),
									zoom(map)
								);
								handleOnClick(feature);
							},
							mouseover: e => {
								e.target.setStyle({ fillColor: theme.palette.feature.main });
							},
							mouseout: e => {
								e.target.setStyle({ fillColor: theme.palette.feature.light });
							}
						}}
						key={index}
						pathOptions={{ color: theme.palette.feature.border }}
					>
						<FeatureShape
							type={feature.geometry.type}
							coordinates={feature.geometry.coordinates}
							properties={feature.properties}
						/>
					</FeatureGroup>
				)
			)}
			;
		</>
	);
};

export default Features;
