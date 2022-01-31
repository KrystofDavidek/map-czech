import { DropzoneArea } from 'react-mui-dropzone';
import { createStyles, makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';

import Text from '../Text';
import { deleteFile, fileExist, uploadFile } from '../../utils/firebase';

type FileType = 'audio/*' | 'video/*' | 'image/*';

type Props = { type?: FileType; filesLimit?: number; data?: any };

const FormDropzone = (props: Props & any) => {
	const [files, setFiles] = useState<File[]>([]);
	const [initFiles, setInitFiles] = useState<any[]>([]);
	const [isLoaded, setIsLoaded] = useState<boolean>(false);

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

	useEffect(() => {
		if (!props.data) {
			return props.onChange([]);
		}
		const fetchExists = async () => {
			if (props.data) {
				return Promise.all(
					props.data.map(async (file: string) => await fileExist(file))
				);
			}
		};
		const loadInits = async () => {
			const exists = await fetchExists();
			exists?.forEach((exist, i) => {
				if (exist) {
					setIsLoaded(false);
					setInitFiles(oldArray => [...oldArray, props.data[i]]);
				}
			});
		};
		loadInits();
	}, [props.data]);

	useEffect(() => {
		setIsLoaded(true);
	}, [initFiles]);

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

	const classes = useStyles();
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
						onDelete={file => deleteFile(file)}
					/>
					{files.length > 0 && (
						<Button onClick={() => upload()}>Nahrát nové soubory</Button>
					)}
				</>
			)}
		</>
	);
};

export default FormDropzone;
