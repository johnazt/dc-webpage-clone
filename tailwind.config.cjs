/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				sm: '575px',
				lg: '1200px'
			}
		}
	},
	plugins: []
};
