import {
	Button,
	DialogActions,
	DialogContent,
	DialogContentText,
	IconButton,
	Grid,
	CircularProgress
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { DialogPropsType } from '../../contexts/DialogContext';
import { Feature } from '../../models/feature';
import { useEntries } from '../../contexts/EntriesContext';
import { getEntry } from '../../utils/firebase';
import { defaultEntry } from '../../data';
import useAsyncFiles from '../../hooks/useAsyncFiles';
import Image from '../entry/Image';

type Props = DialogPropsType<{
	feature: Feature;
}>;

const FeatureDialog = ({ feature, close }: Props) => {
	const { currentEntry, setCurrentEntry } = useEntries();
	const { urls, setNames } = useAsyncFiles(true);

	useEffect(() => {
		const getData = async () => {
			const entry = await getEntry(feature.id);
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
									// eslint-disable-next-line react/jsx-no-useless-fragment
									<>
										{urls?.length === 0 ? (
											<CircularProgress sx={{ height: '20rem' }} />
										) : (
											<Image
												alt="Intro"
												src={urls?.[0]}
												sx={{ maxHeight: '20rem', maxWidth: '100%' }}
											/>
										)}
									</>
								)}
							</Grid>
						</Grid>
					</DialogContent>
					<DialogActions>
						<Button
							onClick={close}
							component={Link}
							to={`/admin/${currentEntry?.location?.mainLocation}`}
						>
							Upravit lokaci
						</Button>
					</DialogActions>
					<DialogActions>
						<Button onClick={handleClose}>Zpátky</Button>
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
