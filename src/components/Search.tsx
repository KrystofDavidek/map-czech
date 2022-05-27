import { CloseOutlined, SearchOutlined } from '@mui/icons-material';
import { Autocomplete, Box, IconButton, TextField } from '@mui/material';
import { ChangeEvent, SyntheticEvent } from 'react';

import { useFeatures } from '../contexts/FeaturesContext';
import { useSearch } from '../contexts/SearchContext';

const search = () => {
	const { input, setInput, setSearching } = useSearch();
	const { features, setZoomTo } = useFeatures();

	const handleKeyDown = (event: { key: string }) => {
		if (event.key === 'Enter') {
			setSearching(true);
		}
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInput(event.target.value);
	};

	const handleAutocompleteChange = (
		_event: SyntheticEvent,
		newValue: string | null
	) => {
		setInput(newValue ? newValue : '');
		const selectedFeature = features.find(
			feature => feature.properties.mainLocation === newValue
		);
		if (selectedFeature) {
			setZoomTo(selectedFeature.geometry.coordinates);
		}
	};

	return (
		<Autocomplete
			sx={{ width: { xs: '100%', sm: '30rem' }, mb: 2 }}
			id="searchbar"
			options={features
				.map(feature => feature.properties.mainLocation)
				.sort((a, b) => -b[0].localeCompare(a[0]))}
			filterOptions={x => x}
			freeSolo
			value={input}
			onChange={handleAutocompleteChange}
			onKeyDown={handleKeyDown}
			renderInput={params => (
				<TextField
					label="Lokalita"
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					{...params}
					InputProps={{
						...params.InputProps,
						endAdornment: (
							<Box
								sx={{
									marginRight: -4,
									display: 'flex'
								}}
							>
								<IconButton onClick={() => setSearching(true)}>
									<SearchOutlined sx={{ color: 'primary.main' }} />
								</IconButton>
								<IconButton
									onClick={() => {
										setSearching(false);
										setInput('');
									}}
								>
									<CloseOutlined sx={{ color: 'primary.main' }} />
								</IconButton>
							</Box>
						)
					}}
				/>
			)}
		/>
	);
};

export default search;
