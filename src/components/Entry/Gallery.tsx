import { Box, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import Zoom from 'react-medium-image-zoom';

import 'react-medium-image-zoom/dist/styles.css';
import { IMAGE_URL_PREFIX } from '../../App';
import { Media } from '../../models/entry';
import Text from '../Text';

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
					{images.map((item, i) => (
						<Zoom key={i} zoomMargin={24}>
							<ImageListItem>
								{item.url.startsWith('http') ? (
									<img
										src={`${item.url}?w=248&fit=crop&auto=format`}
										srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
										alt={item.name}
										loading="lazy"
									/>
								) : (
									<img
										src={`${IMAGE_URL_PREFIX}${item.url}?w=248&fit=crop&auto=format`}
										srcSet={`${IMAGE_URL_PREFIX}${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
										alt={item.name}
										loading="lazy"
									/>
								)}
								;
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
