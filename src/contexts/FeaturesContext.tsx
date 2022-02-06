import {
	createContext,
	Dispatch,
	useContext,
	useEffect,
	useState,
	SetStateAction
} from 'react';

import { Feature } from '../models/feature';
import { getAllFeatures } from '../utils/firebase';

type FeaturesContextType = {
	allFeatures: Feature[];
	setRefresh: Dispatch<SetStateAction<boolean>>;
	zoomTo: number[] | number[][][];
	setZoomTo: Dispatch<SetStateAction<number[] | number[][][]>>;
};

const FeaturesContext = createContext<FeaturesContextType>(undefined as never);

export const useFeatures = () => useContext(FeaturesContext);

export const FeaturesProvider = ({ children }: { children: JSX.Element }) => {
	const [allFeatures, setAllFeatures] = useState<Feature[]>([]);
	const [refresh, setRefresh] = useState<boolean>(true);
	const [zoomTo, setZoomTo] = useState<number[] | number[][][]>([]);

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
				allFeatures,
				setRefresh,
				zoomTo,
				setZoomTo
			}}
		>
			{children}
		</FeaturesContext.Provider>
	);
};
