import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyles } from './globalStyles';
import { customFonts } from '@/styles/fonts';

export const metadata = {
    title: 'Maksym Parunov',
    description:
        'Portfolio & CV website of Full-stack developer Maksym Parunov from Ukraine, Kyiv.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={[customFonts.className]}>
            <GlobalStyles />
            <body>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    );
}
