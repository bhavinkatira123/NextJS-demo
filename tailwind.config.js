/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './shared/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				'1fr': '1fr 1fr',
			},
		},
	},
	plugins: [],
};
