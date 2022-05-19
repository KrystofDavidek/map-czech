import { log } from 'console';

import { Stack, Button, Link } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

import { filters } from '../../data';
import { FilterKeys } from '../../data/filters';
import { Entry } from '../../models/entry';
import { SectionProps } from '../../pages/Admin';
import Text from '../Text';

import FormField from './FormField';
import FormSelect from './FormSelect';

const FifthSection = ({ setPage }: SectionProps) => {
	const methods = useFormContext<Entry>();

	return (
		<Stack spacing={3} sx={{ mt: 4, mb: 8, width: '100%', maxWidth: '55rem' }}>
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
			{/* Filters */}
			<Text variant="h4" component="h1" text="Podmínky pro třídění na mapě" />
			{Object.entries(filters).map(([key, filter]) => (
				<Controller
					key={key}
					name={`location.filters.${key as FilterKeys}`}
					control={methods.control}
					defaultValue={[]}
					render={({ field: { ref, ...rest } }) => (
						<FormSelect
							data={methods.watch(`location.filters.${key as FilterKeys}`)}
							filter={filter.values}
							title={filter.name}
							{...rest}
						/>
					)}
				/>
			))}
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
