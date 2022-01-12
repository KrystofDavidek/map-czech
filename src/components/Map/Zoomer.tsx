import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

const Zoomer = () => {
	const map = useMap();

	useEffect(() => {
		map.setView([49.1922443, 16.6113382], 8);
	}, []);

	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <></>;
};

export default Zoomer;
