
export const metadata = {
  title: "Haru 小精靈",
  description: "正向 AI 小幫手"
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body style={{ margin: 0, padding: 20, fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
