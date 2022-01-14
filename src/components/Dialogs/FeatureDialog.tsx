import {
	Button,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { DialogPropsType } from '../../contexts/DialogContext';

type Props = DialogPropsType<{
	feature: any;
}>;

const FeatureDialog = ({ feature, close }: Props) => {
	const handleDelete = () => {
		close();
	};
	return (
		<>
			<DialogTitle>
				{feature?.properties?.name}
				<IconButton
					aria-label="close"
					onClick={close}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
						color: theme => theme.palette.grey[500]
					}}
				>
					<CloseIcon />
				</IconButton>
			</DialogTitle>
			<DialogContent>
				<DialogContentText>ID of this feature is:</DialogContentText>
				<DialogContentText sx={{ fontWeight: 500 }}>
					{feature.id}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleDelete}>Yes</Button>
				<Button onClick={close}>No</Button>
			</DialogActions>
		</>
	);
};

export default FeatureDialog;
