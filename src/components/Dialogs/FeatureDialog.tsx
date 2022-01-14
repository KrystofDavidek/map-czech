import {
	Box,
	Button,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { DialogPropsType } from '../../contexts/DialogContext';
import { Feature } from '../../models/feature';
import { useEntries } from '../../contexts/EntriesContext';
import { mockEntry } from '../../data';

type Props = DialogPropsType<{
	feature: Feature;
}>;

const FeatureDialog = ({ feature, close }: Props) => {
	const { currentEntry, setCurrentEntry } = useEntries();

	useEffect(() => {
		// TODO: connect to API
		if (feature) setCurrentEntry(mockEntry);
	}, [feature]);

	const handleClose = () => {
		close();
		setCurrentEntry(undefined);
	};
	return (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<>
			{currentEntry && (
				<>
					<DialogTitle>
						{currentEntry?.location?.mainLocation}
						<IconButton
							aria-label="close"
							onClick={handleClose}
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
						{currentEntry?.location?.introImage && (
							<Box>
								<img
									height="200"
									width="200"
									alt="Intro"
									src={`../../assets/images/${currentEntry?.location?.introImage}`}
								/>
							</Box>
						)}
						<DialogContentText>ID of this feature is:</DialogContentText>
						<DialogContentText sx={{ fontWeight: 500 }}>
							{feature.id}
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>No</Button>
						<Button
							onClick={close}
							component={Link}
							to={`/location/${currentEntry?.location?.mainLocation}`}
						>
							Go to Location
						</Button>
					</DialogActions>
				</>
			)}
		</>
	);
};

export default FeatureDialog;
