import { LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useEffect, useState } from 'react';

import './MapWrapper.css';
import useGeocode from '../../hooks/useGeocode';

import LocationMarker from './LocationMarker';
import MinimapControl from './MinimapControl';

const MapWrapper = () => {
	const [position, setPosition] = useState<LatLngExpression>([
		49.1922443, 16.6113382
	]);
	const { location, setAdress } = useGeocode('Karlovarský kraj');

	useEffect(() => {
		console.log(location);

		setPosition(location);
	}, [location]);

	// useEffect(() => {
	// 	setAdress('Brno');
	// }, []);

	return (
		<MapContainer center={position} zoom={13} scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<LocationMarker inputPosition={position} />
			<MinimapControl position="topright" />
		</MapContainer>
	);
};

export default MapWrapper;
