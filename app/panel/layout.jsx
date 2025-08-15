import PanelSidebar from "@/components/panel/layout/sidebar";
import SiteProvider from "@/provider/siteProvider";
import { dashboardData } from "@/services/dashboard";

export default async function PanelLayot({ children }) {
  const data=await dashboardData()
  console.log(data);
  
  return (
    <SiteProvider initialData={data}>
    <div className="lg:flex overflow-visible relative">
      <PanelSidebar className="max-lg:hidden h-screen fixed right-0 top-0 overflow-y-auto px-4" />
      <div className="lg:w-[calc(100%-300px)] min-h-screen max-lg:w-full lg:mr-auto lg:p-4">
      <div className="lg:rounded-lg bg-neutral min-h-full lg:p-6 max-lg:py-4">
        <div className="max-lg:container">{children}</div>
      </div>
      </div>
    </div>
    </SiteProvider>
  );
}
