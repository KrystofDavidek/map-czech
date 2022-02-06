import { Box, Stack, Divider, CircularProgress } from '@mui/material';
import 'react-medium-image-zoom/dist/styles.css';
import { useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';

import { DropZone } from '../../models/entry';
import useAsyncFiles from '../../hooks/useAsyncFiles';
import Text from '../Text';

type GalleryProps = {
	dropZone: DropZone;
};

const GalleryAudio = ({ dropZone }: GalleryProps) => {
	const { urls, setNames } = useAsyncFiles();

	// eslint-disable-next-line react/jsx-no-useless-fragment
	if (!dropZone.files[0]) return <></>;

	useEffect(() => {
		if (dropZone.files[0]) {
			setNames(dropZone.files);
		}
	}, [dropZone]);

	return (
		<>
			<Text variant="h3" component="h1" text="Nahrávky" />
			{!urls || !urls[0] ? (
				<CircularProgress sx={{ height: '20rem' }} />
			) : (
				<Stack sx={{ overflowY: 'scroll', maxHeight: '80vh' }} spacing={2}>
					{urls.map((url, i) => (
						<Box key={i}>
							<AudioPlayer
								src={`${url}`}
								customAdditionalControls={[]}
								style={{
									maxWidth: '90%',
									margin: '1rem'
								}}
							/>
							<Text sx={{ ml: '1rem' }} text={dropZone.names[i]?.name} />
						</Box>
					))}
				</Stack>
			)}
			<Divider />
		</>
	);
};

export default GalleryAudio;
