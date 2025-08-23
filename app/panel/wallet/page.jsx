"use client";

import Btn from "@/components/generic/btn";
import PanelHeaderSection from "@/components/panel/generic/panel-header-section";
import WalletTable from "@/components/panel/wallet/table";
import StatLink from "@/components/panel/widget/stat/link/stat-link";
import StatWallet from "@/components/panel/widget/stat/wallet/stat-wallet";
import useInfoStore from "@/store/dashboard";
import clsx from "clsx";
import Link from "next/link";

export default function notification() {

  const {infoStore}=useInfoStore()

  return (
    <>
      <PanelHeaderSection
        className="mb-6"
        leftSide={
          <Btn
            as={Link}
            href="/panel/wallet/charge"
            icon="icon-add-circle"
            className="mr-auto"
            disabled={!infoStore.verify}
          >
            افزایش موجودی
          </Btn>
        }
      >
        کیف پول
      </PanelHeaderSection>
      <div className="flex flex-wrap -m-3 mb-16">
        <div className={clsx("p-3", infoStore.verify ? "w-1/2" : "w-full")}>
          <StatWallet
            className={!infoStore.verify&&"p-0"}
            icon="icon-dollar-circle"
            title={infoStore.verify && "نمودار موجودی"}
            name="موجودی کیف پول"
            amount={infoStore.Wallet_balance}
            color={infoStore.verify? "neutral-dark" :"transparent"}
            btn_text={infoStore.verify && "افزایش موجودی"}
            btn_href="/"
          />
        </div>
        <div
          className={clsx(
            "p-3 -m-2",
            infoStore.verify ? "w-1/2" : "w-full flex items-start"
          )}
        >
          <div className={clsx("p-2", !infoStore.verify ? "w-1/2" : "w-full")}>
            <StatLink
            href="/panel/wallet/charge"
              title="واریز"
              icon="icon-bottom-right"
              text="شارژ کیف پول به صورت آنی"
            />
          </div>
          <div className={clsx("p-2", !infoStore.verify ? "w-1/2" : "w-full")}>
            <StatLink
            href="/panel/wallet/withdraw"
              component={infoStore.verify ? Link : "div"}
              title={infoStore.verify && "برداشت"}
              icon={infoStore.verify ? "icon-top-left" : "icon-info-circle"}
              text={
                infoStore.verify
                  ? "شارژ کیف پول به صورت آنی"
                  : "به دلیل عدم احراز هویت، امکان برداشت درامد وجود ندارد."
              }
            >
              {!infoStore.verify && (
                <Btn
                  color="primary"
                  variant="gradient"
                  icon="icon-left-arrow"
                  iconPlace="left"
                  size="sm"
                  className="mt-5"
                  as={Link}
                  href="/login"
                >
                  شروع احراز هویت
                </Btn>
              )}
            </StatLink>
          </div>
        </div>
      </div>

      <PanelHeaderSection className="mb-6">
        تراکنش‌های کیف‌پول
      </PanelHeaderSection>
      <WalletTable/>
    </>
  );
}
