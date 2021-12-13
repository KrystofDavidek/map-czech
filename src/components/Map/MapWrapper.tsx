import { LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import LocationMarker from './LocationMarker';
import './MapWrapper.css';

const position: LatLngExpression = [51.505, -0.09];

const MapWrapper = () => (
	<MapContainer center={position} zoom={13} scrollWheelZoom={false}>
		<TileLayer
			attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		/>
		<Marker position={position}>
			<Popup>
				A pretty CSS3 popup. <br /> Easily customizable.
			</Popup>
		</Marker>
		<LocationMarker />
	</MapContainer>
);

export default MapWrapper;
