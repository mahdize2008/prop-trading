import PanelHeaderSection from "@/components/panel/generic/panel-header-section";
import Withdraw from "@/components/panel/wallet/withdraw";

export default function () {
  return (
    <>
    <PanelHeaderSection className="mb-6">برداشت از کیف پول</PanelHeaderSection>
      <Withdraw />
    </>
  );
}
