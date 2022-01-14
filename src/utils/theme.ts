import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
	interface Palette {
		feature: { main: string; light: string; border: string };
	}
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
	interface PaletteOptions {
		feature: { main: string; light: string; border: string };
	}
}

const theme = createTheme({
	palette: {
		primary: { main: '#4576E7', light: '#8F84F8', dark: '#096DD7' },
		secondary: { main: '#FF9F45', light: '#FFD031', dark: '#FF656F' },
		feature: { main: '#E9967A', light: '#ffd6c6', border: '#CD5C5C' }
	},

	typography: {
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"'
		].join(',')
	}
});

export default theme;
