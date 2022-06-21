import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import Paths from './components/Paths';
import { DialogProvider } from './contexts/DialogContext';
import { EntriesProvider } from './contexts/EntriesContext';
import { FeaturesProvider } from './contexts/FeaturesContext';
import { FilterProvider } from './contexts/FilterContext';
import { SearchProvider } from './contexts/SearchContext';
import { DrawerProvider } from './contexts/DrawerContext';
import { SnackbarProvider } from './contexts/SnackbarContext';
import { UserProvider } from './contexts/UserContext';
import theme from './utils/theme';

const Providers = ({ children }: { children: React.ReactNode }) => (
	<UserProvider>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<CssBaseline />
				<FilterProvider>
					<FeaturesProvider>
						<SearchProvider>
							<DrawerProvider>
								<EntriesProvider>
									<SnackbarProvider>
										<DialogProvider>{children}</DialogProvider>
									</SnackbarProvider>
								</EntriesProvider>
							</DrawerProvider>
						</SearchProvider>
					</FeaturesProvider>
				</FilterProvider>
			</BrowserRouter>
		</ThemeProvider>
	</UserProvider>
);

const App = () => (
	<Providers>
		<Layout>
			<Paths />
		</Layout>
	</Providers>
);

export default App;
