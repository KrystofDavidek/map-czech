import { Divider, Stack } from '@mui/material';
import { useMemo } from 'react';

import { useEntries } from '../../contexts/EntriesContext';
import Text from '../Text';

import TextSection from './TextSection';

const Extra = () => {
	const { currentEntry } = useEntries();
	const extra = useMemo(() => currentEntry?.extra, [currentEntry]);

	return (
		<Stack spacing={2}>
			<Text mb={2} variant="h3" component="h1" text="Ostatní" />
			{extra?.projects && (
				<>
					<Text variant="h4" component="h2" text="Projekty" />
					<TextSection texts={[extra?.projects]} />
					<Divider />
				</>
			)}
			{extra?.offers && (
				<>
					<Text variant="h4" component="h2" text="Nabídky" />
					<TextSection texts={[extra?.offers]} />
					<Divider />
				</>
			)}
			{extra?.attractions && (
				<>
					<Text variant="h4" component="h2" text="Atrakce" />
					<TextSection texts={[extra?.attractions]} />
					<Divider />
				</>
			)}
			{extra?.facts && (
				<>
					<Text variant="h4" component="h2" text="Zajímavosti" />
					<TextSection texts={[extra?.facts]} />
					<Divider />
				</>
			)}
			{extra?.resources && (
				<>
					<Text variant="h4" component="h2" text="Zdroje" />
					<TextSection texts={[extra?.resources]} />
					<Divider />
				</>
			)}
			{extra?.contact && (
				<>
					<Text variant="h4" component="h2" text="Kontakt" />
					<Text text={extra?.contact} />
				</>
			)}
		</Stack>
	);
};

export default Extra;
