/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
import { FormControl, Stack } from '@mui/material';
import { useForm, FormProvider, Controller } from 'react-hook-form';

import FormDropzone from '../components/form/FormDropzone';
import FormEditor from '../components/form/FormEditor';
import FormField from '../components/form/FormField';
import { Entry } from '../models/entry';
import Text from '../components/Text';

const Admin = () => {
	const methods = useForm<Entry>();
	const handleSubmitOnClick = (data: Entry) => {
		console.log(data);
	};

	return (
		<FormProvider {...methods}>
			<FormControl
				sx={{ width: '100%', alignItems: 'center' }}
				component="form"
				onSubmit={methods.handleSubmit(handleSubmitOnClick)}
			>
				<Stack
					spacing={2}
					sx={{ mt: 4, mb: 8, width: '100%', maxWidth: '55rem' }}
				>
					<Text variant="h3" component="h1" text="Úvod" />
					<Controller
						rules={{ required: true }}
						name="location.mainLocation"
						control={methods.control}
						defaultValue=""
						render={({ field: { ref, ...rest } }) => (
							<FormField {...rest} required title="Hlavní lokace" />
						)}
					/>
					<Controller
						name="location.secondaryLocation"
						control={methods.control}
						defaultValue=""
						render={({ field: { ref, ...rest } }) => (
							<FormField {...rest} title="Sekundární lokace" />
						)}
					/>
					<Controller
						name="location.introImage"
						control={methods.control}
						render={({ field: { ref, ...rest } }) => (
							<FormDropzone
								{...rest}
								title="Úvodní obrázek"
								type="image/*"
								filesLimit={1}
							/>
						)}
					/>
					<Controller
						name="location.demographic"
						control={methods.control}
						render={({ field: { ref, ...rest } }) => (
							<FormEditor title="Demografické údaje" {...rest} />
						)}
					/>

					<button type="submit" className="signup-button">
						Next
					</button>
				</Stack>
			</FormControl>
		</FormProvider>
	);
};

export default Admin;
