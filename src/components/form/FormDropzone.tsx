import { DropzoneArea } from 'react-mui-dropzone';
import { createStyles, makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';

type FileType = 'audio/*' | 'video/*' | 'image/*';

const FormDropzone = ({ type }: { type: FileType }) => {
	const [files, setFiles] = useState<File[]>([]);

	const useStyles = makeStyles(() =>
		createStyles({
			previewChip: {
				minWidth: 160,
				maxWidth: 210
			}
		})
	);

	useEffect(() => {
		console.log(files);
	}, [files]);

	const classes = useStyles();
	return (
		<DropzoneArea
			showPreviews
			showPreviewsInDropzone={false}
			useChipsForPreview
			previewGridProps={{ container: { spacing: 1, direction: 'row' } }}
			previewChipProps={{ classes: { root: classes.previewChip } }}
			onChange={loadedFiles => setFiles(loadedFiles)}
			dropzoneText="Klikněte, nebo sem přetáhněte soubor"
			acceptedFiles={[type]}
			previewText=""
		/>
	);
};

export default FormDropzone;
