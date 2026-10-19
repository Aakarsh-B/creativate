// Assuming you are using Node.js and can use CommonJS syntax for 'path' module
const path = require('path')
// import path from 'path';

// /** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    compiler: {
        styledComponents: true,
    },
    experimental: {
        // Pages read src/content at runtime, so ship it with the server bundle
        outputFileTracingIncludes: {
            '/**': ['./src/content/**/*'],
        },
    },
};

module.exports = nextConfig
