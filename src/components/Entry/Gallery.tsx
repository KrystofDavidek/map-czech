import {
	Box,
	ImageList,
	ImageListItem,
	ImageListItemBar,
	Divider,
	useMediaQuery,
	Theme,
	Grid,
	Stack
} from '@mui/material';
import { useEffect } from 'react';
import Zoom from 'react-medium-image-zoom';

import 'react-medium-image-zoom/dist/styles.css';
import useAsyncFiles from '../../hooks/useAsyncFiles';
import { DropZone } from '../../models/entry';
import LoadingSpinner from '../LoadingSpinner';
import Text from '../Text';

type GalleryProps = {
	dropZone: DropZone;
};

const Gallery = ({ dropZone }: GalleryProps) => {
	const { urls, setNames } = useAsyncFiles();
	const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

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
				<LoadingSpinner
					boxWidth="100%"
					height="5rem"
					width="5rem"
					textAlign="center"
					pt="2rem"
					pb="10rem"
				/>
			) : (
				<Box sx={{ overflowY: 'scroll', maxHeight: '80vh' }}>
					{!matches ? (
						<ImageList variant="masonry" cols={2} gap={24}>
							{urls.map((url, i) => (
								<Zoom key={i} zoomMargin={24}>
									<ImageListItem sx={{ maxWidth: '30rem' }}>
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
					) : (
						<Box>
							{urls.map((url, i) => (
								<Stack key={i} direction="column">
									<img
										width="100%"
										height="100%"
										src={`${url}`}
										alt={dropZone.names[i]?.name}
										loading="lazy"
									/>
									<p>{dropZone.names[i]?.name}</p>
								</Stack>
							))}
						</Box>
					)}
				</Box>
			)}
			<Divider />
		</>
	);
};

export default Gallery;
