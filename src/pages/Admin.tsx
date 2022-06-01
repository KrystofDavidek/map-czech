import {
	FormControl,
	Box,
	LinearProgress,
	Stack,
	Button,
	Tooltip,
	IconButton
} from '@mui/material';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Delete } from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
import { over } from 'lodash';

import FirstSection from '../components/Form/FirstSection';
import SecondSection from '../components/Form/SecondSection';
import ThirdSection from '../components/Form/ThirdSection';
import FourthSection from '../components/Form/FourthSection';
import FifthSection from '../components/Form/FifthSection';
import { Entry } from '../models/entry';
import { useEntries } from '../contexts/EntriesContext';
import { addNewEntry } from '../utils/firebase';
import { defaultEntry } from '../data';
import { DeleteDialog } from '../components/Dialogs/DeleteDialog';
import { useDialog } from '../contexts/DialogContext';
import { useSnackbar } from '../contexts/SnackbarContext';
import { defaultFilterState, useFilter } from '../contexts/FilterContext';
import { ToEntryDialog } from '../components/Dialogs/ToEntryDialog';

export type SectionProps = { setPage: Dispatch<SetStateAction<number>> };

const Admin = () => {
	const { setActiveFilters } = useFilter();
	const { showSnackbar } = useSnackbar();
	const navigate = useNavigate();
	const { currentEntry } = useEntries();
	const { openDialog } = useDialog();
	const [page, setPage] = useState(-1);
	const methods = useForm<Entry>({
		mode: 'onChange',
		defaultValues: defaultEntry
	});

	const handleOnDeleteClick = () => {
		openDialog({
			Content: DeleteDialog,
			props: {
				entry: currentEntry
			}
		});
	};

	useEffect(() => {
		if (currentEntry.id) {
			methods.reset(currentEntry);
		} else {
			methods.reset({});
			navigate('/admin/new');
		}
		setPage(0);
	}, [currentEntry]);

	const handleSubmitOnClick = async (data: Entry) => {
		if (data?.location?.mainLocation?.length > 0) {
			console.log(data);
			try {
				await addNewEntry(data);
				setActiveFilters(defaultFilterState);
				showSnackbar({
					text: 'Lokalita úspěšně nahrána',
					variant: 'success'
				});
			} catch (e) {
				showSnackbar({
					text: 'Lokalitu se nepodařilo nahrát, problém na serveru',
					variant: 'error'
				});
			}
			navigate('/');
		} else {
			showSnackbar({
				text: 'Lokalitu se nepodařilo nahrát, zkontrolujte, zda máte vyplněný hlavní název lokality.',
				variant: 'error'
			});
		}
	};

	return (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<>
			{page !== -1 && (
				<>
					<Box sx={{ width: '100%' }}>
						<LinearProgress variant="determinate" value={(page + 1) * 20} />
						<Stack
							direction="row"
							sx={{
								justifyContent: 'space-between',
								gap: { xs: '3rem', md: 0 },
								overflow: 'auto'
							}}
						>
							<Button
								onClick={() => {
									setPage(0);
								}}
							>
								Úvod
							</Button>
							<Button
								onClick={() => {
									setPage(1);
								}}
							>
								Detailní informace
							</Button>
							<Button
								onClick={() => {
									setPage(2);
								}}
							>
								Multimediální obsah
							</Button>
							<Button
								onClick={() => {
									setPage(3);
								}}
							>
								Ostatní
							</Button>
							<Button
								onClick={() => {
									setPage(4);
								}}
							>
								Geografická data
							</Button>
						</Stack>

						{currentEntry.id && (
							<Stack
								direction="row"
								sx={{
									mt: 2,
									justifyContent: 'space-between'
								}}
							>
								<Tooltip title="Přejít na lokalitu" placement="top">
									<IconButton
										color="primary"
										onClick={() => {
											setTimeout(() => {
												openDialog({
													Content: ToEntryDialog,
													props: {
														location: currentEntry.location.mainLocation
													}
												});
											}, 500);
										}}
									>
										<VisibilityIcon />
									</IconButton>
								</Tooltip>
								<Tooltip title="Smazat lokalitu" placement="top">
									<IconButton onClick={handleOnDeleteClick}>
										<Delete sx={{ color: 'red' }} />
									</IconButton>
								</Tooltip>
							</Stack>
						)}
					</Box>
					<FormProvider {...methods}>
						<FormControl
							sx={{
								width: '100%',
								alignItems: 'center',
								p: { xs: 2, sm: 4 },
								pb: 10
							}}
							component="form"
							onSubmit={methods.handleSubmit(handleSubmitOnClick)}
						>
							{page === 0 && <FirstSection setPage={setPage} />}
							{page === 1 && <SecondSection setPage={setPage} />}
							{page === 2 && <ThirdSection setPage={setPage} />}
							{page === 3 && <FourthSection setPage={setPage} />}
							{page === 4 && <FifthSection setPage={setPage} />}
						</FormControl>
					</FormProvider>
				</>
			)}
		</>
	);
};

export default Admin;
