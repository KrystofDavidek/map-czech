import { Stack, Button } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

import { Entry } from '../../models/entry';
import { SectionProps } from '../../pages/Admin';
import Text from '../Text';

import FormDropzone from './FormDropzone';
import FormEditor from './FormEditor';
import FormField from './FormField';

const FirstSection = ({ setPage }: SectionProps) => {
	const methods = useFormContext<Entry>();

	return (
		<Stack spacing={4} sx={{ mt: 4, mb: 8, width: '100%', maxWidth: '55rem' }}>
			<Text variant="h3" component="h1" text="Úvod" />
			<Controller
				rules={{ required: true }}
				name="location.mainLocation"
				control={methods.control}
				defaultValue=""
				render={({ field: { ref, ...rest } }) => (
					<FormField {...rest} required title="Název hlavní lokality" />
				)}
			/>
			<Controller
				name="location.secondaryLocation"
				control={methods.control}
				defaultValue=""
				render={({ field: { ref, ...rest } }) => (
					<FormField {...rest} title="Název sekundární lokality" />
				)}
			/>
			<Controller
				name="location.introImage"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormDropzone
						data={methods.watch('location.introImage')}
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
				defaultValue=""
				render={({ field: { ref, ...rest } }) => (
					<FormEditor
						data={methods.watch('location.demographic')}
						title="Demografické údaje"
						{...rest}
					/>
				)}
			/>

			<Stack alignItems="end">
				<Button
					onClick={() => {
						setPage((prevState: number) => prevState + 1);
						window.scrollTo(0, 0);
					}}
				>
					Další
				</Button>
			</Stack>
		</Stack>
	);
};

export default FirstSection;
