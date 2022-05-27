import { Typography } from '@mui/material';
import './Text.css';
const Text = (props: any) => {
	// eslint-disable-next-line react/jsx-no-useless-fragment
	if (props.text?.length === 0) return <></>;

	return (
		<Typography dangerouslySetInnerHTML={{ __html: props.text }} {...props} />
	);
};

export default Text;
