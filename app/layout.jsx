import "../styles/globals.css";
export default async function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body
      >
        {children}
      </body>
    </html>
  );
}
