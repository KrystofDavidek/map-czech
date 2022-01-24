/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
import { Button, TextField, Stack } from '@mui/material';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { Entry } from '../../models/entry';

const FormFields = () => {
	const { control } = useFormContext<Entry>();
	const { fields, append, remove } = useFieldArray({
		control,
		name: 'media.images'
	});

	return (
		<>
			{fields.map((item, index) => (
				<Stack direction="row" key={item.id}>
					<TextField
						name={`media.images.${index}.name` as const}
						variant="outlined"
						sx={{ mx: 4, width: '100%' }}
						margin="dense"
						label={`Jméno/popisek k ${index + 1}. obrázku`}
						multiline
					/>
					<Button type="button" onClick={() => remove(index)}>
						Smazat
					</Button>
				</Stack>
			))}
			<Button
				type="button"
				onClick={() => {
					append({ name: '' });
				}}
			>
				Přidat názvy/popisky
			</Button>
		</>
	);
};

export default FormFields;
