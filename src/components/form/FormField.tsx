import { TextField } from '@mui/material';

import Text from '../Text';

type Props = { title: string };

const FormField = (field: Props & any) => (
	<>
		<Text variant="h5" component="h2" text={field.title} />
		<TextField {...field} variant="outlined" fullWidth margin="dense" />
	</>
);

export default FormField;
