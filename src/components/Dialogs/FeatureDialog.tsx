import {
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
import { getEntryById } from '../../utils/firebase';
import { defaultEntry } from '../../data';
import useAsyncFiles from '../../hooks/useAsyncFiles';
import Image from '../Entry/Image';
import useUserContext from '../../contexts/UserContext';
import LoadingSpinner from '../LoadingSpinner';

type Props = DialogPropsType<{
	feature: Feature;
}>;

const FeatureDialog = ({ feature, close }: Props) => {
	const { currentEntry, setCurrentEntry } = useEntries();
	const { urls, setNames } = useAsyncFiles(true);
	const { user } = useUserContext();

	useEffect(() => {
		const getData = async () => {
			const entry = await getEntryById(feature.id);
			if (entry) {
				setCurrentEntry(entry);
				if (entry.location?.introImage) setNames(entry.location.introImage);
			}
		};
		getData();
	}, [feature]);

	const handleClose = () => {
		close();
		setCurrentEntry(defaultEntry);
	};
	return (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<>
			{currentEntry.id && (
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
						<Grid container sx={{ m: 2, gap: 2 }}>
							<Grid item xs={12}>
								<DialogContentText variant="h3" sx={{ fontWeight: 500 }}>
									{currentEntry?.location?.mainLocation}
								</DialogContentText>
								<DialogContentText>
									{currentEntry?.location?.secondaryLocation}
								</DialogContentText>
							</Grid>
							<Grid item xs={12}>
								{currentEntry?.location?.introImage.length > 0 && (
									// eslint-disable-next-line react/jsx-no-useless-fragment
									<>
										{!urls || urls.length === 0 ? (
											<LoadingSpinner
												boxWidth="70%"
												textAlign="center"
												pt="2rem"
											/>
										) : (
											<Image
												alt="Intro"
												src={urls?.[0]}
												sx={{
													maxHeight: '20rem',
													maxWidth: '100%',
													width: '95%'
												}}
											/>
										)}
									</>
								)}
							</Grid>
						</Grid>
					</DialogContent>
					<DialogActions>
						{user && (
							<Button
								onClick={close}
								component={Link}
								to={`/admin/${currentEntry?.location?.mainLocation}`}
							>
								Upravit lokalitu
							</Button>
						)}
					</DialogActions>
					<DialogActions>
						<Button onClick={handleClose}>Zpátky</Button>
						<Button
							sx={{ textAlign: 'right' }}
							onClick={close}
							component={Link}
							to={`/location/${currentEntry?.location?.mainLocation}`}
						>
							Přejít na lokalitu
						</Button>
					</DialogActions>
				</>
			)}
		</>
	);
};

export default FeatureDialog;
