import { Container, Box, Typography, Grid, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router';
import useMediaQuery from '@mui/material/useMediaQuery';

import logo from '../assets/images/logo.webp';
import Text from '../components/Text';
import { useDrawer } from '../contexts/DrawerContext';

const About = () => {
	const navigate = useNavigate();
	const { setOpen } = useDrawer();
	const matches1 = useMediaQuery('(min-width:800px)');
	const matches2 = useMediaQuery('(min-width:1200px)');

	return (
		<Container sx={{ p: 0, position: 'relative' }}>
			<Box
				sx={{
					opacity: '5%',
					position: 'absolute',
					top: '5%',
					display: matches1 ? 'block' : 'none',
					zIndex: -1
				}}
			>
				<img
					height={480}
					width={matches2 ? 1100 : 'inherit'}
					src={logo}
					alt="Main logo"
				/>
			</Box>
			<Box sx={{ m: { xs: 2, sm: 4 }, pb: 10 }}>
				<Text variant="h3" component="h1" text="O projektu" mb={4} />
				<Stack gap={2}>
					<Typography>
						Webová aplikace je součástí diplomové práce, jejímž cílem bylo
						navrhnout a vytvořit na základě dostupných údajů mapu krajanské
						češtiny, která zahrnuje komunity českých krajanů rozšířených po
						světě.
					</Typography>
					<Typography>
						Mapa krajanské češtiny má podobu interaktivní webové aplikace, která
						také obsahuje uživatelsky přívětivou administraci pro vkládání
						nových historických, jazykových a geografických dat týkajících se
						jednotlivých komunit (administrace je přístupná až po přihlášení).
					</Typography>
					<Typography>
						V aplikaci je v tuto chvíli zpřístupněno několik modelových
						příkladů, které vychází ze zpracovaných materiálů.
					</Typography>
					<Typography mt={2}>
						Pro kontakt a zpřístupnění administrace využijte e-mail:
						<Typography
							sx={{ color: 'primary.main', ml: 0.5 }}
							component="a"
							href="mailto:kry.davidek@gmail.com"
						>
							kry.davidek@gmail.com
						</Typography>
					</Typography>
				</Stack>
				<Grid
					container
					mt={8}
					sx={{
						justifyContent: {
							xs: 'center',
							sm: 'space-around',
							md: 'flex-start'
						}
					}}
					gap={4}
				>
					<Grid item>
						<Button
							onClick={() => setOpen(true)}
							variant="contained"
							size="large"
						>
							Zobrazit lokality
						</Button>
					</Grid>
					<Grid item>
						<Button
							onClick={() => {
								setOpen(false);
								setTimeout(() => navigate('/'), 100);
							}}
							variant="contained"
							size="large"
						>
							Otevřít mapu
						</Button>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
};
export default About;
