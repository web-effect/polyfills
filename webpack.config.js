const path = require('path');

module.exports = (env, argv) => {
    const entry = {};
    entry.polyfills = './src/index.js';
    return {
        entry,
        output: {
            path: path.resolve(__dirname, './dist'),
        },
	}
}