import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

import { useSearch } from '../../contexts/SearchContext';
import useGeocode from '../../hooks/useGeocode';

const Zoomer = () => {
	const map = useMap();
	const { location, setAdress } = useGeocode('Brno');
	const { input, isSearching, setSearching } = useSearch();

	useEffect(() => {
		if (input && isSearching) {
			setAdress(input);
			setSearching(false);
		}
	}, [isSearching]);

	useEffect(() => {
		map.flyTo(location, map.getZoom() + 1.5);
	}, [location]);

	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <></>;
};

export default Zoomer;
