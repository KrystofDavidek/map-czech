import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import Paths from './components/Paths';
import { DialogProvider } from './contexts/DialogContext';
import { EntriesProvider } from './contexts/EntriesContext';
import { SearchProvider } from './contexts/SearchContext';
import { SnackbarProvider } from './contexts/SnackbarContext';
import theme from './utils/theme';

export const IMAGE_URL_PREFIX = '../../assets/images/';
export const AUDIO_URL_PREFIX = '../../assets/audio/';

const App = () => (
	<ThemeProvider theme={theme}>
		<BrowserRouter>
			<CssBaseline />
			<SearchProvider>
				<EntriesProvider>
					<SnackbarProvider>
						<DialogProvider>
							<Layout>
								<Paths />
							</Layout>
						</DialogProvider>
					</SnackbarProvider>
				</EntriesProvider>
			</SearchProvider>
		</BrowserRouter>
	</ThemeProvider>
);

export default App;
