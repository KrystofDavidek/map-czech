import { Box, Divider } from '@mui/material';
import { useEffect, useState } from 'react';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

import 'react-medium-image-zoom/dist/styles.css';
import useAsyncFiles from '../../hooks/useAsyncFiles';
import { DropZone } from '../../models/entry';
import LoadingSpinner from '../LoadingSpinner';
import Text from '../Text';
import 'react-image-gallery/styles/css/image-gallery.css';

type GalleryProps = {
	dropZone: DropZone;
};

const Gallery = ({ dropZone }: GalleryProps) => {
	const { urls, setNames } = useAsyncFiles();
	const [loading, setLoading] = useState<boolean>(true);

	const [images, setImages] = useState<
		{
			original: string | undefined;
			thumbnail: string | undefined;
			description: string | undefined;
		}[]
	>([]);

	// eslint-disable-next-line react/jsx-no-useless-fragment
	if (!dropZone.files[0]) return <></>;

	useEffect(() => {
		if (urls?.[0]) {
			const newImages = urls.map((url, i) => ({
				original: url,
				thumbnail: url,
				description: dropZone.names[i]?.name
			}));
			setImages(newImages);
			setLoading(false);
		}
	}, [urls]);

	useEffect(() => {
		if (dropZone.files[0]) {
			setNames(dropZone.files);
		}
	}, [dropZone]);

	return (
		<>
			<Text variant="h3" component="h1" text="Obrázky" />
			{loading ? (
				<LoadingSpinner
					boxWidth="100%"
					height="5rem"
					width="5rem"
					textAlign="center"
					pt="2rem"
					pb="10rem"
				/>
			) : (
				<Box sx={{ mt: '3rem !important' }}>
					<ImageGallery
						lazyLoad
						showPlayButton={false}
						items={images as ReactImageGalleryItem[]}
					/>
				</Box>
			)}

			<Divider />
		</>
	);
};

export default Gallery;
