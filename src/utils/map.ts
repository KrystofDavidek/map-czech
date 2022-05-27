import { LatLngExpression, Map } from 'leaflet';

export const getZoom = (map: Map) => {
	if (map.getZoom() > 11) return 11;
	if (map.getZoom() < 10) return 10;
	return map.getZoom();
};

export const getZoomCoords = (coordinates: number[]) => {
	let coords: LatLngExpression;
	if (Array.isArray(coordinates[0])) {
		coords = [coordinates[0][0][1], coordinates[0][0][0]];
	} else {
		coords = [coordinates[1], coordinates[0]];
	}
	return coords;
};
