import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import Paths from './components/Paths';
import { SearchProvider } from './contexts/SearchContext';
import theme from './utils/theme';

const App = () => (
	<ThemeProvider theme={theme}>
		<BrowserRouter>
			<CssBaseline />
			<SearchProvider>
				<Layout>
					<Paths />
				</Layout>
			</SearchProvider>
		</BrowserRouter>
	</ThemeProvider>
);

export default App;
