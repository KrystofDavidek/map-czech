import { Button } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';

import { DialogPropsType } from '../../contexts/DialogContext';

type Props = DialogPropsType<{
	location: string;
}>;

export const ToEntryDialog = ({ close, location }: Props) => (
	<>
		<DialogTitle>Potvrzení</DialogTitle>
		<DialogContent>
			<DialogContentText>
				Opravdu chcete přejít na lokaci? Změny <strong>nebudou</strong> uloženy.
			</DialogContentText>
		</DialogContent>
		<DialogActions>
			<Button onClick={close}>Ne</Button>
			<Button onClick={close} component={Link} to={`/location/${location}`}>
				Ano
			</Button>
		</DialogActions>
	</>
);
