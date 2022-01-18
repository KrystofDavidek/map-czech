import {
	Box,
	Button,
	DialogActions,
	DialogContent,
	DialogContentText,
	IconButton,
	Grid
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

					<DialogContent>
						<Grid container spacing={2} sx={{ m: 2 }}>
							<Grid item xs={12}>
								<DialogContentText variant="h3" sx={{ fontWeight: 500 }}>
									{currentEntry?.location?.mainLocation}
								</DialogContentText>
								<DialogContentText>
									{currentEntry?.location?.secondaryLocation}
								</DialogContentText>
							</Grid>
							<Grid item xs={12}>
								{currentEntry?.location?.introImage && (
									<Box
										component="img"
										alt="Intro"
										src={`../../assets/images/${currentEntry?.location?.introImage}`}
										sx={{ maxWidth: '100%', pr: '3.5rem' }}
									/>
								)}
							</Grid>
						</Grid>
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
