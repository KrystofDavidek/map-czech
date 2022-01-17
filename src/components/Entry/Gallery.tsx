import { Box, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import Zoom from 'react-medium-image-zoom';

import 'react-medium-image-zoom/dist/styles.css';
import { Media } from '../../models/entry';

import Text from './Text';

type GalleryProps = {
	images: Media[] | undefined;
};

const Gallery = ({ images }: GalleryProps) => {
	// eslint-disable-next-line react/jsx-no-useless-fragment
	if (!images?.[0]) return <></>;

	return (
		<>
			<Text variant="h3" component="h1" text="Obrázky" />
			<Box sx={{ overflowY: 'scroll', maxHeight: '80vh' }}>
				<ImageList variant="masonry" cols={2} gap={24}>
					{images.map(item => (
						<Zoom key={item.url} zoomMargin={24}>
							<ImageListItem>
								<img
									src={`../../assets/images/${item.url}?w=248&fit=crop&auto=format`}
									srcSet={`../../assets/images/${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
									alt={item.name}
									loading="lazy"
								/>

								<ImageListItemBar title={item.name} position="below" />
							</ImageListItem>
						</Zoom>
					))}
				</ImageList>
			</Box>
		</>
	);
};

export default Gallery;
