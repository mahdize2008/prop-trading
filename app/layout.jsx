
import { dashboardData } from "@/services/dashboard";
import "../styles/globals.css";
import SiteProvider from "@/provider/siteProvider";

export default async function RootLayout({ children }) {
  const data=await dashboardData()
  console.log(data);
  
  return (
    <html lang="fa">
      <body
      >
        <SiteProvider initialData={data}>
        {children}
        </SiteProvider>
      </body>
    </html>
  );
}
