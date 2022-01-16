import { Box, Tab, Tabs } from '@mui/material';
import { useState, SyntheticEvent, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SectionNavbar = ({ entryPath }: { entryPath: string }) => {
	const [value, setValue] = useState(0);
	const navigate = useNavigate();

	useEffect(() => {
		if (entryPath) navigate(`${entryPath}/intro`);
	}, [entryPath]);

	const handleChange = (_event: SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
				<Tab component={Link} label="Intro" to={`${entryPath}/intro`} />
				<Tab component={Link} label="Details" to={`${entryPath}/details`} />
				<Tab component={Link} label="Media" to={`${entryPath}/media`} />
				<Tab component={Link} label="Others" to={`${entryPath}/others`} />
			</Tabs>
		</Box>
	);
};

export default SectionNavbar;
