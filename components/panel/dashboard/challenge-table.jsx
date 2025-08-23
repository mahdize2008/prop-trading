import Table from "@/components/generic/table";
import { useEffect, useState } from "react";
import tableData from "@/services/table";
import Tabs from "@/components/generic/tabs";
import challengesTableData from "@/data/panel/challenges/table";
import api_endpoints from "@/constants/api/endpoints";

export default function ChallengeTable() {
  const [rowsData, setRowsData] = useState([]);
  const [pagination, setPagination] = useState({totalPages:1,currentPage:1});
  const [activeTab, setActiveTab] = useState("ACCOUNT1");
  const fetchData = async (page=1,limit=10) => {
    setRowsData([])
    try {
      const endpoint = api_endpoints.ACCOUNT[activeTab];
      const data = await tableData({ endpoint , page,limit });     
        setRowsData(data.data?.list?.accounts);
        setPagination(data?.pagination);
      return;
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const {challengesTableColumns,challengesTableRows}= challengesTableData({rowsData})

  const tabsItems = [
    {
      id: "ACCOUNT1",
      name: "اکانت مرحله یک",
    },
    {
      id: "ACCOUNT2",
      name: "مرحله دوم",
    },
    {
      id: "ACCOUNT3",
      name: "فریز شده",
    },
    {
      id: "ACCOUNT4",
      name: "حساب ریل",
    },
    {
      id: "ACCOUNT5",
      name: "نگه داشته شده",
    },
  ];

  const renderCell = (item) => {
    return (
      <div className="grow hover:text-primary group-[&.active]:border group-[&.active]:border-primary rounded-lg px-4 text-dim-lighter text-base py-2 text-center group-[&.active]:text-white">
        {item.name}
      </div>
    );
  };


  return (
    <>
      <Tabs
        wrapclass="w-fit flex items-center p-2 bg-neutral-light mx-auto rounded-lg mb-8"
        renderCell={renderCell}
        tabs={tabsItems}
        changeTab={(id) => setActiveTab(id)}
      />
      <Table
        columns={challengesTableColumns}
        data={challengesTableRows}
        className="mb-8"
        refreshData={()=>fetchData()}
        paginationTotal={pagination.totalPages}
        paginationCurrent={pagination.currentPage}
        hasPagination
      />
    </>
  );
}
