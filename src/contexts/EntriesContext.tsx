import {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useState
} from 'react';

import { defaultEntry } from '../data';
import { Entry } from '../models/entry';

type EntriesContextType = {
	currentEntry: Entry;
	setCurrentEntry: Dispatch<SetStateAction<Entry>>;
	isLoading: boolean;
	setLoading: Dispatch<SetStateAction<boolean>>;
};

const EntriesContext = createContext<EntriesContextType>(undefined as never);

export const useEntries = () => useContext(EntriesContext);

export const EntriesProvider = ({ children }: { children: JSX.Element }) => {
	const [currentEntry, setCurrentEntry] = useState<Entry>(defaultEntry);
	const [isLoading, setLoading] = useState<boolean>(false);

	return (
		<EntriesContext.Provider
			value={{
				currentEntry,
				setCurrentEntry,
				isLoading,
				setLoading
			}}
		>
			{children}
		</EntriesContext.Provider>
	);
};
