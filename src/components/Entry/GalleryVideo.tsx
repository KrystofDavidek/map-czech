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
	const matches = useMediaQuery('(max-width:1150px)');

	return (
		<>
			<Text variant="h3" component="h1" text="Videa" />
			<Box sx={{ overflowY: 'scroll', height: '80vh' }}>
				<ImageList variant="masonry" cols={matches ? 1 : 2} gap={24}>
					{videos.map(item => (
						<ImageListItem key={item.url}>
							<ReactPlayer
								url={item.url}
								width={520}
								style={{ margin: '1rem' }}
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
