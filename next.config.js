const BASE_URL = "https://api.themoviedb.org/3/";
const POPULAR = "movie/popular?api_key=";
const API_KEY = "4248c929a65cb28b2de27f7885acc046";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `${BASE_URL}${POPULAR}${API_KEY}`,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/aaa",
        destination: "/bbb",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
