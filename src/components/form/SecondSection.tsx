/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
import { Stack, Button, Divider } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

import { Entry } from '../../models/entry';
import { SectionProps } from '../../pages/Admin';
import Text from '../Text';

import FormDropzone from './FormDropzone';
import FormEditor from './FormEditor';

const SecondSection = ({ setPage }: SectionProps) => {
	const methods = useFormContext<Entry>();

	return (
		<Stack spacing={2} sx={{ mt: 4, mb: 8, width: '100%', maxWidth: '55rem' }}>
			<Text variant="h3" component="h1" text="Detailní informace" />
			<Text variant="h4" component="h2" text="Nahrávka" />
			<Controller
				name="details.record.comments"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormEditor
						data={methods.watch('details.record.comments')}
						title="Popis/komentář nahrávky"
						{...rest}
					/>
				)}
			/>
			<Controller
				name="details.record.url"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormDropzone
						data={methods.watch('details.record.url')}
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
					<FormEditor
						data={methods.watch('details.record.transcript')}
						title="Přepis nahrávky"
						{...rest}
					/>
				)}
			/>
			<Controller
				name="details.record.details"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormEditor
						data={methods.watch('details.record.details')}
						title="Detaily, odkaz na jazykovou normu apod."
						{...rest}
					/>
				)}
			/>
			<Controller
				name="details.record.otherSources"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormEditor
						data={methods.watch('details.record.otherSources')}
						title="Další zdroje"
						{...rest}
					/>
				)}
			/>
			<Divider />
			<Text variant="h4" component="h2" text="Historie a současnost" />

			<Controller
				name="details.history"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormEditor
						data={methods.watch('details.history')}
						title="Historie"
						{...rest}
					/>
				)}
			/>
			<Controller
				name="details.current"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormEditor
						data={methods.watch('details.current')}
						title="Současnost"
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

export default SecondSection;
