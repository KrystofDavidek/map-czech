/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
import { Stack, Button } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

import { Entry } from '../../models/entry';
import { SectionProps } from '../../pages/Admin';
import Text from '../Text';

import FormDropzone from './FormDropzone';
import FormEditor from './FormEditor';
import FormFields from './FormFields';

const ThirdSection = ({ setPage }: SectionProps) => {
	const methods = useFormContext<Entry>();
	return (
		<Stack spacing={2} sx={{ mt: 4, mb: 8, width: '100%', maxWidth: '55rem' }}>
			<Text variant="h3" component="h1" text="Multimediální obsah" />
			<Controller
				name="media.images"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormDropzone {...rest} title="Obrázky" type="image/*" />
				)}
			/>
			<FormFields />
			<Controller
				name="media.audios"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormDropzone {...rest} title="Audio" type="audio/*" />
				)}
			/>
			<Controller
				name="media.texts"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormEditor title="Texty" {...rest} />
				)}
			/>

			<Stack direction="row" sx={{ justifyContent: 'space-between' }}>
				<Button
					onClick={() => {
						setPage((prevState: number) => prevState - 1);
						window.scrollTo(0, 0);
					}}
				>
					Zpět
				</Button>
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

export default ThirdSection;
