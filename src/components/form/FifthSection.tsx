/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
import { Stack, Button, Link } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

import { filters } from '../../data';
import { Entry } from '../../models/entry';
import { SectionProps } from '../../pages/Admin';
import Text from '../Text';

import FormField from './FormField';
import FormSelect from './FormSelect';

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
			{/* Filters */}
			<Text variant="h4" component="h1" text="Podmínky pro třídění na mapě" />
			<Controller
				name="location.filters.arrivalTimes"
				control={methods.control}
				defaultValue={[]}
				render={({ field: { ref, ...rest } }) => (
					<FormSelect
						data={methods.watch('location.filters.arrivalTimes')}
						filter={filters.arrivalTimes.values}
						title={filters.arrivalTimes.name}
						{...rest}
					/>
				)}
			/>
			<Controller
				name="location.filters.extinctionPeriod"
				control={methods.control}
				defaultValue={[]}
				render={({ field: { ref, ...rest } }) => (
					<FormSelect
						data={methods.watch('location.filters.extinctionPeriod')}
						filter={filters.extinctionPeriod.values}
						title={filters.extinctionPeriod.name}
						{...rest}
					/>
				)}
			/>
			<Controller
				name="location.filters.communitySize"
				control={methods.control}
				defaultValue={[]}
				render={({ field: { ref, ...rest } }) => (
					<FormSelect
						data={methods.watch('location.filters.communitySize')}
						filter={filters.communitySize.values}
						title={filters.communitySize.name}
						{...rest}
					/>
				)}
			/>
			<Controller
				name="location.filters.dialectBase"
				control={methods.control}
				defaultValue={[]}
				render={({ field: { ref, ...rest } }) => (
					<FormSelect
						data={methods.watch('location.filters.dialectBase')}
						filter={filters.dialectBase.values}
						title={filters.dialectBase.name}
						{...rest}
					/>
				)}
			/>
			<Controller
				name="location.filters.numOfGenerations"
				control={methods.control}
				defaultValue={[]}
				render={({ field: { ref, ...rest } }) => (
					<FormSelect
						data={methods.watch('location.filters.numOfGenerations')}
						filter={filters.numOfGenerations.values}
						title={filters.numOfGenerations.name}
						{...rest}
					/>
				)}
			/>
			<Controller
				name="location.filters.motivation"
				control={methods.control}
				defaultValue={[]}
				render={({ field: { ref, ...rest } }) => (
					<FormSelect
						data={methods.watch('location.filters.motivation')}
						filter={filters.motivation.values}
						title={filters.motivation.name}
						{...rest}
					/>
				)}
			/>
			<Controller
				name="location.filters.existMedia"
				control={methods.control}
				defaultValue={[]}
				render={({ field: { ref, ...rest } }) => (
					<FormSelect
						data={methods.watch('location.filters.existMedia')}
						filter={filters.existMedia.values}
						title={filters.existMedia.name}
						{...rest}
					/>
				)}
			/>
			<Controller
				name="location.filters.religion"
				control={methods.control}
				defaultValue={[]}
				render={({ field: { ref, ...rest } }) => (
					<FormSelect
						data={methods.watch('location.filters.religion')}
						filter={filters.religion.values}
						title={filters.religion.name}
						{...rest}
					/>
				)}
			/>
			<Controller
				name="location.filters.reemigration"
				control={methods.control}
				defaultValue={[]}
				render={({ field: { ref, ...rest } }) => (
					<FormSelect
						data={methods.watch('location.filters.reemigration')}
						filter={filters.reemigration.values}
						title={filters.reemigration.name}
						{...rest}
					/>
				)}
			/>
			<Controller
				name="location.filters.typeOfEmigration"
				control={methods.control}
				defaultValue={[]}
				render={({ field: { ref, ...rest } }) => (
					<FormSelect
						data={methods.watch('location.filters.typeOfEmigration')}
						filter={filters.typeOfEmigration.values}
						title={filters.typeOfEmigration.name}
						{...rest}
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
