/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend:
			{
				fontFamily: {
					'nothingyoucoulddo': ['Nothing You Could Do', 'cursive'],
					'signika': ['Signika', 'sans-serif'],
				},
			},
	},
	plugins: [],
}
