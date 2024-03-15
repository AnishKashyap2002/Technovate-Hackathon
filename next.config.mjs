/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "images.hdqwalls.com",
                pathname: "**",
            },
        ],
    },
    transpilePackages: ["three"],
};

export default nextConfig;
