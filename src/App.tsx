import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import Paths from './components/Paths';
import { DialogProvider } from './contexts/DialogContext';
import { SearchProvider } from './contexts/SearchContext';
import theme from './utils/theme';

const App = () => (
	<ThemeProvider theme={theme}>
		<BrowserRouter>
			<CssBaseline />
			<DialogProvider>
				<SearchProvider>
					<Layout>
						<Paths />
					</Layout>
				</SearchProvider>
			</DialogProvider>
		</BrowserRouter>
	</ThemeProvider>
);

export default App;
