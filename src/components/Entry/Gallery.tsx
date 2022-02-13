import {
	Box,
	ImageList,
	ImageListItem,
	ImageListItemBar,
	Divider,
	CircularProgress
} from '@mui/material';
import { useEffect } from 'react';
import Zoom from 'react-medium-image-zoom';

import 'react-medium-image-zoom/dist/styles.css';
import useAsyncFiles from '../../hooks/useAsyncFiles';
import { DropZone } from '../../models/entry';
import Text from '../Text';

type GalleryProps = {
	dropZone: DropZone;
};

const Gallery = ({ dropZone }: GalleryProps) => {
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
			<Text variant="h3" component="h1" text="Obrázky" />
			{!urls || !urls[0] ? (
				<CircularProgress sx={{ height: '20rem' }} />
			) : (
				<Box sx={{ overflowY: 'scroll', maxHeight: '80vh' }}>
					<ImageList variant="masonry" cols={2} gap={24}>
						{urls.map((url, i) => (
							<Zoom key={i} zoomMargin={24}>
								<ImageListItem>
									<img
										src={`${url}`}
										srcSet={`${url}`}
										alt={dropZone.names[i]?.name}
										loading="lazy"
									/>
									;
									<ImageListItemBar
										title={dropZone.names[i]?.name}
										position="below"
									/>
								</ImageListItem>
							</Zoom>
						))}
					</ImageList>
				</Box>
			)}
			<Divider />
		</>
	);
};

export default Gallery;
