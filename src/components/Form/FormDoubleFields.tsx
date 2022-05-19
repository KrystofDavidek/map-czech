import { Button, Stack, TextField } from '@mui/material';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { Entry } from '../../models/entry';

type Props = {
	controlName: 'media.videos';
};

const FormDoubleFields = ({ controlName }: Props) => {
	const { control, register } = useFormContext<Entry>();
	const { fields, append, remove } = useFieldArray({
		control,
		name: controlName
	});

	return (
		<>
			{fields.map((item, index) => (
				<Stack direction="row" key={item.id}>
					<TextField
						{...register(`${controlName}.${index}.name` as const)}
						variant="outlined"
						sx={{ mx: 4, width: '100%' }}
						margin="dense"
						label={`Jméno / krátký popisek k ${index + 1}. odkazu`}
						multiline
					/>
					<TextField
						{...register(`${controlName}.${index}.url` as const)}
						variant="outlined"
						sx={{ mx: 4, width: '100%' }}
						margin="dense"
						label={`${index + 1}. odkaz`}
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
				Přidat názvy/popisky/URL pro video
			</Button>
		</>
	);
};

export default FormDoubleFields;
