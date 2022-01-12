import { useMapEvent } from 'react-leaflet';

const ViewerOnClick = () => {
	const map = useMapEvent('click', e => {
		map.setView(e.latlng, map.getZoom());
	});

	return null;
};

export default ViewerOnClick;
