/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
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
import { useNavigate } from 'react-router-dom';

import FirstSection from '../components/form/FirstSection';
import SecondSection from '../components/form/SecondSection';
import ThirdSection from '../components/form/ThirdSection';
import FourthSection from '../components/form/FourthSection';
import FifthSection from '../components/form/FifthSection';
import { Entry } from '../models/entry';
import { useEntries } from '../contexts/EntriesContext';
import { addNewEntry } from '../utils/firebase';
import { defaultEntry } from '../data';
import { DeleteDialog } from '../components/dialogs/DeleteDialog';
import { useDialog } from '../contexts/DialogContext';
import { useSnackbar } from '../contexts/SnackbarContext';

export type SectionProps = { setPage: Dispatch<SetStateAction<number>> };

const Admin = () => {
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
		if (data) {
			console.log(data);
			try {
				await addNewEntry(data);
				showSnackbar({
					text: 'Lokalita úspěšně nahrána',
					variant: 'success'
				});
			} catch (e) {
				showSnackbar({
					text: 'Lokalitu se nepodařilo nahrát',
					variant: 'error'
				});
				console.log(`Error when adding/editing${e}`);
			}
			navigate('/');
		}
	};

	return (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<>
			{page !== -1 && (
				<>
					<Box sx={{ mt: 1, width: '100%' }}>
						<LinearProgress variant="determinate" value={(page + 1) * 20} />
						<Stack direction="row" sx={{ justifyContent: 'space-between' }}>
							<Button
								onClick={() => {
									setPage(0);
								}}
							>
								Na začátek
							</Button>
							<Button
								onClick={() => {
									setPage(4);
								}}
							>
								Na konec
							</Button>
						</Stack>
						{currentEntry.id && (
							<Stack direction="row" sx={{ justifyContent: 'right' }}>
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
							sx={{ width: '100%', alignItems: 'center' }}
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
