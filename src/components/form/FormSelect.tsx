import {
	Checkbox,
	FormControl,
	ListItemText,
	MenuItem,
	Select,
	SelectChangeEvent
} from '@mui/material';
import React, { useEffect } from 'react';

import Text from '../Text';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250
		}
	}
};

const FormSelect = (props: any) => {
	const [filterValues, setFilterValues] = React.useState<string[]>(
		props.data ? props.data : []
	);

	const handleChange = (event: SelectChangeEvent<typeof filterValues>) => {
		const {
			target: { value }
		} = event;
		setFilterValues(typeof value === 'string' ? value.split(',') : value);
	};

	useEffect(() => {
		if (filterValues.length > 0) return props.onChange(filterValues);
	}, [filterValues]);

	return (
		<>
			<Text variant="h5" component="h2" text={props.title} />
			<FormControl sx={{ m: 1, width: '100%' }}>
				<Select
					multiple
					value={filterValues}
					onChange={handleChange}
					renderValue={selected => selected.join(', ')}
					MenuProps={MenuProps}
				>
					{props.filter.map((name: string) => (
						<MenuItem key={name} value={name}>
							<Checkbox checked={filterValues.indexOf(name) > -1} />
							<ListItemText primary={name} />
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</>
	);
};

export default FormSelect;
