import { DropzoneArea } from 'react-mui-dropzone';
import { createStyles, makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import { useState } from 'react';

import Text from '../Text';
import { deleteFile, fileExis, uploadFile } from '../../utils/firebase';

type FileType = 'audio/*' | 'video/*' | 'image/*';

type Props = { type?: FileType; filesLimit?: number; data?: any };

const FormDropzone = (props: Props & any) => {
	const [files, setFiles] = useState<File[]>([]);

	const onDropzoneStateChange = (loadedFiles: File[]) => {
		setFiles(loadedFiles);
	};

	const useStyles = makeStyles(() =>
		createStyles({
			previewChip: {
				minWidth: 160,
				maxWidth: 210
			}
		})
	);

	const upload = () => {
		const names: string[] = [];
		files.forEach((file: string | File) => {
			if (file instanceof File) {
				uploadFile(file);
				names.push(file.name);
			}
		});
		props.onChange(names);
	};

	const checkInitFiles = (files: string[]) => {
		const initFiles: string[] = [];
		files.forEach(async file => {
			if (await fileExis(file)) {
				initFiles.push(file);
			}
		});
		return initFiles;
	};

	const classes = useStyles();
	return (
		<>
			<Text variant="h5" component="h2" text={props.title} />
			<DropzoneArea
				initialFiles={props.data ? checkInitFiles(props.data) : []}
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
				onDelete={file => deleteFile(file)}
			/>
			{files.length > 0 && (
				<Button onClick={() => upload()}>Nahrát nové soubory</Button>
			)}
		</>
	);
};

export default FormDropzone;
