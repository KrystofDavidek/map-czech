import {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useState
} from 'react';

type SearchContextType = {
	input: string;
	setInput: Dispatch<SetStateAction<string>>;
	isSearching: boolean;
	setSearching: Dispatch<SetStateAction<boolean>>;
};

const SearchContext = createContext<SearchContextType>(undefined as never);

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }: { children: JSX.Element }) => {
	const [input, setInput] = useState<string>('');
	const [isSearching, setSearching] = useState<boolean>(false);

	return (
		<SearchContext.Provider
			value={{ input, setInput, isSearching, setSearching }}
		>
			{children}
		</SearchContext.Provider>
	);
};
