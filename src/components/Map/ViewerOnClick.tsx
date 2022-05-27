import { useMediaQuery } from '@mui/material';
import { useMapEvent } from 'react-leaflet';

import theme from '../../utils/theme';

const ViewerOnClick = () => {
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'), {
		noSsr: true
	});

	const map = useMapEvent('click', e => {
		if (!isMobile) map.setView(e.latlng, map.getZoom());
	});

	return null;
};

export default ViewerOnClick;
