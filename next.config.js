const withExportImages = require("next-export-optimize-images");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
};

module.exports = withExportImages(nextConfig);
