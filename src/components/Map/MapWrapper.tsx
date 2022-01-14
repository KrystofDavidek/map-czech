import { latLng, LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useState } from 'react';

import './MapWrapper.css';

import MinimapControl from './MinimapControl';
import Zoomer from './Zoomer';
import Features from './Features';
import ViewerOnClick from './ViewerOnClick';

const MapWrapper = () => {
	const [position] = useState<LatLngExpression>(latLng(49.1922443, 16.6113382));

	return (
		<MapContainer center={position} zoom={10} scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<MinimapControl position="topright" />
			<Features />
			<Zoomer />
			<ViewerOnClick />
		</MapContainer>
	);
};

export default MapWrapper;