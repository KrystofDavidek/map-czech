import {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useState
} from 'react';

type DrawerContextType = {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
};

const DrawerContext = createContext<DrawerContextType>(undefined as never);

export const useDrawer = () => useContext(DrawerContext);

export const DrawerProvider = ({ children }: { children: JSX.Element }) => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<DrawerContext.Provider value={{ open, setOpen }}>
			{children}
		</DrawerContext.Provider>
	);
};
