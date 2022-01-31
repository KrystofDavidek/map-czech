import { DropzoneArea } from 'react-mui-dropzone';
import { createStyles, makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';

import Text from '../Text';
import { deleteFile, uploadFile } from '../../utils/firebase';
import { useSnackbar } from '../../contexts/SnackbarContext';

type FileType = 'audio/*' | 'video/*' | 'image/*';

type Props = { type?: FileType; filesLimit?: number; data?: any };

const FormDropzone = (props: Props & any) => {
	const { showSnackbar } = useSnackbar();
	const [files, setFiles] = useState<string[]>([]);
	const [initFiles, setInitFiles] = useState<string[]>([]);
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const useStyles = makeStyles(() =>
		createStyles({
			previewChip: {
				minWidth: 160,
				maxWidth: 210
			}
		})
	);
	const classes = useStyles();

	const onDropzoneStateChange = async (loadedFiles: File[]) => {
		if (loadedFiles.length > 0 && loadedFiles.length > files.length) {
			const newFile = loadedFiles[loadedFiles.length - 1];
			try {
				await uploadFile(newFile);
				setFiles(files => [...files, newFile.name]);
				showSnackbar({
					text: 'Úspěšně nahráno',
					variant: 'success'
				});
			} catch (e) {
				console.error('Error uploading file: ', e);
				showSnackbar({
					text: 'Nahrávání se nezdařilo',
					variant: 'error'
				});
			}
		}
	};

	const removeFile = async (removedFile: File) => {
		try {
			await deleteFile(removedFile);
			setFiles(files.filter(file => file !== removedFile.name));
			showSnackbar({
				text: 'Úspěšně smazáno',
				variant: 'success'
			});
		} catch (e) {
			console.error('Error deleting file: ', e);
			showSnackbar({
				text: 'Smazání se nezdařilo',
				variant: 'error'
			});
		}
	};

	useEffect(() => {
		setIsLoaded(true);
	}, [initFiles]);

	useEffect(() => {
		if (props?.data?.length > 0) {
			setInitFiles(props.data);
			setFiles(props.data);
		}
	}, []);

	useEffect(() => {
		props.onChange(files);
	}, [files]);

	return (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<>
			{isLoaded && (
				<>
					<Text variant="h5" component="h2" text={props.title} />
					<DropzoneArea
						initialFiles={props.data ? initFiles : []}
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
						onDelete={file => removeFile(file)}
						showAlerts={['error']}
					/>
				</>
			)}
		</>
	);
};

export default FormDropzone;
