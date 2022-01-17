import {
	Box,
	ImageList,
	ImageListItem,
	ImageListItemBar,
	useMediaQuery
} from '@mui/material';
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
	const matches = useMediaQuery('(max-width:1150px)');

	return (
		<>
			<Text variant="h3" component="h1" text="Nahrávky" />
			<Box sx={{ overflowY: 'scroll', maxHeight: '80vh' }}>
				<ImageList variant="masonry" cols={matches ? 1 : 2} gap={24}>
					{audios.map(item => (
						<ImageListItem key={item.url}>
							<AudioPlayer
								src={`../../assets/audio/${item.url}`}
								customAdditionalControls={[]}
								style={{
									width: 520,
									margin: '1rem'
								}}
							/>

							<ImageListItemBar
								sx={{ ml: '1rem' }}
								title={item.name}
								position="below"
							/>
						</ImageListItem>
					))}
				</ImageList>
			</Box>
		</>
	);
};

export default GalleryAudio;
