import { createProxyMiddleware } from "http-proxy-middleware";

export default function (app) {
  app.use(
    "/backend",
    createProxyMiddleware({
      target: "http://localhost:8000",
      changeOrigin: true,
      pathRewrite: { "^/backend": "" },
    })
  );
};
