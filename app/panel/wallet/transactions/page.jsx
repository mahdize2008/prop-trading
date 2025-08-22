import PanelHeaderSection from "@/components/panel/generic/panel-header-section";
import WalletTable from "@/components/panel/wallet/table";

export default function notification() {
  

  return (
    <>
      <PanelHeaderSection className="mb-6">تراکنش‌های کیف‌پول</PanelHeaderSection>
      <WalletTable/>
    </>
  );
}
