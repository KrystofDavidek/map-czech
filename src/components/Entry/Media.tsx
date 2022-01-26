import { Divider, Stack } from '@mui/material';
import { useMemo } from 'react';

import { useEntries } from '../../contexts/EntriesContext';
import Text from '../Text';

import GalleryVideo from './GalleryVideo';
import TextSection from './TextSection';

const Media = () => {
	const { currentEntry } = useEntries();
	const media = useMemo(() => currentEntry?.media, [currentEntry]);

	return (
		<Stack spacing={2}>
			{/* <Gallery images={media?.images} /> */}
			{media?.texts?.[0] && (
				<>
					<Text variant="h3" component="h1" text="Texty" />
					<TextSection texts={[media?.texts]} />
					<Divider />
				</>
			)}

			{/* <GalleryAudio audios={media?.audios} /> */}
			<GalleryVideo videos={media?.videos} />
			{media?.others?.[0] && (
				<>
					<Text variant="h3" component="h1" text="Ostatní" />
					<TextSection texts={[media?.others]} />
				</>
			)}
		</Stack>
	);
};

export default Media;
