/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
import { FormControl, Box, LinearProgress } from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import FirstSection from '../components/form/FirstSection';
import SecondSection from '../components/form/SecondSection';
import ThirdSection from '../components/form/ThirdSection';
import FourthSection from '../components/form/FourthSection';
import FifthSection from '../components/form/FifthSection';
import { Entry } from '../models/entry';
import { mockEntry } from '../data';

export type SectionProps = { setPage: Dispatch<SetStateAction<number>> };

const Admin = () => {
	const [page, setPage] = useState(0);
	const methods = useForm<Entry>({
		mode: 'onChange',
		defaultValues: mockEntry
	});
	const handleSubmitOnClick = (data: Entry) => {
		console.log(data);
	};

	return (
		<>
			<Box sx={{ mt: 1, width: '100%', round: '100%' }}>
				<LinearProgress variant="determinate" value={(page + 1) * 20} />
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
	);
};

export default Admin;
