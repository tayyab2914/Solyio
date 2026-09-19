/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Optimisation is on: images are an LCP input and LCP is a ranking signal.
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
  async redirects() {
    return [
      // Case-sensitive slugs used to be served here. Preserve any existing links.
      { source: "/products/Upgrr", destination: "/products/upgrr", permanent: true },
      { source: "/products/Meon", destination: "/products/meon", permanent: true },
    ]
  },
}

export default nextConfig
