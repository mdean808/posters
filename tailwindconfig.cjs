/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'epa-yellow': '#F2A900',
				'epa-orange': '#FF690A',
				'epa-red': '#F9423A',
				'epa-purple': '#781496',
				'epa-blue': '#005eb8',
				'epa-teal': '#008c95',
				'epa-light-green': '#4fa800',
				'epa-dark-green': '#4c460a',
				'epa-brown': '#99380d'
			}
		}
	},
	plugins: []
};
