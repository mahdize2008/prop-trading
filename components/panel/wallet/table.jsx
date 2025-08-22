"use client"

import Table from "@/components/generic/table";
import api_endpoints from "@/constants/api/endpoints";
import walletTransactionsTableData from "@/data/panel/wallet/transactions/table";
import tableData from "@/services/table";
import { useEffect, useState } from "react";

export default function WalletTable({}) {
  const [tableDataList, setTableDataList] = useState([]);
  const [tableDataPagination, setTableDataPagination] = useState({});

  const fetch = async (page=1) => {
    const data = await tableData({
      endpoint: api_endpoints.WALLET.TRANSACTIONS,
      page
    });
    setTableDataList(data.data.list);
    setTableDataPagination(data.pagination);
    console.log(data.pagination);
    
  };
  useEffect(() => {
    fetch();
  }, []);

  const { columns, transactions } = walletTransactionsTableData(tableDataList);

  console.log(tableDataPagination);
  

  return (
    <Table
      columns={columns}
      data={transactions}
      refreshData={fetch}
      paginationTotal={tableDataPagination.totalPages}
      paginationCurrent={tableDataPagination.currentPage}
      hasPagination
    />
  );
}
