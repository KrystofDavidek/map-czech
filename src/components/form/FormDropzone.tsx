import { DropzoneArea } from 'react-mui-dropzone';
import { useEffect, useState } from 'react';
import { Box, Chip, Stack } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';

import Text from '../Text';
import { deleteFile, uploadFile } from '../../utils/firebase';
import { useSnackbar } from '../../contexts/SnackbarContext';

type FileType = 'audio/*' | 'video/*' | 'image/*';

type Props = { type?: FileType; filesLimit?: number; data?: any };

const useStyles = makeStyles(() =>
	createStyles({
		dropzoneLoading: {
			pointerEvents: 'none'
		},
		dropzone: {
			pointerEvents: 'auto'
		}
	})
);

const FormDropzone = (props: Props & any) => {
	const { showSnackbar } = useSnackbar();
	const [files, setFiles] = useState<string[]>([]);
	const [initFiles, setInitFiles] = useState<string[]>([]);
	const [isFetched, setIsFetched] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isInit, setIsInit] = useState<boolean>(true);
	const classes = useStyles();

	const onDropzoneStateChange = (loadedFiles: File[]) => {
		if (loadedFiles.length > 0 && !isInit) {
			setIsLoading(true);
			loadedFiles.forEach(async newFile => {
				try {
					if (files.length === props.filesLimit)
						throw new Error('Files limit reached');
					await uploadFile(newFile);
					setFiles(files => [...files, newFile.name]);

					showSnackbar({
						text: 'Úspěšně nahráno',
						variant: 'success'
					});
				} catch (e) {
					console.error('Error uploading file: ', e);
					setIsLoading(false);
					showSnackbar({
						text: 'Nahrávání se nezdařilo',
						variant: 'error'
					});
				}
			});
		} else {
			setIsInit(false);
		}
	};

	const removeFile = async (removedFile: string) => {
		setIsLoading(true);
		try {
			await deleteFile(removedFile);
			setFiles(files.filter(file => file !== removedFile));
			showSnackbar({
				text: 'Úspěšně smazáno',
				variant: 'success'
			});
		} catch (e: any) {
			console.error('Error deleting file: ', e);
			if (e?._baseMessage?.endsWith(`(storage/object-not-found)`)) {
				setFiles(files.filter(file => file !== removedFile));
			} else {
				showSnackbar({
					text: 'Smazání se nezdařilo',
					variant: 'error'
				});
			}
			setIsLoading(false);
		}
	};

	useEffect(() => {
		setIsFetched(true);
	}, [initFiles]);

	useEffect(() => {
		if (props?.data?.length > 0) {
			setInitFiles(props.data);
			setFiles(props.data);
		}
	}, []);

	useEffect(() => {
		props.onChange(files);
		setIsLoading(false);
	}, [files]);

	return (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<>
			{isFetched && (
				<>
					<Text variant="h5" component="h2" text={props.title} />
					<Box sx={{ cursor: isLoading ? 'wait' : 'pointer' }}>
						<DropzoneArea
							dropzoneClass={
								isLoading ? classes.dropzoneLoading : classes.dropzone
							}
							initialFiles={props.data ? initFiles : []}
							showPreviewsInDropzone={false}
							onChange={loadedFiles => onDropzoneStateChange(loadedFiles)}
							dropzoneText="Klikněte, nebo sem přetáhněte soubor"
							acceptedFiles={[props.type ? props.type : 'image/*']}
							previewText=""
							filesLimit={props.filesLimit ? props.filesLimit : 10}
							showAlerts={['error']}
							maxFileSize={30000000}
						/>
					</Box>

					<Stack direction="row" spacing={1}>
						{files.map((file: string) => (
							<Chip
								key={file}
								label={file}
								variant="outlined"
								onDelete={() => removeFile(file)}
							/>
						))}
					</Stack>
				</>
			)}
		</>
	);
};

export default FormDropzone;
