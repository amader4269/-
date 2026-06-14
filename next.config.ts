import type { NextConfig } from "next";

// 部署到 GitHub Pages 時，網站會位於 https://<帳號>.github.io/<repo名稱>/
// 目前 repo 名稱為 "-"，網站會在 https://amader4269.github.io/-/
const REPO_NAME = "-";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${REPO_NAME}` : "",
  assetPrefix: isGithubPages ? `/${REPO_NAME}/` : "",
  env: {
    // 讓網站本地圖片路徑（如 /images/...）在 GitHub Pages 上也能正確加上 /REPO_NAME 前綴
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${REPO_NAME}` : "",
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
};

export default nextConfig;
