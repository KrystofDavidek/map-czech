import {
	Button,
	Card,
	Fade,
	Grid,
	TextField,
	Typography,
	Box
} from '@mui/material';
import {
	ChangeEvent,
	FormEvent,
	useCallback,
	useEffect,
	useState
} from 'react';
import { useNavigate } from 'react-router';

import { useSnackbar } from '../contexts/SnackbarContext';
import useUserContext from '../contexts/UserContext';
import { logIn } from '../utils/firebase';

const Login = () => {
	const navigate = useNavigate();
	const { user } = useUserContext();
	const { showSnackbar } = useSnackbar();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [isLogin, setLogin] = useState(true);

	const handleError = useCallback((text: string) => {
		showSnackbar({ text: 'Přihlášení se nezdařilo', variant: 'error' });
	}, []);

	const toggleLogin = () => setLogin(value => !value);

	useEffect(() => {
		if (user) {
			navigate('/');
		}
	}, [user]);

	return (
		<Fade in timeout={700}>
			<Grid
				container
				direction="column"
				alignItems="center"
				justifyContent="center"
				sx={{ minHeight: '50vh' }}
			>
				<Grid item sx={{ minWidth: '40vh', alignSelf: 'center' }}>
					<Card
						component="form"
						variant="outlined"
						onSubmit={async (e: FormEvent) => {
							e.preventDefault();
							try {
								await logIn(email, password);
								showSnackbar({ text: `Vítejte, ${email}`, variant: 'success' });
								navigate('/');
							} catch (error) {
								handleError(
									(error as { message?: string })?.message ?? 'Unknown error'
								);
							}
						}}
						sx={{
							display: 'flex',
							flexDirection: 'column',
							borderColor: 'primary.main',
							borderWidth: 2,
							width: '100%',
							pt: 4,
							px: 4,
							gap: 2
						}}
					>
						<div style={{ alignSelf: 'center', marginBottom: 10 }}>
							<Typography variant="h3">Přihlášení</Typography>
						</div>

						<TextField
							label="E-mail"
							id="email"
							value={email}
							onChange={useCallback(
								(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
									setEmail(e.target.value),
								[]
							)}
							type="email"
						/>
						<TextField
							label="Heslo"
							id="password"
							value={password}
							onChange={useCallback(
								(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
									setPassword(e.target.value),
								[]
							)}
							type="password"
						/>

						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								alignSelf: 'center',
								gap: 2,
								m: 2
							}}
						>
							<Button
								type="submit"
								variant="outlined"
								sx={{ color: 'primary.main' }}
							>
								Přihlásit
							</Button>
						</Box>

						{/* <Divider style={{ color: 'primary.main' }} variant="middle" /> */}

						{/* Log In/Sign up switch */}
						{/* <Box
							sx={{
								display: 'flex',
								flexDirection: 'row',
								alignSelf: 'center',
								alignItems: 'center',
								textAlign: 'center',
								mt: 2,
								gap: 4
							}}
						>
							<Typography variant="subtitle1" mb={3} color="primary.main">
								{isLogin
									? `Don't have an account yet?`
									: 'Already have an account?'}
							</Typography>
							<Button
								variant="contained"
								onClick={toggleLogin}
								sx={{
									mb: 3,
									background:
										'linear-gradient(to right, #096DD7, #5779EC, #8F84F8)'
								}}
							>
								{isLogin ? 'Sign Up' : 'Log In'}
							</Button>
						</Box> */}
					</Card>
				</Grid>
			</Grid>
		</Fade>
	);
};

export default Login;
