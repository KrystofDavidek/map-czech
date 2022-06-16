import {
	Box,
	Checkbox,
	Divider,
	FormControlLabel,
	FormGroup,
	List,
	Button,
	Typography,
	Stack,
	Tooltip
} from '@mui/material';

import { useFeatures } from '../contexts/FeaturesContext';
import { defaultFilterState, useFilter } from '../contexts/FilterContext';
import { FilterKeys, filters } from '../data/filters';

const FilterList = () => {
	const { features } = useFeatures();
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
			<Stack
				direction="row"
				justifyContent="flex-start"
				alignItems="baseline"
				gap={2}
				sx={{
					position: 'sticky',
					top: 0,
					zIndex: 10,
					backgroundColor: 'white',
					pt: '0.5rem',
					pb: '1rem'
				}}
			>
				<Tooltip title="Počet nalezených lokalit">
					<Box
						sx={{
							backgroundColor: 'primary.main',
							color: 'white',
							fontWeight: 500,
							padding: '0.5rem',
							height: '1.5rem',
							width: '1.5rem',
							borderRadius: '50%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						{features.length}
					</Box>
				</Tooltip>
				<Button
					sx={{ mt: '1rem' }}
					onClick={() => {
						setActiveFilters(defaultFilterState);
					}}
					size="small"
				>
					Restartovat filtry
				</Button>
			</Stack>
			{Object.keys(filters).map((item: string, index: number) => (
				<Box sx={{ position: 'relative', zIndex: 1 }} key={index}>
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
