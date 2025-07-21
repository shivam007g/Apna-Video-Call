let IS_PROD = true;

const server = IS_PROD
  ? "https://apna-video-call-ksa2.onrender.com"
  : "http://localhost:8000";
export default server;
