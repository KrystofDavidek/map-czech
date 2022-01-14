import { useCallback } from 'react';
import { FeatureGroup, useMap } from 'react-leaflet';

import { useDialog } from '../../contexts/DialogContext';
import { featuresJson } from '../../data';
import { getZoom, getZoomCoords } from '../../utils/map';
import FeatureDialog from '../Dialogs/FeatureDialog';

import FeatureShape from './FeatureShape';

const Features = () => {
	const map = useMap();
	const zoom = useCallback(map => getZoom(map), []);
	const zoomCoords = useCallback(coordinates => getZoomCoords(coordinates), []);
	const { openDialog } = useDialog();

	const handleOnClick = (feature: any) => {
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
			{(featuresJson as any).features.map((feature: any, index: number) => (
				<FeatureGroup
					eventHandlers={{
						click: () => {
							map.setView(zoomCoords(feature.geometry.coordinates), zoom(map));
							handleOnClick(feature);
						},
						mouseover: e => {
							e.target.setStyle({ fillColor: '#5a3d3d' });
						},
						mouseout: e => {
							e.target.setStyle({ fillColor: '#ff7800' });
						}
					}}
					key={index}
					pathOptions={{ color: 'purple' }}
				>
					<FeatureShape
						type={feature.geometry.type}
						coordinates={feature.geometry.coordinates}
						properties={feature.properties}
					/>
				</FeatureGroup>
			))}
			;
		</>
	);
};

export default Features;
