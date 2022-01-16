import { Box } from '@mui/material';

const Image = (props: any) => (
	// eslint-disable-next-line react/jsx-no-useless-fragment
	<>{props.src && <Box component="img" {...props} />}</>
);

export default Image;
