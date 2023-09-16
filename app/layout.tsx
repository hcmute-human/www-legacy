import '@radix-ui/themes/styles.css';
import './layout.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Theme } from '@radix-ui/themes';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	preload: true,
	variable: '--next-font-family',
});

export const metadata: Metadata = {
	title: 'Human',
	description: 'HR management web application',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.className}>
			<body>
				<Theme>{children}</Theme>
			</body>
		</html>
	);
}
