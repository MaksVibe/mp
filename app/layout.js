import localFont from 'next/font/local';
import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyles } from './globalStyles';

const fontsAll = localFont({
    src: [
        {
            path: '../public/fonts/NotoSans-Thin.ttf',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../public/fonts/NotoSans-ExtraLight.ttf',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../public/fonts/NotoSans-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../public/fonts/NotoSans-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/NotoSans-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../public/fonts/NotoSans-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../public/fonts/NotoSans-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../public/fonts/NotoSans-ExtraBold.ttf',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../public/fonts/NotoSans-Black.ttf',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../public/fonts/overpass-thin.otf',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../public/fonts/overpass-extralight.otf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../public/fonts/overpass-light.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/overpass-regular.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../public/fonts/overpass-semibold.otf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../public/fonts/overpass-bold.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../public/fonts/overpass-extrabold.otf',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../public/fonts/overpass-heavy.otf',
            weight: '900',
            style: 'normal',
        },
    ],
});

export const metadata = {
    title: 'Maksym Parunov',
    description:
        'Portfolio & CV website of Full-stack developer Maksym Parunov from Ukraine, Kyiv.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <GlobalStyles />
            <body>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    );
}
