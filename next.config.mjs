// /** @type {import('next').NextConfig} */
import dotenv from "dotenv"
// const nextConfig = {};

// export default nextConfig;
dotenv.config()
export const nextConfig = {
  env: {
    SHIPENGINE_API_KEY: process.env.SHIPENGINE_API_KEY,
    SHIPENGINE_FIRST_COURIER: process.env.SHIPENGINE_FIRST_COURIER,
    SHIPENGINE_SECOND_COURIER: process.env.SHIPENGINE_SECOND_COURIER,
    SHIPENGINE_THIRD_COURIER: process.env.SHIPENGINE_THIRD_COURIER,
    SHIPENGINE_FOURTH_COURIER: process.env.SHIPENGINE_FOURTH_COURIER,
  },
    reactStrictMode: true,
    images: {
      domains: ['cdn.sanity.io'],
    },
  };
  
  export default nextConfig;
  
