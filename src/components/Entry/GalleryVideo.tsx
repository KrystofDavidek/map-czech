import {
	Box,
	ImageList,
	ImageListItem,
	ImageListItemBar,
	useMediaQuery
} from '@mui/material';
import ReactPlayer from 'react-player';

import 'react-medium-image-zoom/dist/styles.css';

import { Media } from '../../models/entry';

import Text from './Text';

type GalleryProps = {
	videos: Media[] | undefined;
};

const GalleryVideo = ({ videos }: GalleryProps) => {
	// eslint-disable-next-line react/jsx-no-useless-fragment
	if (!videos?.[0]) return <></>;
	const matchesMax = useMediaQuery('(max-width:1150px)');
	const matchesMin = useMediaQuery('(max-width:650px)');

	return (
		<>
			<Text variant="h3" component="h1" text="Videa" />
			<Box sx={{ overflowY: 'scroll', maxHeight: '80vh' }}>
				<ImageList variant="masonry" cols={matchesMax ? 1 : 2} gap={24}>
					{videos.map((item, i) => (
						<ImageListItem key={i}>
							<ReactPlayer
								url={item.url}
								width={matchesMin ? '100%' : 520}
								height={matchesMin ? '100%' : 320}
								style={{ margin: '1rem' }}
								loading="lazy"
							/>
							<ImageListItemBar
								title={item.name}
								sx={{ ml: '1rem' }}
								position="below"
							/>
						</ImageListItem>
					))}
				</ImageList>
			</Box>
		</>
	);
};

export default GalleryVideo;
