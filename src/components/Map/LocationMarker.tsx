/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { latLng, LatLng, LatLngExpression } from 'leaflet';
import { useEffect, useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';

type Props = {
	inputPosition?: LatLngExpression | undefined;
};

const LocationMarker = ({ inputPosition }: Props) => {
	const [position, setPosition] = useState<LatLng>(latLng(0, 0));
	const [isLoaded, setLoaded] = useState<boolean>(false);

	useEffect(() => {
		if (inputPosition) {
			setPosition(latLng(inputPosition));
			setLoaded(true);
		}
	}, [inputPosition]);

	const map = useMapEvents({
		click() {
			if (position && isLoaded) {
				map.flyTo(latLng(position), map.getZoom());
			} else {
				map.locate();
			}
		},
		locationfound(e) {
			map.flyTo(e.latlng, map.getZoom());
		}
	});

	return (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<>
			{isLoaded && (
				<Marker position={position}>
					<Popup>You are here</Popup>
				</Marker>
			)}
		</>
	);
};

export default LocationMarker;
