import { TextField } from '@mui/material';
import { useState } from 'react';

import { FeatureCollection } from '../../models/feature';
import Text from '../Text';

type Props = {
	title?: string;
	required?: boolean;
	isGeoJson?: boolean;
	data?: string;
};

const FormField = ({
	title,
	isGeoJson,
	required,
	data,
	...field
}: Props & any) => {
	const [value, setValue] = useState(data ? data : '');
	const [error, setError] = useState('');

	const onFieldChange = (e: { target: { value: string } }) => {
		try {
			const object = JSON.parse(e.target.value.trim());
			if ((object as FeatureCollection).type && object.features.length === 1) {
				setError('');
				setValue(
					JSON.stringify(object.features[0], null, 2).replace(/\\"/g, '"')
				);
				return field.onChange(JSON.stringify(object.features[0]));
			}
		} catch (error) {
			setValue(e.target.value);
			setError('Není zkopírován správný formát geografických dat');
			return field.onChange('');
		}
	};

	return (
		<>
			<Text variant="h5" component="h2" text={title} />
			{isGeoJson ? (
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
					required={required}
					label={required ? 'Povinné pole' : ''}
				/>
			) : (
				<TextField
					{...field}
					required={required}
					variant="outlined"
					fullWidth
					label={required ? 'Povinné pole' : ''}
					margin="dense"
				/>
			)}
		</>
	);
};

export default FormField;
