import { DropzoneArea } from 'react-mui-dropzone';
import { createStyles, makeStyles } from '@mui/styles';

type FileType = 'audio/*' | 'video/*' | 'image/*';

type Props = { type?: FileType; filesLimit?: number };

const FormDropzone = (props: Props | any) => {
	const onDropzoneStateChange = (loadedFiles: File[]) =>
		props.onChange(loadedFiles);

	const useStyles = makeStyles(() =>
		createStyles({
			previewChip: {
				minWidth: 160,
				maxWidth: 210
			}
		})
	);

	const classes = useStyles();
	return (
		<DropzoneArea
			showPreviews
			showPreviewsInDropzone={false}
			useChipsForPreview
			previewGridProps={{ container: { spacing: 1, direction: 'row' } }}
			previewChipProps={{ classes: { root: classes.previewChip } }}
			onChange={loadedFiles => onDropzoneStateChange(loadedFiles)}
			dropzoneText="Klikněte, nebo sem přetáhněte soubor"
			acceptedFiles={[props.type ? props.type : 'image/*']}
			previewText=""
			filesLimit={props.filesLimit ? props.filesLimit : 10}
		/>
	);
};

export default FormDropzone;
