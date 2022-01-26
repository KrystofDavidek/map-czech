import { useCallback, useEffect, useState } from 'react';
import { FeatureGroup, useMap } from 'react-leaflet';

import { useDialog } from '../../contexts/DialogContext';
import { Feature, FeatureCollection } from '../../models/feature';
import { getZoom, getZoomCoords } from '../../utils/map';
import theme from '../../utils/theme';
import FeatureDialog from '../dialogs/FeatureDialog';
import { getAllFeatures } from '../../utils/firebase';

import FeatureShape from './FeatureShape';

const Features = () => {
	const [featureCollection, setFeatureCollection] = useState<FeatureCollection>(
		{
			type: 'FeatureCollection',
			features: []
		}
	);
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

	useEffect(() => {
		const getData = async () => {
			const features = await getAllFeatures();
			if (features?.length > 0) {
				setFeatureCollection({ ...featureCollection, features });
			}
		};
		getData();
	}, []);

	// eslint-disable-next-line react/jsx-no-useless-fragment
	if (featureCollection?.features?.length < 1) return <></>;

	return (
		<>
			{(featureCollection as FeatureCollection).features.map(
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
