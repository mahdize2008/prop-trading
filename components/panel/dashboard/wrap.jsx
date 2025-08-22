"use client"

import Btn from "@/components/generic/btn";
import PanelHeaderSection from "../generic/panel-header-section";
import StatWrap from "../widget/stat/wrap";
import Table from "@/components/generic/table";
import StatWallet from "../widget/stat/wallet/stat-wallet";
import StatLink from "../widget/stat/link/stat-link";
import DashboardInfo from "./info";
import dashboardMockData from "@/data/panel/dashboard/table";
import Link from "next/link";
import { useEffect } from "react";
import useInfoStore from "@/store/dashboard";

export default function DashboardWrap () {
    const { statMock, tableColumnsMock, tableDataMock, link, code, statMock2 } =
    dashboardMockData();    
    
  return (
    <>
      <div className="mb-8">
        <PanelHeaderSection
          className="mb-6"
          leftSide={
            <Btn
              icon="icon-left-arrow"
              iconPlace="left"
              className="mr-auto"
              size="sm"
              variant="gradient"
              as={Link}
              href="/chalenges"
            >
              شروع چالش جدید
            </Btn>
          }
        >
          داشبورد
        </PanelHeaderSection>
        <div className="flex -m-2">
          <StatWrap className="w-1/2 p-2" statList={[statMock, statMock]} />
        </div>
      </div>
      <div className="mb-8">
        <PanelHeaderSection
          className="mb-6"
          leftSide={
            <Btn
              className="mr-auto"
              size="sm"
              variant="text"
              color="dim"
              as={Link}
              href="/chalenges"
            >
              همه‌ی چالش‌ها
            </Btn>
          }
        >
          چالش‌های فعال
        </PanelHeaderSection>
        <Table
          columns={tableColumnsMock}
          data={[tableDataMock, tableDataMock, tableDataMock]}
          className="mb-8"
        />
      </div>
      <div className="flex -m-2 mb-6">
        <div className="p-2 w-1/3">
          <StatWallet
            icon="icon-wallet"
            name="موجودی کیف پول"
            amount="$ ۰"
            color="success"
          />
        </div>
        <div className="p-2 w-1/3">
          <StatLink
            href="/panel/wallet/charge"
            title="واریز"
            icon="icon-bottom-right"
            text="شارژ کیف پول به صورت آنی"
          />
        </div>
        <div className="p-2 w-1/3">
          <StatLink
            href="/panel/wallet/withdraw"
            component={Link}
            title="برداشت"
            icon="icon-top-left"
            text="شارژ کیف پول به صورت آنی"
          />
        </div>
      </div>

      <DashboardInfo
        statList={[statMock2, statMock2]}
        link={link}
        code={code}
      />
    </>
  );
};
