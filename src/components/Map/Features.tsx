import { useCallback, useEffect, useState } from 'react';
import { FeatureGroup, useMap, useMapEvents } from 'react-leaflet';

import { useDialog } from '../../contexts/DialogContext';
import { Feature, FeatureCollection } from '../../models/feature';
import { getZoom, getZoomCoords } from '../../utils/map';
import theme from '../../utils/theme';
import FeatureDialog from '../Dialogs/FeatureDialog';
import { useFeatures } from '../../contexts/FeaturesContext';

import FeatureShape from './FeatureShape';

const Features = () => {
	const [zoomLevel, setZoomLevel] = useState<number>(5);
	const [featureCollection, setFeatureCollection] = useState<FeatureCollection>(
		{
			type: 'FeatureCollection',
			features: []
		}
	);
	const map = useMap();
	const mapEvents = useMapEvents({
		zoomend: () => {
			setZoomLevel(mapEvents.getZoom());
		}
	});
	const zoom = useCallback(map => getZoom(map), []);
	const zoomCoords = useCallback(coordinates => getZoomCoords(coordinates), []);
	const { openDialog } = useDialog();
	const { features, setRefresh } = useFeatures();

	const handleOnClick = (feature: Feature) => {
		openDialog({
			Content: FeatureDialog,
			props: {
				feature
			}
		});
	};

	useEffect(() => {
		setRefresh(true);
	}, []);

	useEffect(() => {
		setFeatureCollection({ ...featureCollection, features });
	}, [features]);

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
							isMarker={zoomLevel < 8}
						/>
					</FeatureGroup>
				)
			)}
			;
		</>
	);
};

export default Features;
