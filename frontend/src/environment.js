let IS_PROD = true;

const server = IS_PROD
  ? "https://apnacollegebackend-4u1h.onrender.com"
  : "http://localhost:8000";
export default server;
