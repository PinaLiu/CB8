const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: "th.bing.com" }],
  },
 //per  deploy su github pages
  basePath: isProd ? '/CB8/Web%20App%20Pizza%20no%20BE' : '',
  assetPrefix: isProd ? '/CB8/Web%20App%20Pizza%20no%20BE/' : '',
};

export default nextConfig;
