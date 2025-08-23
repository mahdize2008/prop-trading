"use client";

import Heading from "@/components/generic/heading";
import Table from "@/components/generic/table";
import AffilateInfo from "@/components/panel/affilate/info";
import PanelHeaderSection from "@/components/panel/generic/panel-header-section";
import api_endpoints from "@/constants/api/endpoints";
import affilateTableData from "@/data/panel/affilate/table";
import affilateStatData from "@/data/panel/affilate/stat";
import { referralData } from "@/services/affilate";
import tableData from "@/services/table";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function affilate() {
  const [referral, setReferral] = useState({});
  const [tableRowsList, setTableRowsList] = useState([]);

  const fetch = async () => {
    try{
      const data = await tableData({
        endpoint: api_endpoints.REFERRAL.INVITEDLIST,
      });
      setTableRowsList(data.data.invited_users);
    }catch(err){
      console.error(err);
    }
  };

  const fetchReferral = async () => {
    try {
      const res = await referralData();
      setReferral(res);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetch();
    fetchReferral();
  }, []);
  const { tableColumns, inviteList } = affilateTableData(tableRowsList);

  const { stats } = affilateStatData(referral);

  return (
    <>
      <PanelHeaderSection className="mb-6">کسب درامد</PanelHeaderSection>
      <div
        className={clsx("-m-2 flex", tableRowsList?.length && "items-start")}
      >
        <AffilateInfo
          stats={stats}
          code={referral?.list?.referral_code}
          link={`http://novaprop.org/register/?ref=${referral?.list?.referral_code}`}
        />
        <div className="w-2/5 p-2">
          <div className={"rounded-lg border border-neutral-light p-4 h-full"}>
            <Heading variant="h5" className="mb-3">
              لیست افراد معرفی شده
            </Heading>
            <Table
              refreshData={fetch}
              columns={tableColumns}
              data={inviteList}
            />
          </div>
        </div>
      </div>
    </>
  );
}
