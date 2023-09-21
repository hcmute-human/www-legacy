import './layout.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

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
				<main>{children}</main>
			</body>
		</html>
	);
}
