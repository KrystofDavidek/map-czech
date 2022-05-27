import { Button } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';

import { DialogPropsType } from '../../contexts/DialogContext';
import { useSnackbar } from '../../contexts/SnackbarContext';
import { Entry } from '../../models/entry';
import { deleteEntry } from '../../utils/firebase';

type Props = DialogPropsType<{
	entry: Entry;
}>;

export const DeleteDialog = ({ close, entry }: Props) => {
	const { showSnackbar } = useSnackbar();
	const navigate = useNavigate();

	const removeEntry = async () => {
		if (!entry?.id) {
			showSnackbar({
				text: 'Problém s mazáním, zkuste prosím znovu',
				variant: 'error'
			});
			return;
		}
		await deleteEntry(entry?.id);
		navigate('/');
		showSnackbar({
			text: 'Lokalita smazána',
			variant: 'success'
		});
	};

	const handleDelete = () => {
		removeEntry();
		close();
	};

	return (
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
