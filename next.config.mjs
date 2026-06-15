/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  // Generate a fully static site (HTML/CSS/JS) into the `out/` folder so it can
  // be hosted for free anywhere (Cloudflare Pages, GitLab Pages, etc.).
  output: 'export',
  // next/image optimization needs a server; disable it for static export so
  // images are served as-is from the public/ folder.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
