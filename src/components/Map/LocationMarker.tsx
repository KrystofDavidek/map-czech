/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { latLng, LatLng, LatLngExpression } from 'leaflet';
import { useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';

type Props = {
	inputPosition?: LatLngExpression | undefined;
};

const LocationMarker = ({ inputPosition }: Props) => {
	const [position, setPosition] = useState<LatLng>(latLng(0, 0));
	const map = useMapEvents({
		click() {
			if (inputPosition) {
				setPosition(latLng(inputPosition));
				map.flyTo(latLng(inputPosition), map.getZoom());
			} else {
				map.locate();
			}
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
