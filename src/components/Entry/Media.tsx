import { Stack } from '@mui/material';
import { useMemo } from 'react';

import { useEntries } from '../../contexts/EntriesContext';

import Gallery from './Gallery';
import GalleryVideo from './GalleryVideo';

const Media = () => {
	const { currentEntry } = useEntries();
	const media = useMemo(() => currentEntry?.media, [currentEntry]);

	return (
		<Stack spacing={2}>
			<Gallery images={media?.images} />
			<GalleryVideo videos={media?.videos} />
		</Stack>
	);
};

export default Media;
