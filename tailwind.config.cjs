/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const tailwindRadix = require('tailwind-radix-colors')
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			...tailwindRadix.colors,
			black: colors.black,
			white: colors.white,
			transparent: colors.transparent
		},
		extend: {
		},
	},
	plugins: [
		// require('daisyui'),
		require('@tailwindcss/typography'),
	],
}
