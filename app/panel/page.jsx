"use client";

import Btn from "@/components/generic/btn";
import DashboardInfo from "@/components/panel/dashboard/info";
import PanelHeaderSection from "@/components/panel/generic/panel-header-section";
import StatLink from "@/components/panel/widget/stat/link/stat-link";
import StatWallet from "@/components/panel/widget/stat/wallet/stat-wallet";
import StatWrap from "@/components/panel/widget/stat/wrap";
import dashboardStatsData from "@/data/panel/dashboard/stats";
import { referralData } from "@/services/affilate";
import useInfoStore from "@/store/dashboard";
import Link from "next/link";
import { useEffect, useState } from "react";
import ChallengeTable from "@/components/panel/dashboard/challenge-table";

export default function panel() {
  const [referral, setReferral] = useState({});

  const fetchReferral = async () => {
    try {
      const res = await referralData();
      setReferral(res);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchReferral();
  }, []);

  const { infoStore } = useInfoStore();

  const { statOne, statTwo } = dashboardStatsData({
    income: infoStore?.income,
    challenge_count: infoStore?.challenge_count,
    referral: referral,
  });
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
              href="/challengess"
            >
              همه‌ی چالش‌ها
            </Btn>
          }
        >
          چالش‌های فعال
        </PanelHeaderSection>
        <ChallengeTable />
      </div>

      <div className="flex -m-2 mb-6">
        <div className="p-2 w-1/3">
          <StatWallet
            icon="icon-wallet"
            name="موجودی کیف پول"
            amount={infoStore.Wallet_balance}
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
        statList={statTwo}
        link={`http://novaprop.org/register/?ref=${infoStore.referral_code}`}
        code={infoStore.referral_code}
      />
    </>
  );
}
