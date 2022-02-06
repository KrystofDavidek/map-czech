import {
	Box,
	Checkbox,
	Divider,
	FormControlLabel,
	FormGroup,
	IconButton,
	List,
	Tooltip,
	Typography
} from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { defaultFilterState, useFilter } from '../contexts/FilterContext';
import { FilterKeys, filters } from '../data/filters';

const FilterList = () => {
	const { activeFilters, setActiveFilters } = useFilter();

	const getValue = (item: FilterKeys, filter: string) =>
		activeFilters[item].includes(filter);

	const handleChange = (item: FilterKeys, filter: string, checked: boolean) => {
		if (checked) {
			setActiveFilters({
				...activeFilters,
				[item]: [...activeFilters[item], filter]
			});
		} else {
			setActiveFilters({
				...activeFilters,
				[item]: activeFilters[item].filter(item => item !== filter)
			});
		}
	};
	return (
		<List sx={{ p: '1rem' }}>
			<Divider />

			{Object.keys(filters).map((item: string, index: number) => (
				<Box key={index}>
					{index === 0 ? (
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'flex-start'
							}}
						>
							<Typography sx={{ my: 2 }} variant="h5" component="div">
								{filters[item as FilterKeys].name}
							</Typography>
							<Tooltip title="Restartovat filtry">
								<IconButton
									onClick={() => {
										setActiveFilters(defaultFilterState);
									}}
									color="inherit"
								>
									<HighlightOffIcon />
								</IconButton>
							</Tooltip>
						</Box>
					) : (
						<Typography sx={{ my: 2 }} variant="h5" component="div">
							{filters[item as FilterKeys].name}
						</Typography>
					)}
					<FormGroup sx={{ ml: 2 }}>
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
					<Divider />
				</Box>
			))}
		</List>
	);
};

export default FilterList;
