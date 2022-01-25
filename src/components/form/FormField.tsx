import { TextField } from '@mui/material';
import { useState } from 'react';

import { FeatureCollection } from '../../models/feature';
import Text from '../Text';

type Props = { title?: string; isGeoJson?: boolean };

const FormField = (field: Props & any) => {
	const [value, setValue] = useState('');
	const [error, setError] = useState('');

	const onFieldChange = (e: { target: { value: string } }) => {
		console.log(e.target.value.trim());

		if (e.target.value) {
			try {
				const object = JSON.parse(e.target.value.trim());
				if ((object as FeatureCollection).type) {
					if (object.features.length === 1) {
						setError('');
						setValue(JSON.stringify(object.features[0], null, 2));
						return field.onChange(JSON.stringify(object.features[0]));
					}
				}
			} catch (error) {
				setValue('');
				setError('Není zkopírován správný formát geografických dat');
				return field.onChange('');
			}
		}
	};

	return (
		<>
			<Text variant="h5" component="h2" text={field.title} />
			{field.isGeoJson ? (
				<TextField
					{...field}
					onChange={onFieldChange}
					variant="outlined"
					value={value}
					multiline
					fullWidth
					error={!!error}
					helperText={error}
					margin="dense"
				/>
			) : (
				<TextField {...field} variant="outlined" fullWidth margin="dense" />
			)}
		</>
	);
};

export default FormField;
