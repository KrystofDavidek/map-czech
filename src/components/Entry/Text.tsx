import { Typography } from '@mui/material';
import './Text.css';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Text = (props: any) => {
	// eslint-disable-next-line react/jsx-no-useless-fragment
	if (props.text?.length === 0) return <></>;
	// ! Upravit na základě použitého editoru
	const parts: string[] = props.text.split(['\n']);

	return (
		<>
			{parts.map((part, i) => (
				<Typography
					key={i}
					dangerouslySetInnerHTML={{ __html: part }}
					{...props}
				/>
			))}
		</>
	);
};

export default Text;
