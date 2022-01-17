import { Divider, Stack } from '@mui/material';
import { useMemo } from 'react';

import { useEntries } from '../../contexts/EntriesContext';

import Text from './Text';
import Gallery from './Gallery';
import GalleryVideo from './GalleryVideo';
import GalleryAudio from './GalleryAudio';
import TextSection from './TextSection';

const Media = () => {
	const { currentEntry } = useEntries();
	const media = useMemo(() => currentEntry?.media, [currentEntry]);

	return (
		<Stack spacing={2}>
			<Gallery images={media?.images} />
			<Divider />
			<GalleryVideo videos={media?.videos} />
			<Divider />
			<GalleryAudio audios={media?.audios} />

			{media?.others && (
				<>
					<Divider />
					<Text variant="h3" component="h1" text="Ostatní" />
					{media?.others.map((section, i) => (
						<TextSection
							key={i}
							title={section.name}
							texts={[section.url]}
							includeLinks
						/>
					))}
				</>
			)}
		</Stack>
	);
};

export default Media;
