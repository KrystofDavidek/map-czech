import { Box, Stack } from '@mui/material';
import AudioPlayer from 'react-h5-audio-player';

import 'react-medium-image-zoom/dist/styles.css';

import { Media } from '../../models/entry';

import Text from './Text';

type GalleryProps = {
	audios: Media[] | undefined;
};

const GalleryAudio = ({ audios }: GalleryProps) => {
	// eslint-disable-next-line react/jsx-no-useless-fragment
	if (!audios?.[0]) return <></>;

	return (
		<>
			<Text variant="h3" component="h1" text="Nahrávky" />
			<Stack sx={{ overflowY: 'scroll', maxHeight: '80vh' }} spacing={4}>
				{audios.map((item, i) => (
					<Box key={i}>
						<AudioPlayer
							src={`../../assets/audio/${item.url}`}
							customAdditionalControls={[]}
							style={{
								maxWidth: '90%',
								margin: '1rem'
							}}
						/>
						<Text sx={{ ml: '1rem' }} text={item.name} />
					</Box>
				))}
			</Stack>
		</>
	);
};

export default GalleryAudio;
