import { isEqual } from 'lodash';
import {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useEffect,
	useState
} from 'react';

type FilterState = {
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
	activeFilters: FilterState;
	setActiveFilters: Dispatch<SetStateAction<FilterState>>;
	isDisabled: boolean;
};

const FilterContext = createContext<FilterContextType>(undefined as never);

export const useFilter = () => useContext(FilterContext);

export const FilterProvider = ({ children }: { children: JSX.Element }) => {
	const [activeFilters, setActiveFilters] =
		useState<FilterState>(defaultFilterState);
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
