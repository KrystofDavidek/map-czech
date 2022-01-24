import { Stack, Button, Divider } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

import { SectionProps } from '../../pages/Admin';
import Text from '../Text';

import FormDropzone from './FormDropzone';
import FormEditor from './FormEditor';

const SecondSection = ({ setPage }: SectionProps) => {
	const methods = useFormContext(); // retrieve all hook methods

	return (
		<Stack spacing={2} sx={{ mt: 4, mb: 8, width: '100%', maxWidth: '55rem' }}>
			<Text variant="h3" component="h1" text="Detailní informace" />
			<Text variant="h4" component="h2" text="Nahrávka" />
			<Controller
				name="details.record.comments"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormEditor title="Popis/komentář nahrávky" {...rest} />
				)}
			/>
			<Controller
				name="details.record.url"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormDropzone
						{...rest}
						title="Nahrávka"
						type="audio/*"
						filesLimit={1}
					/>
				)}
			/>
			<Controller
				name="details.record.transcript"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormEditor title="Přepis nahrávky" {...rest} />
				)}
			/>
			<Controller
				name="details.record.details"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormEditor
						title="Detaily, odkaz na jazykovou normu apod."
						{...rest}
					/>
				)}
			/>
			<Controller
				name="details.record.otherSources"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormEditor title="Další zdroje" {...rest} />
				)}
			/>
			<Divider />
			<Text variant="h4" component="h2" text="Historie a současnost" />

			<Controller
				name="details.record.history"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormEditor title="Historie" {...rest} />
				)}
			/>
			<Controller
				name="details.record.current"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormEditor title="Současnost" {...rest} />
				)}
			/>

			<Stack direction="row" sx={{ justifyContent: 'space-between' }}>
				<Button
					onClick={() => {
						setPage((prevState: number) => prevState - 1);
					}}
				>
					Zpět
				</Button>
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

export default SecondSection;
