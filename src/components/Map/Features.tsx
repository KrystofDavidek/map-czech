import { Button, Typography } from '@mui/material';
import { useCallback, useState } from 'react';
import { FeatureGroup, Popup, useMap } from 'react-leaflet';

import { featuresJson } from '../../data';
import { getZoom, getZoomCoords } from '../../utils/map';

import FeatureShape from './FeatureShape';
import Modal from './Modal';

const Features = () => {
	const [modal, setModal] = useState(false);
	const [selectedFeature, setSelectedFeature] = useState({});
	const map = useMap();
	const toggle = () => {
		setModal(!modal);
	};
	const zoom = useCallback(map => getZoom(map), []);
	const zoomCoords = useCallback(coordinates => getZoomCoords(coordinates), []);

	// eslint-disable-next-line react/jsx-no-useless-fragment
	if (!featuresJson) return <></>;

	return (
		<>
			{(featuresJson as any).features.map((feature: any, index: number) => (
				<FeatureGroup
					eventHandlers={{
						click: () => {
							map.setView(zoomCoords(feature.geometry.coordinates), zoom(map));
						}
					}}
					key={index}
					pathOptions={{ color: 'purple' }}
				>
					<Popup>
						<Typography>{feature.properties.name}</Typography>
						<Button
							id="button"
							onClick={() => {
								toggle();
								setSelectedFeature(feature);
								map.flyTo(zoomCoords(feature.geometry.coordinates), zoom(map));
							}}
						>
							More Info
						</Button>
					</Popup>
					<FeatureShape
						type={feature.geometry.type}
						coordinates={feature.geometry.coordinates}
						properties={feature.properties}
					/>
					<Modal
						modal={modal}
						toggle={toggle}
						selectedFeature={selectedFeature}
					/>
				</FeatureGroup>
			))}
			;
		</>
	);
};

export default Features;
