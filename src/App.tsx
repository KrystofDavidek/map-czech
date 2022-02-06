import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import Paths from './components/Paths';
import { DialogProvider } from './contexts/DialogContext';
import { EntriesProvider } from './contexts/EntriesContext';
import { FeaturesProvider } from './contexts/FeaturesContext';
import { FilterProvider } from './contexts/FilterContext';
import { SearchProvider } from './contexts/SearchContext';
import { SnackbarProvider } from './contexts/SnackbarContext';
import { UserProvider } from './contexts/UserContext';
import theme from './utils/theme';

const App = () => (
	<UserProvider>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<CssBaseline />
				<FilterProvider>
					<FeaturesProvider>
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
					</FeaturesProvider>
				</FilterProvider>
			</BrowserRouter>
		</ThemeProvider>
	</UserProvider>
);

export default App;
