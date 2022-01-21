import { Stack } from '@mui/material';

import FormDropzone from '../components/form/FormDropzone';
import FormEditor from '../components/form/FormEditor';

const Admin = () => (
	<Stack alignItems="center" spacing={2} sx={{ m: 2 }}>
		<FormDropzone type="image/*" />
		<FormEditor />
	</Stack>
);

export default Admin;
