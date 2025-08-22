import { Toaster } from "react-hot-toast";
import "../styles/globals.css";
export default async function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body
      >
        <Toaster/>
        {children}
      </body>
    </html>
  );
}
