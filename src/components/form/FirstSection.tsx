import { Stack, Button } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

import { SectionProps } from '../../pages/Admin';
import Text from '../Text';

import FormDropzone from './FormDropzone';
import FormEditor from './FormEditor';
import FormField from './FormField';

const FirstSection = ({ setPage }: SectionProps) => {
	const methods = useFormContext();

	return (
		<Stack spacing={2} sx={{ mt: 4, mb: 8, width: '100%', maxWidth: '55rem' }}>
			<Text variant="h3" component="h1" text="Úvod" />
			<Controller
				rules={{ required: true }}
				name="location.mainLocation"
				control={methods.control}
				defaultValue=""
				render={({ field: { ref, ...rest } }) => (
					<FormField {...rest} required title="Název hlavní lokace" />
				)}
			/>
			<Controller
				name="location.secondaryLocation"
				control={methods.control}
				defaultValue=""
				render={({ field: { ref, ...rest } }) => (
					<FormField {...rest} title="Název sekundární lokace" />
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
			<Stack alignItems="end">
				<Button
					onClick={() => {
						setPage((prevState: number) => prevState + 1);
					}}
				>
					Další
				</Button>
			</Stack>
		</Stack>
	);
};

export default FirstSection;
