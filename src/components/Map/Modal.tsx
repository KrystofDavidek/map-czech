import { Dialog, DialogContent, DialogTitle, Button } from '@mui/material';

const Modal = ({ modal, toggle, selectedFeature }: any) => (
	<Dialog open={modal}>
		<DialogTitle>Modal title</DialogTitle>
		<DialogContent>
			<p>
				<b>Name: </b>
				{selectedFeature?.properties?.name}
			</p>
			<p>
				<b>Id: </b>
				{selectedFeature?.id}
			</p>

			<Button color="primary" onClick={toggle}>
				Do Something
			</Button>
			<Button color="secondary" onClick={toggle}>
				Cancel
			</Button>
		</DialogContent>
	</Dialog>
);

export default Modal;
