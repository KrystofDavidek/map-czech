import { TextField } from '@mui/material';

const FormField = (field: any) => (
	<TextField
		{...field}
		label="Email"
		variant="outlined"
		fullWidth
		margin="dense"
	/>
);

export default FormField;
