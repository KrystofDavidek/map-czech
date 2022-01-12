import { LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { useEffect, useState } from 'react';

import './MapWrapper.css';
import useGeocode from '../../hooks/useGeocode';

import LocationMarker from './LocationMarker';
import MinimapControl from './MinimapControl';
import Zoomer from './Zoomer';

const MapWrapper = () => {
	const [position, setPosition] = useState<LatLngExpression>([0, 0]);
	const { location, setAdress } = useGeocode('Brno');

	useEffect(() => {
		console.log(location);

		setPosition(location);
	}, [location]);

	useEffect(() => {
		setAdress('Budapest');
	}, []);

	return (
		<MapContainer center={position} zoom={13} scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<LocationMarker inputPosition={position} />
			<MinimapControl position="topright" />
			<Zoomer />
		</MapContainer>
	);
};

export default MapWrapper;
