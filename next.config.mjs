// Static export so the prototype can be hosted free on GitHub Pages.
// The site lives at https://<username>.github.io/<repo>/, so every path is
// prefixed with the repository name. Set BASE_PATH="" to serve from a root domain.
const basePath = process.env.BASE_PATH ?? "/anbariyya-prototype";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
