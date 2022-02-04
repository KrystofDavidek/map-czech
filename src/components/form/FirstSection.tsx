/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
import { Stack, Button } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

import { filters } from '../../data/filters';
import { Entry } from '../../models/entry';
import { SectionProps } from '../../pages/Admin';
import Text from '../Text';

import FormDropzone from './FormDropzone';
import FormEditor from './FormEditor';
import FormField from './FormField';
import FormSelect from './FormSelect';

const FirstSection = ({ setPage }: SectionProps) => {
	const methods = useFormContext<Entry>();

	return (
		<Stack spacing={2} sx={{ mt: 4, mb: 8, width: '100%', maxWidth: '55rem' }}>
			<Text variant="h3" component="h1" text="Úvod" />
			<Controller
				rules={{ required: true }}
				name="location.mainLocation"
				control={methods.control}
				defaultValue=""
				render={({ field: { ref, ...rest } }) => (
					<FormField {...rest} required title="Název hlavní lokace" />
				)}
			/>
			<Controller
				name="location.secondaryLocation"
				control={methods.control}
				defaultValue=""
				render={({ field: { ref, ...rest } }) => (
					<FormField {...rest} title="Název sekundární lokace" />
				)}
			/>
			<Controller
				name="location.introImage"
				control={methods.control}
				render={({ field: { ref, ...rest } }) => (
					<FormDropzone
						data={methods.watch('location.introImage')}
						{...rest}
						title="Úvodní obrázek"
						type="image/*"
						filesLimit={1}
					/>
				)}
			/>
			<Controller
				name="location.demographic"
				control={methods.control}
				defaultValue=""
				render={({ field: { ref, ...rest } }) => (
					<FormEditor
						data={methods.watch('location.demographic')}
						title="Demografické údaje"
						{...rest}
					/>
				)}
			/>

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
			<Stack alignItems="end">
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

export default FirstSection;
