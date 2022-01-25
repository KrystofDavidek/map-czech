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
import { IMAGE_URL_PREFIX } from '../../App';
import { getEntry } from '../../utils/firebase';

type Props = DialogPropsType<{
	feature: Feature;
}>;

const FeatureDialog = ({ feature, close }: Props) => {
	const { currentEntry, setCurrentEntry } = useEntries();

	useEffect(() => {
		const getData = async () => {
			const entry = await getEntry('63ed34d4-58d0-46bf-aa75-f9db0f89bfc5');
			if (entry) setCurrentEntry(entry);
		};
		getData();
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
										src={`${IMAGE_URL_PREFIX}${currentEntry?.location?.introImage}`}
										sx={{ maxWidth: '100%', pr: '3.5rem' }}
									/>
								)}
							</Grid>
						</Grid>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>Ne</Button>
						<Button
							onClick={close}
							component={Link}
							to={`/location/${currentEntry?.location?.mainLocation}`}
						>
							Přejít na lokaci
						</Button>
					</DialogActions>
				</>
			)}
		</>
	);
};

export default FeatureDialog;
