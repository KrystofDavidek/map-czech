import { isEqual } from 'lodash';
import {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useEffect,
	useState
} from 'react';

export type EntryFilters = {
	arrivalTimes: string[];
	extinctionPeriod: string[];
	communitySize: string[];
	dialectBase: string[];
	numOfGenerations: string[];
	motivation: string[];
	existMedia: string[];
	religion: string[];
	reemigration: string[];
	typeOfEmigration: string[];
};

export const defaultFilterState = {
	arrivalTimes: [],
	extinctionPeriod: [],
	communitySize: [],
	dialectBase: [],
	numOfGenerations: [],
	motivation: [],
	existMedia: [],
	religion: [],
	reemigration: [],
	typeOfEmigration: []
};

type FilterContextType = {
	activeFilters: EntryFilters;
	setActiveFilters: Dispatch<SetStateAction<EntryFilters>>;
	isDisabled: boolean;
};

const FilterContext = createContext<FilterContextType>(undefined as never);

export const useFilter = () => useContext(FilterContext);

export const FilterProvider = ({ children }: { children: JSX.Element }) => {
	const [activeFilters, setActiveFilters] =
		useState<EntryFilters>(defaultFilterState);
	const [isDisabled, setDisabled] = useState<boolean>(true);

	useEffect(() => {
		setDisabled(isEqual(activeFilters, defaultFilterState));
	}, [activeFilters]);

	return (
		<FilterContext.Provider
			value={{
				activeFilters,
				setActiveFilters,
				isDisabled
			}}
		>
			{children}
		</FilterContext.Provider>
	);
};
