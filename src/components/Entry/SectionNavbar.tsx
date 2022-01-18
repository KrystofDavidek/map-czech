import { Box, IconButton, Tab, Tabs } from '@mui/material';
import { useState, SyntheticEvent, useMemo, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';

import { useEntries } from '../../contexts/EntriesContext';

const options = {
	intro: 0,
	details: 1,
	media: 2,
	extra: 3
};

type OptionType = 'intro' | 'details' | 'media' | 'extra';

const SectionNavbar = () => {
	const [value, setValue] = useState(0);
	const navigate = useNavigate();
	const location = useLocation();
	const { currentEntry } = useEntries();
	const entryPath = useMemo(
		() => `/location/${currentEntry?.location.mainLocation}`,
		[currentEntry]
	);

	useEffect(() => {
		if (entryPath) navigate(`${entryPath}/intro`);
	}, []);

	useEffect(() => {
		for (const endpoint in options) {
			if (location.pathname.endsWith(endpoint))
				setValue(options[endpoint as OptionType]);
		}
	}, [location]);

	const handleChange = (_event: SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%', mt: 4 }}>
			<IconButton
				onClick={() => {
					navigate(`/`);
				}}
			>
				<ArrowBackSharpIcon sx={{ color: 'primary.main' }} />
			</IconButton>
			<Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
				<Tab component={Link} label="Úvod" to={`${entryPath}/intro`} />
				<Tab component={Link} label="Informace" to={`${entryPath}/details`} />
				<Tab
					component={Link}
					label="Multimediální obsah"
					to={`${entryPath}/media`}
				/>
				<Tab component={Link} label="Ostatní" to={`${entryPath}/extra`} />
			</Tabs>
		</Box>
	);
};

export default SectionNavbar;
