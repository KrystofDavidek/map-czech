/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
import { Stack, Button, Divider } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

import { Entry } from '../../models/entry';
import { SectionProps } from '../../pages/Admin';
import Text from '../Text';

import FormEditor from './FormEditor';

const FourthSection = ({ setPage }: SectionProps) => {
	const methods = useFormContext<Entry>();
	return (
		<Stack spacing={2} sx={{ mt: 4, mb: 8, width: '100%', maxWidth: '55rem' }}>
			<Text variant="h3" component="h1" text="Ostatní" />
			<Controller
				name="extra.projects"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormEditor title="Projekty" {...rest} />
				)}
			/>
			<Divider />
			<Controller
				name="extra.offers"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormEditor title="Nabídky" {...rest} />
				)}
			/>
			<Divider />
			<Controller
				name="extra.attractions"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormEditor title="Atrakce" {...rest} />
				)}
			/>
			<Divider />
			<Controller
				name="extra.resources"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormEditor title="Zdroje" {...rest} />
				)}
			/>
			<Divider />
			<Controller
				name="extra.contact"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormEditor title="Kontakt" {...rest} />
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

export default FourthSection;