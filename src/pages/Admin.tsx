/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
import { FormControl } from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import FirstSection from '../components/form/FirstSection';
import SecondSection from '../components/form/SecondSection';
import { Entry } from '../models/entry';

export type SectionProps = { setPage: Dispatch<SetStateAction<number>> };

const Admin = () => {
	const [page, setPage] = useState(1);
	const methods = useForm<Entry>();
	const handleSubmitOnClick = (data: Entry) => {
		console.log(data);
	};

	return (
		<FormProvider {...methods}>
			<FormControl
				sx={{ width: '100%', alignItems: 'center' }}
				component="form"
				onSubmit={methods.handleSubmit(handleSubmitOnClick)}
			>
				{page === 0 && <FirstSection setPage={setPage} />}
				{page === 1 && <SecondSection setPage={setPage} />}
			</FormControl>
		</FormProvider>
	);
};

export default Admin;
