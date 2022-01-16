import { Typography } from '@mui/material';

type TextProps = {
	variant?:
		| 'h1'
		| 'h2'
		| 'h3'
		| 'h4'
		| 'h5'
		| 'h6'
		| 'subtitle1'
		| 'subtitle2'
		| 'body1'
		| 'body2'
		| 'caption'
		| 'button'
		| 'overline'
		| 'inherit'
		| undefined;
	text: string | undefined;
};

const Text = ({ variant, text }: TextProps) => (
	// eslint-disable-next-line react/jsx-no-useless-fragment
	<>{text && <Typography variant={variant}>{text}</Typography>}</>
);

export default Text;
