import { Source_Code_Pro } from 'next/font/google';

import { Header } from '@/components/Header/Header';
import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyles } from '@/styles/globalStyles';

const fonts = Source_Code_Pro({
	weight: ['400', '500', '700'],
	display: 'swap',
	subsets: ['latin'],
});

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<GlobalStyles />
			<body className={fonts.className}>
				<StyledComponentsRegistry>
					<Header />
					{children}
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
