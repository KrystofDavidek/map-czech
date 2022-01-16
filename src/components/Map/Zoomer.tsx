import { useCallback, useEffect } from 'react';
import { useMap } from 'react-leaflet';

import { useSearch } from '../../contexts/SearchContext';
import useGeocode from '../../hooks/useGeocode';
import { getZoom } from '../../utils/map';

const Zoomer = () => {
	const map = useMap();
	const { location, setAddress } = useGeocode('');
	const { input, isSearching, setSearching } = useSearch();

	const zoom = useCallback(map => getZoom(map), []);

	useEffect(() => {
		if (input && isSearching) {
			setAddress(input);
			setSearching(false);
		}
	}, [isSearching]);

	useEffect(() => {
		if (location.lat !== 0) map.flyTo(location, zoom(map));
	}, [location]);

	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <></>;
};

export default Zoomer;
