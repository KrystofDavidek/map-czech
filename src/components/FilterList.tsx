import {
	Box,
	Checkbox,
	Divider,
	FormControlLabel,
	FormGroup,
	List,
	Button,
	Typography
} from '@mui/material';

import { defaultFilterState, useFilter } from '../contexts/FilterContext';
import { FilterKeys, filters } from '../data/filters';

const FilterList = () => {
	const { activeFilters, setActiveFilters } = useFilter();

	const getValue = (item: FilterKeys, filter: string) =>
		activeFilters[item].includes(filter);

	const handleChange = (item: FilterKeys, filter: string, checked: boolean) => {
		setActiveFilters({
			...activeFilters,
			[item]: checked
				? [...activeFilters[item], filter]
				: activeFilters[item].filter(item => item !== filter)
		});
	};

	return (
		<List
			sx={{
				p: '1rem',
				pt: 0,
				borderColor: 'primary.main',
				borderStyle: 'solid',
				borderWidth: '1px',
				borderTop: 'none',
				borderRadius: '5px'
			}}
		>
			<Button
				sx={{ mt: '1rem' }}
				onClick={() => {
					setActiveFilters(defaultFilterState);
				}}
				size="small"
			>
				Restartovat filtry
			</Button>
			{Object.keys(filters).map((item: string, index: number) => (
				<Box key={index}>
					<Typography
						sx={{ my: 2, width: { xs: '15rem', md: '100%' } }}
						variant="h5"
						component="div"
					>
						{filters[item as FilterKeys].name}
					</Typography>
					<FormGroup sx={{ ml: 2, mb: 2 }}>
						{filters[item as FilterKeys].values.map(
							(filter: string, index: number) => (
								<FormControlLabel
									key={index}
									control={
										<Checkbox
											value={getValue(item as FilterKeys, filter)}
											checked={getValue(item as FilterKeys, filter)}
											onChange={event => {
												handleChange(
													item as FilterKeys,
													filter,
													event.target.checked
												);
											}}
										/>
									}
									label={filter}
								/>
							)
						)}
					</FormGroup>
					<Divider sx={{ borderColor: 'primary.main' }} />
				</Box>
			))}
		</List>
	);
};

export default FilterList;
