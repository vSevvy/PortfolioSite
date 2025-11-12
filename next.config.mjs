import createMDX from '@next/mdx';


const withMDX = createMDX({ extension: /\.mdx?$/ });


/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts','tsx','mdx'],
  // experimental: { optimizeCss: true }  // ← delete this line
}


export default withMDX(nextConfig)