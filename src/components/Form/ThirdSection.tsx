import { Stack, Button } from '@mui/material';
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
					<FormDropzone
						data={methods.watch('media.images.files')}
						{...rest}
						title="Obrázky"
						type="image/*"
					/>
				)}
			/>
			<FormFields controlName="media.images.names" />
			<Controller
				name="media.audios.files"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormDropzone
						data={methods.watch('media.audios.files')}
						{...rest}
						title="Audio"
						type="audio/*"
					/>
				)}
			/>
			<FormFields controlName="media.audios.names" />
			<Text variant="h5" component="h2" text="Videa" />
			<FormDoubleFields controlName="media.videos" />
			<Controller
				name="media.texts"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormEditor
						data={methods.watch('media.texts')}
						title="Texty"
						{...rest}
					/>
				)}
			/>
			<Controller
				name="media.others"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormEditor
						data={methods.watch('media.others')}
						title="Ostatní"
						{...rest}
					/>
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
