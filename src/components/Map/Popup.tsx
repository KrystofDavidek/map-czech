import { Typography, Box } from '@mui/material';

const Popup = ({ feature }: any) => {
	let popupContent;
	if (feature.properties?.popupContent) {
		popupContent = feature.properties.popupContent;
	}

	return (
		<Box>
			<Typography>{`I started out as a GeoJSON  ${feature.properties.name}, but now I'm a Leaflet vector!`}</Typography>
			{popupContent}
		</Box>
	);
};

export default Popup;
