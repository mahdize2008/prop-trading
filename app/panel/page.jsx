"use client"

import Btn from "@/components/generic/btn";
import Table from "@/components/generic/table";
import DashboardInfo from "@/components/panel/dashboard/info";
import PanelHeaderSection from "@/components/panel/generic/panel-header-section";
import StatLink from "@/components/panel/widget/stat/link/stat-link";
import StatWallet from "@/components/panel/widget/stat/wallet/stat-wallet";
import StatWrap from "@/components/panel/widget/stat/wrap";
import dashboardMockData from "@/data/panel/dashboard/mock";
import useDashboardStore from "@/store/dashboard";
import Link from "next/link";



export default function panel() {
  const { statMock, tableColumnsMock, tableDataMock, link, code, statMock2 } =
    dashboardMockData();
    const {dashboardstore}=useDashboardStore()

    const statOne= [
      {
        name: "درامد شما تا کنون",
        icon: "icon-dollar",
        amount: `${dashboardstore?.income} $`,
        color: "neutral-dark",
      },
      {
        name: "چالش‌های شرکت کرده",
        icon: "icon-thunder",
        amount: `${dashboardstore?.challenge_count} چالش`,
        color: "neutral-dark",
      },
    ]


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
          <StatWrap className="w-1/2 p-2" statList={statOne} />
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
            amount={dashboardstore.Wallet_balance}
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
        link={`http://novaprop.org/register/?ref=${dashboardstore.referral_code}`}
        code={dashboardstore.referral_code}
      />
    </>
  );
}
