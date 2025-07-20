import PanelSidebar from "@/components/panel/layout/sidebar";

export default function PanelLayot({ children }) {
  return (
    <div className="lg:flex lg:p-4 h-screen overflow-visible">
      <PanelSidebar className="max-lg:hidden" />
      <div className="lg:rounded-lg bg-neutral lg:grow max-lg:w-full lg:mr-8 lg:p-6 max-lg:py-4 overflow-y-auto">
        <div className="max-lg:container">{children}</div>
      </div>
    </div>
  );
}
