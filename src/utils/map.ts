import { LatLngExpression, Map } from 'leaflet';

export const getZoom = (map: Map) => 11;

export const getZoomCoords = (coordinates: number[]) => {
	let coords: LatLngExpression;
	if (Array.isArray(coordinates[0])) {
		coords = [coordinates[0][0][1], coordinates[0][0][0]];
	} else {
		coords = [coordinates[1], coordinates[0]];
	}
	return coords;
};
