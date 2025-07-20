
import Table from "@/components/generic/table";
import PanelHeaderSection from "@/components/panel/generic/panel-header-section";
import walletTransactionsMockData from "@/data/panel/wallet/transactions/mock";
import walletTransactionsTableData from "@/data/panel/wallet/transactions/table";

export default function notification() {
  const {transaction}=walletTransactionsMockData()
  const {columns}=walletTransactionsTableData()

  return (
    <>
      <PanelHeaderSection className="mb-6">تراکنش‌های کیف‌پول</PanelHeaderSection>
      <Table columns={columns} data={[transaction,transaction,transaction,transaction,transaction,transaction,transaction,transaction]}/>
    </>
  );
}
