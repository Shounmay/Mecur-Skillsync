/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		PUBLIC_SERVER_URL: 'http://localhost:8000',
	},
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '8000',
				pathname: '**',
			},
		],
	},
};

module.exports = nextConfig;
