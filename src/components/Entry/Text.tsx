import { Typography } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Text = (props: any) => (
	// eslint-disable-next-line react/jsx-no-useless-fragment
	<>{props.text && <Typography {...props}>{props.text}</Typography>}</>
);

export default Text;
