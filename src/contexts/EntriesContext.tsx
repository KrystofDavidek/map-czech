import { createContext, useContext, useState } from 'react';

import { Entry } from '../models/entry';

type EntriesContextType = {
	currentEntry: Entry | undefined;
	setCurrentEntry: React.Dispatch<React.SetStateAction<Entry | undefined>>;
};

const EntriesContext = createContext<EntriesContextType>(undefined as never);

export const useEntries = () => useContext(EntriesContext);

export const EntriesProvider = ({ children }: { children: JSX.Element }) => {
	const [currentEntry, setCurrentEntry] = useState<Entry | undefined>(
		undefined
	);

	return (
		<EntriesContext.Provider
			value={{
				currentEntry,
				setCurrentEntry
			}}
		>
			{children}
		</EntriesContext.Provider>
	);
};
