import React, {
	createContext,
	FC,
	forwardRef,
	ReactElement,
	Ref,
	useCallback,
	useContext,
	useMemo,
	useState
} from 'react';
import { Dialog, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

export type DialogPropsType<T = unknown> = T & { close: () => void };

export type DialogContentType<T = unknown> = (
	props: DialogPropsType<T>
) => JSX.Element;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DialogProps<T = any> = {
	Content: DialogContentType<T>;
	props: T;
};

type OpenDialogType = <T = unknown>(props: DialogProps<T>) => void;

type DialogContextType = {
	openDialog: OpenDialogType;
};

const DialogContext = createContext<DialogContextType>(undefined as never);

export const useDialog = () => useContext(DialogContext);

export const DialogProvider: FC = ({ children }) => {
	const [open, setOpen] = useState(false);
	const [dialog, setDialog] = useState<DialogProps>({
		// eslint-disable-next-line react/jsx-no-useless-fragment
		Content: () => <></>,
		props: {} as never
	});

	const handleClose = useCallback(() => setOpen(false), []);

	const openDialog = useCallback<OpenDialogType>(dialog => {
		setOpen(true);
		setDialog(dialog);
	}, []);

	const DialogCtx = useMemo(
		() => ({
			openDialog
		}),
		[openDialog]
	);

	const Content = dialog.Content;

	return (
		<DialogContext.Provider value={DialogCtx}>
			{children}
			<Dialog
				open={open}
				onClose={handleClose}
				TransitionComponent={Transition}
			>
				<Content {...dialog.props} close={handleClose} />
			</Dialog>
		</DialogContext.Provider>
	);
};

const Transition = forwardRef(
	(
		props: TransitionProps & {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			children: ReactElement<any, any>;
		},
		ref: Ref<unknown>
	) => <Slide direction="up" ref={ref} {...props} />
);
