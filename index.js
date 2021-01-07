const sass = require('node-sass');

const result = sass.renderSync({
    file: './css/styles.sass',
    sourceMap: true,
    outFile: './css/styles.css'
});