import { DropzoneArea } from 'react-mui-dropzone';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { useLocation } from 'react-router-dom';
import { useFormContext } from 'react-hook-form';

import Text from '../Text';
import { deleteFile, uploadFile } from '../../utils/firebase';
import { useSnackbar } from '../../contexts/SnackbarContext';
import { Entry } from '../../models/entry';

type FileType = 'audio/*' | 'video/*' | 'image/*';

type Props = { type?: FileType; filesLimit?: number; data?: any };

const useStyles = makeStyles(() =>
	createStyles({
		dropzoneLoading: {
			pointerEvents: 'none',
			border: '1px solid #C6C6C6',
			padding: '1rem',
			borderRadius: '4px'
		},
		dropzone: {
			pointerEvents: 'auto',
			border: '1px solid #C6C6C6',
			padding: '1rem',
			borderRadius: '4px'
		}
	})
);

const FormDropzone = (props: Props & any) => {
	const methods = useFormContext<Entry>();
	const location = useLocation();
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
			try {
				let newFiles;
				// dropzone always load all files that were previously inside
				if (files.length !== props.filesLimit) {
					newFiles = loadedFiles.slice(files.length);
				} else {
					// remove when automatically replace imgs
					newFiles = loadedFiles;
					if (files.length === 1) {
						removeFile(files[0]);
					}
				}
				newFiles.forEach(async newFile => {
					await uploadFile(newFile);
					setFiles(files => [...files, newFile.name]);
					showSnackbar({
						text: 'Úspěšně nahráno',
						variant: 'success'
					});
				});
			} catch (e: any) {
				console.error('Error uploading file: ', e);
				setIsLoading(false);
				showSnackbar({
					text: e?.message
						? e.message
						: 'Nahrávání se nezdařilo, problém v komunikaci s databází',
					variant: 'error'
				});
			}
		} else {
			setIsInit(false);
		}
	};

	const checkIfFileExistsInEntry = (file: string) => {
		if (props.type === 'image/*') {
			if (props.name === 'location.introImage') {
				return methods.watch('media.images')?.files?.includes(file);
			} else {
				return methods.watch('location.introImage')[0] === file;
			}
		} else if (props.type === 'audio/*') {
			if (props.name === 'details.record.url') {
				return methods.watch('media.audios')?.files?.includes(file);
			} else {
				return methods.watch('details.record.url')[0] === file;
			}
		}
	};

	const removeFile = async (removedFile: string) => {
		setIsLoading(true);
		let text = 'Úspěšně smazáno z databáze';
		try {
			if (checkIfFileExistsInEntry(removedFile)) {
				text =
					'Úspěšně smazáno, soubor ale zůstává v databázi, protože je přítomen v jiné části';
			} else {
				await deleteFile(removedFile);
			}
			setFiles(files.filter(file => file !== removedFile));
			showSnackbar({
				text,
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

	// Has to be dep. location.pathname, otherwise component is not rerendered/initialized
	useEffect(() => {
		setIsInit(true);
		if (props?.data?.length > 0) {
			setInitFiles(props.data);
			setFiles(props.data);
		}
	}, [location.pathname]);

	useEffect(() => {
		props.onChange(files.sort());
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
							showPreviews
							showPreviewsInDropzone={false}
							useChipsForPreview
							previewGridProps={{
								container: { mt: 2, spacing: 1, direction: 'row' }
							}}
							onDelete={file => removeFile(file.name)}
							onChange={loadedFiles => onDropzoneStateChange(loadedFiles)}
							dropzoneText="Klikněte, nebo sem přetáhněte soubor"
							acceptedFiles={[props.type ? props.type : 'image/*']}
							previewText=""
							filesLimit={props.filesLimit ? props.filesLimit : 10}
							showAlerts={['error']}
							maxFileSize={30000000}
						/>
					</Box>
				</>
			)}
		</>
	);
};

export default FormDropzone;
