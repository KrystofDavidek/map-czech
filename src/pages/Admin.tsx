/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
import { FormControl, Stack } from '@mui/material';
import { useForm, FormProvider, Controller } from 'react-hook-form';

import FormDropzone from '../components/form/FormDropzone';
import FormEditor from '../components/form/FormEditor';
import FormField from '../components/form/FormField';

const Admin = () => {
	const methods = useForm();
	// Handle Data Submit to APi for SignUp
	const handleSubmitOnClick = (data: any) => {
		console.log(data);
	};

	return (
		<Stack alignItems="center" spacing={2} sx={{ m: 2 }}>
			<FormProvider {...methods}>
				<FormControl
					sx={{ width: '100%', maxWidth: '55rem' }}
					component="form"
					onSubmit={methods.handleSubmit(handleSubmitOnClick)}
				>
					<Controller
						name="editor1"
						control={methods.control}
						render={({ field: { ref, ...rest } }) => <FormEditor {...rest} />}
					/>
					<Controller
						name="field"
						control={methods.control}
						defaultValue=""
						render={({ field: { ref, ...rest } }) => <FormField {...rest} />}
					/>
					<Controller
						name="dropzone"
						control={methods.control}
						render={({ field: { ref, ...rest } }) => (
							<FormDropzone {...rest} type="image/*" />
						)}
					/>
					<button type="submit" className="signup-button">
						Next
					</button>
				</FormControl>
			</FormProvider>
		</Stack>
	);
};

export default Admin;
