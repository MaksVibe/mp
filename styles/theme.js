'use client';

export const colors = {
	mainText: 'rgb(0, 0, 0)',
	navText: 'rgb(5, 17, 16)',
	secondaryText: 'rgb(222, 222, 222)',
	btnText: 'rgb(16, 16, 16)',
	mainTitle: 'rgb(37, 37, 37)',
	subTitle: 'rgb(255, 255, 255)',
	btnBorder: 'rgb(116, 195, 255)',
	separator: 'rgb(19, 21, 24)',
	mainBG: 'rgb(249, 249, 249)',
	secondaryBG: 'rgb(19, 19, 19)',

	foreground: 'rgb(0, 20, 10)',
	backgroundStart: 'rgb(10, 30, 20)',
	backgroundEnd: 'rgb(0, 20, 10)',
	accent: 'rgba(171, 211, 239, 1)',
	lightText: 'rgb(242, 242, 242)',
	transparent: 'rgba(0, 0, 0, 0)',
};

export const fonts = {
	body: {
		fontFamily: "'Source Code Pro', sans-serif",
		fontSize: 1.125, //rem
		fontWeight: 500,
	},
	title: {
		fontSize: { h1: 6, skills: 1.5 }, //rem
		fontWeight: 700,
		lineHeight: 0.89,
	},
	secondaryText: {
		fontSize: 1.25, //rem
		fontWeight: 700,
	},
	header: {
		fontSize: 0.875, // rem
		fontWeight: 400,
	},
};

export const theme = {
	fonts,
	colors,
};
