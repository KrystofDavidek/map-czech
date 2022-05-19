import { Stack, Button, Box } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

import { Entry } from '../../models/entry';
import { SectionProps } from '../../pages/Admin';
import Text from '../Text';

import FormEditor from './FormEditor';

const FourthSection = ({ setPage }: SectionProps) => {
	const methods = useFormContext<Entry>();

	return (
		<Stack spacing={4} sx={{ mt: 4, mb: 8, width: '100%', maxWidth: '55rem' }}>
			<Text variant="h3" component="h1" text="Ostatní" />
			<Controller
				name="extra.projects"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormEditor
						data={methods.watch('extra.projects')}
						title="Projekty"
						{...rest}
					/>
				)}
			/>
			<Controller
				name="extra.offers"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormEditor
						data={methods.watch('extra.offers')}
						title="Nabídky"
						{...rest}
					/>
				)}
			/>
			<Controller
				name="extra.attractions"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormEditor
						data={methods.watch('extra.attractions')}
						title="Atrakce"
						{...rest}
					/>
				)}
			/>
			<Controller
				name="extra.facts"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormEditor
						data={methods.watch('extra.facts')}
						title="Zajímavosti"
						{...rest}
					/>
				)}
			/>
			<Controller
				name="extra.resources"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormEditor
						data={methods.watch('extra.resources')}
						title="Zdroje"
						{...rest}
					/>
				)}
			/>
			<Controller
				name="extra.contact"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormEditor
						data={methods.watch('extra.contact')}
						title="Kontakt"
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

export default FourthSection;
