import { Button } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DialogPropsType } from '../../contexts/DialogContext';
import { useSnackbar } from '../../contexts/SnackbarContext';
import { Entry } from '../../models/entry';
import { deleteEntry } from '../../utils/firebase';
import LoadingSpinner from '../LoadingSpinner';

type Props = DialogPropsType<{
	entry: Entry;
}>;

export const DeleteDialog = ({ close, entry }: Props) => {
	const { showSnackbar } = useSnackbar();
	const navigate = useNavigate();
	const [loading, setLoading] = useState<boolean>(false);

	const removeEntry = async () => {
		if (!entry?.id) {
			showSnackbar({
				text: 'Problém s mazáním, zkuste prosím znovu',
				variant: 'error'
			});
			return;
		}
		setLoading(true);
		await deleteEntry(entry);
		setLoading(false);
		navigate('/');
		showSnackbar({
			text: 'Lokalita smazána',
			variant: 'success'
		});
	};

	const handleDelete = async () => {
		await removeEntry();
		close();
	};

	return loading ? (
		<>
			<DialogTitle>
				Odstraňuji lokalitu spolu se všemi vloženými mediálními soubory...
			</DialogTitle>
			<LoadingSpinner
				boxWidth="100%"
				width="5rem"
				height="5rem"
				textAlign="center"
				margin="2.5rem 0rem 5rem 0rem"
			/>
		</>
	) : (
		<>
			<DialogTitle>Smazat lokalitu</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Opravdu chcete smazat tuto lokalitu?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleDelete}>Ano</Button>
				<Button onClick={close}>Ne</Button>
			</DialogActions>
		</>
	);
};
