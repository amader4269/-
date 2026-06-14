// GitHub Pages 部署時網站位於 /REPO_NAME 子路徑下，
// 本地圖片等以 "/" 開頭的路徑需要加上這個前綴才能正確載入。
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}
