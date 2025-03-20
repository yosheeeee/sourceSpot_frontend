import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		minimumCacheTTL: 60,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
				port: "",
				pathname: "**",
			},
		],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},
	async redirects() {
		return [
			// {
			// 	source: "/dashboard",
			// 	destination: "/",
			// 	permanent: true,
			// },
			{
				source: "/auth",
				destination: "/auth/login",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
