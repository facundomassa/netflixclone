/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "raw.githubusercontent.com",
          port: "",
          pathname: "/**",
        },
      ],
    },
    experimental: {
        serverActions: {
            allowedOrigins: ["localhost:3000"],
            // allowedForwardedHosts: ["localhost:3000"],
            // ^ You might have to use this property depending on your exact version.
        }
    },
  };
  
  export default nextConfig;