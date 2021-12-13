/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { latLng, LatLng } from 'leaflet';
import { useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';

const LocationMarker = () => {
	const [position, setPosition] = useState<LatLng>(latLng(0, 0));
	const map = useMapEvents({
		click() {
			map.locate();
		},
		locationfound(e) {
			setPosition(e.latlng);
			map.flyTo(e.latlng, map.getZoom());
		}
	});

	return position === null ? null : (
		<Marker position={position}>
			<Popup>You are here</Popup>
		</Marker>
	);
};

export default LocationMarker;
