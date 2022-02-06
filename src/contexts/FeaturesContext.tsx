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
};

const FeaturesContext = createContext<FeaturesContextType>(undefined as never);

export const useFeatures = () => useContext(FeaturesContext);

export const FeaturesProvider = ({ children }: { children: JSX.Element }) => {
	const [allFeatures, setAllFeatures] = useState<Feature[]>([]);
	const [refresh, setRefresh] = useState<boolean>(true);

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
				setRefresh
			}}
		>
			{children}
		</FeaturesContext.Provider>
	);
};
