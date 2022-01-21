import { Stack } from '@mui/material';

import DropzoneInput from '../components/form/DropzoneInput';

const Admin = () => (
	<Stack alignItems="center" spacing={2} sx={{ m: 2 }}>
		<DropzoneInput type="image/*" />
	</Stack>
);

export default Admin;
