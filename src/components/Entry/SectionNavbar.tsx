import { Box, Tab, Tabs } from '@mui/material';
import { useState, SyntheticEvent, useMemo, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useEntries } from '../../contexts/EntriesContext';

const SectionNavbar = () => {
	const [value, setValue] = useState(0);
	const navigate = useNavigate();
	const { currentEntry } = useEntries();
	const entryPath = useMemo(
		() => `/location/${currentEntry?.location.mainLocation}`,
		[currentEntry]
	);

	useEffect(() => {
		if (entryPath) navigate(`${entryPath}/intro`);
	}, []);

	const handleChange = (_event: SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%', mt: 4 }}>
			<Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
				<Tab component={Link} label="Úvod" to={`${entryPath}/intro`} />
				<Tab component={Link} label="Informace" to={`${entryPath}/details`} />
				<Tab
					component={Link}
					label="Multimediální obsah"
					to={`${entryPath}/media`}
				/>
				<Tab component={Link} label="Ostatní" to={`${entryPath}/others`} />
			</Tabs>
		</Box>
	);
};

export default SectionNavbar;
