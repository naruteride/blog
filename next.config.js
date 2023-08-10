/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        mdxRs: true,
    },
    output: "export",
    basePath: "/nextjs-github-pages",
    images: {
        unoptimized: true,
    },
}

const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)