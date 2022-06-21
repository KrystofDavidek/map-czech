import { Box, IconButton, Stack, Tab, Tabs, Tooltip } from '@mui/material';
import { useState, SyntheticEvent, useMemo, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import SettingsIcon from '@mui/icons-material/Settings';

import { useEntries } from '../../contexts/EntriesContext';
import useUserContext from '../../contexts/UserContext';

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
	const { user } = useUserContext();

	useEffect(() => {
		entryPath === '/location/' ? navigate(`/`) : navigate(`${entryPath}/intro`);
	}, []);

	useEffect(() => {
		let isSet = false;
		for (const endpoint in options) {
			if (location.pathname.endsWith(endpoint)) {
				isSet = true;
				setValue(options[endpoint as OptionType]);
			}
		}
		if (!isSet) setValue(0);
	}, [location]);

	const handleChange = (_event: SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Stack direction="row">
				<IconButton
					onClick={() => {
						navigate(`/`);
					}}
				>
					<ArrowBackSharpIcon sx={{ color: 'primary.main' }} />
				</IconButton>
				{user && (
					<Tooltip sx={{ ml: 'auto' }} title="Upravit lokalitu">
						<IconButton
							onClick={() =>
								navigate(`/admin/${currentEntry.location.mainLocation}`)
							}
							color="primary"
						>
							<SettingsIcon />
						</IconButton>
					</Tooltip>
				)}
			</Stack>
			<Tabs
				variant="scrollable"
				value={value}
				onChange={handleChange}
				aria-label="nav tabs example"
			>
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
