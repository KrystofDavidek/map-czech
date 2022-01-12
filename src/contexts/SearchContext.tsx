import { createContext, useContext, useState } from 'react';

type SearchContextType = {
	input: string;
	setInput: React.Dispatch<React.SetStateAction<string>>;
	isSearching: boolean;
	setSearching: React.Dispatch<React.SetStateAction<boolean>>;
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
