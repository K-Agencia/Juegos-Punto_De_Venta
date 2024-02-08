module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,ico,svg,png,json,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};