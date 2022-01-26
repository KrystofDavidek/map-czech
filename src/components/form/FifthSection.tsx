/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
import { Stack, Button, Link } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

import { Entry } from '../../models/entry';
import { SectionProps } from '../../pages/Admin';
import Text from '../Text';

import FormField from './FormField';

const FifthSection = ({ setPage }: SectionProps) => {
	const methods = useFormContext<Entry>();

	return (
		<Stack spacing={2} sx={{ mt: 4, mb: 8, width: '100%', maxWidth: '55rem' }}>
			<Text variant="h3" component="h1" text="Geografická data" />
			<Link
				target="_blank"
				href="https://geoman.io/geojson-editor"
				sx={{ wordWrap: 'break-word', cursor: 'pointer' }}
			>
				https://geoman.io/geojson-editor
			</Link>
			<Controller
				rules={{ required: true }}
				name="feature"
				control={methods.control}
				defaultValue=""
				render={({ field: { ref, ...rest } }) => (
					<FormField
						data={methods.watch('feature')}
						{...rest}
						required
						isGeoJson
					/>
				)}
			/>
			<Button variant="contained" size="large" type="submit">
				Odeslat data
			</Button>
			<Stack direction="row" sx={{ justifyContent: 'space-between' }}>
				<Button
					onClick={() => {
						setPage((prevState: number) => prevState - 1);
						window.scrollTo(0, 0);
					}}
				>
					Zpět
				</Button>
			</Stack>
		</Stack>
	);
};

export default FifthSection;
