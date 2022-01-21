import { CloseOutlined, SearchOutlined } from '@mui/icons-material';
import { Box, IconButton, TextField } from '@mui/material';
import { ChangeEvent } from 'react';

import { useSearch } from '../contexts/SearchContext';

const search = () => {
	const { input, setInput, setSearching } = useSearch();

	const handleKeyDown = (event: { key: string }) => {
		if (event.key === 'Enter') {
			setSearching(true);
		}
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInput(event.target.value);
	};

	return (
		<TextField
			label="Lokace"
			onChange={handleChange}
			onKeyDown={handleKeyDown}
			value={input}
			InputProps={{
				endAdornment: (
					<Box
						sx={{
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
	);
};

export default search;
