/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
import { Stack, Button, Divider } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

import { Entry } from '../../models/entry';
import { SectionProps } from '../../pages/Admin';
import Text from '../Text';

import FormDoubleFields from './FormDoubleFields';
import FormDropzone from './FormDropzone';
import FormEditor from './FormEditor';
import FormFields from './FormFields';

const ThirdSection = ({ setPage }: SectionProps) => {
	const methods = useFormContext<Entry>();
	return (
		<Stack spacing={2} sx={{ mt: 4, mb: 8, width: '100%', maxWidth: '55rem' }}>
			<Text variant="h3" component="h1" text="Multimediální obsah" />
			<Controller
				name="media.images.files"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormDropzone {...rest} title="Obrázky" type="image/*" />
				)}
			/>
			<FormFields controlName="media.images.names" />
			<Divider />
			<Controller
				name="media.audios"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormDropzone {...rest} title="Audio" type="audio/*" />
				)}
			/>
			<FormFields controlName="media.audios.names" />
			<Divider />
			<Text variant="h5" component="h2" text="Videa" />
			<FormDoubleFields controlName="media.videos" />
			<Divider />
			<Controller
				name="media.texts"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormEditor title="Texty" {...rest} />
				)}
			/>
			<Divider />
			<Controller
				name="media.others"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormEditor title="Ostatní" {...rest} />
				)}
			/>
			<input type="submit" />
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
