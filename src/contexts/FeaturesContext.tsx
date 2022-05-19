import {
	createContext,
	Dispatch,
	useContext,
	useEffect,
	useState,
	SetStateAction
} from 'react';

import { FilterKeys } from '../data/filters';
import { Feature } from '../models/feature';
import { getAllFeatures } from '../utils/firebase';

import { useFilter } from './FilterContext';

type FeaturesContextType = {
	features: Feature[];
	setRefresh: Dispatch<SetStateAction<boolean>>;
	zoomTo: number[] | number[][][];
	setZoomTo: Dispatch<SetStateAction<number[] | number[][][]>>;
	getFeature: any;
};

const FeaturesContext = createContext<FeaturesContextType>(undefined as never);

export const useFeatures = () => useContext(FeaturesContext);

export const FeaturesProvider = ({ children }: { children: JSX.Element }) => {
	const [allFeatures, setAllFeatures] = useState<Feature[]>([]);
	const [features, setFeatures] = useState<Feature[]>([]);
	const [refresh, setRefresh] = useState<boolean>(true);
	const [zoomTo, setZoomTo] = useState<number[] | number[][][]>([]);
	const { isDisabled, activeFilters } = useFilter();

	const getFeature = (id: string) =>
		features.find(feature => feature.id === id);

	useEffect(() => {
		if (!isDisabled) {
			const filteredFeatures: Feature[] = [];
			allFeatures.forEach((feature: Feature) => {
				Object.keys(activeFilters).forEach((key: string, _value: number) => {
					const filterKey = key as FilterKeys;
					if (
						activeFilters[filterKey].length > 0 &&
						activeFilters[filterKey].some((filter: string) =>
							feature.properties.filters[filterKey].includes(filter)
						)
					) {
						filteredFeatures.push(feature);
					}
				});
			});
			setFeatures(filteredFeatures);
		} else {
			setFeatures(allFeatures);
		}
	}, [isDisabled, allFeatures, activeFilters]);

	useEffect(() => {
		if (refresh) {
			const getData = async () => {
				const features = await getAllFeatures();
				if (features) {
					setAllFeatures(features);
				}
			};
			getData();
		}
		setRefresh(false);
	}, [refresh]);

	return (
		<FeaturesContext.Provider
			value={{
				features,
				setRefresh,
				zoomTo,
				setZoomTo,
				getFeature
			}}
		>
			{children}
		</FeaturesContext.Provider>
	);
};
