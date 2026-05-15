/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NODE_ENV === 'production' ? '/ditvi-technologies' : '',
    images: {
        unoptimized: true
    },
    trailingSlash: true,
}

module.exports = nextConfig