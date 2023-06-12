import localFont from 'next/font/local';

export const customFonts = localFont({
    src: [
        {
            path: './fonts/Montserrat-Light.ttf',
            weight: '300',
            variable: '--montserrat',
        },
        {
            path: './fonts/Montserrat-Regular.ttf',
            weight: '400',
            variable: '--montserrat',
        },
        {
            path: './fonts/overpass-extralight.otf',
            weight: '300',
            variable: '--overpass',
        },
        {
            path: './fonts/overpass-light.otf',
            weight: '400',
            variable: '--overpass',
        },
        {
            path: './fonts/overpass-regular.otf',
            weight: '500',
            variable: '--overpass',
        },
        {
            path: './fonts/overpass-semibold.otf',
            weight: '600',
            variable: '--overpass',
        },
        {
            path: './fonts/overpass-bold.otf',
            weight: '700',
            variable: '--overpass',
        },
    ],
});
