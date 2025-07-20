'use client'

import Btn from "@/components/generic/btn";
import PanelHeaderSection from "@/components/panel/generic/panel-header-section";
import WalletCharge from "@/components/panel/wallet/charge";
import TransactionStatus from "@/components/panel/wallet/transaction-status";
import walletChargeMockData from "@/data/panel/wallet/charge/mock";
import Link from "next/link";
import { useState } from "react";

export default function notification() {

  const [step , setStep]=useState('step_one')
  const {details}=walletChargeMockData()

  return (
    <>
      <PanelHeaderSection className="mb-6">شارژ کیف پول</PanelHeaderSection>
      <div className="w-[630px] mx-auto">
        {step === "step_one" && (
          <WalletCharge setStep={() => setStep("transaction_unSuccessful")} />
        )}
        {step === "transaction_successful" && (
          <TransactionStatus msg="تراکنش با موفقیت انجام شد" TransactionHash="222" details={[details,details,details]} icon="icon-success" btnText="بازگشت به کیف‌پول" btnIcon="icon-left-arrow" amount={123} btnLink="/panel/wallet" hasRedirectTimer/>
        )}
        {step === "transaction_unSuccessful" && (
          <TransactionStatus msg="تراکنش ناموفق" TransactionHash="222" details={[details,details,details]} icon="icon-success" btnText="تلاش مجدد" btnIcon="icon-refresh" amount={123} btnLink="/panel/wallet/charge" iconTheme="danger">
            <Btn variant="text" as={Link} href="/panel/wallet" size="sm" color="dim" icon="icon-right-arrow" className="mt-7 mx-auto">
            بازگشت به کیف پول
            </Btn>
          </TransactionStatus>
        )}
      </div>
    </>
  );
}
