import { LatLngExpression } from 'leaflet';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { fetcher } from '../utils/fetcher';

const useGeocode = (initialLocation?: string) => {
	const [location, setLocation] = useState<LatLngExpression>([0, 0]);
	const [address, setAdress] = useState<string>(
		initialLocation ? initialLocation : ''
	);

	const { data } = useSWR(
		address ? `json?q=${address}&key=${process.env.REACT_APP_API_KEY}` : null,
		fetcher,
		{
			shouldRetryOnError: false,
			revalidateOnFocus: false
		}
	);

	useEffect(() => {
		setLocation(data ? data.results[0].geometry : [0, 0]);
	}, [data]);

	return { location, setAdress };
};

export default useGeocode;
