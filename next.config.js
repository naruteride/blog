/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        mdxRs: true,
    },
    images: {
        unoptimized: true,
    },
}

const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)