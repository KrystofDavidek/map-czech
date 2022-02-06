import { useCallback, useEffect } from 'react';
import { useMap } from 'react-leaflet';

import { useFeatures } from '../../contexts/FeaturesContext';
import { useSearch } from '../../contexts/SearchContext';
import useGeocode from '../../hooks/useGeocode';
import { getZoom, getZoomCoords } from '../../utils/map';

const Zoomer = () => {
	const map = useMap();
	const { location, setAddress } = useGeocode('');
	const { input, isSearching, setSearching } = useSearch();
	const { zoomTo } = useFeatures();

	const zoom = useCallback(map => getZoom(map), []);

	useEffect(() => {
		if (zoomTo.length > 0) {
			map.flyTo(getZoomCoords(zoomTo as number[]), zoom(map));
		}
	}, [zoomTo]);

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
