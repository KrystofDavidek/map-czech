import { Button, Typography } from '@mui/material';
import { useState } from 'react';
import { FeatureGroup, Popup } from 'react-leaflet';

import { featuresJson } from '../../data';

import FeatureShape from './FeatureShape';
import Modal from './Modal';

const Features = () => {
	const [modal, setModal] = useState(false);
	const [selectedFeature, setSelectedFeature] = useState({});

	const toggle = () => setModal(!modal);

	// eslint-disable-next-line react/jsx-no-useless-fragment
	if (!featuresJson) return <></>;

	return (
		<>
			{(featuresJson as any).features.map((feature: any, index: number) => (
				<FeatureGroup pathOptions={{ color: 'purple' }} key={index}>
					<Popup>
						<Typography>{feature.properties.name}</Typography>
						<Button
							id="button"
							onClick={() => {
								toggle();
								setSelectedFeature(feature);
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
