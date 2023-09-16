import type { Config } from 'tailwindcss';
import { radixThemePreset } from 'radix-themes-tw';

const config: Config = {
	content: ['./app/**/*.{ts,tsx}'],
	darkMode: ['class'],
	plugins: [require('tailwindcss-animate')],
	presets: [radixThemePreset],
};
export default config;
