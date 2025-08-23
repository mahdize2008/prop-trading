"use client";

import Btn from "@/components/generic/btn";
import ChallengeTable from "@/components/panel/dashboard/challenge-table";
import PanelHeaderSection from "@/components/panel/generic/panel-header-section";
import Link from "next/link";

export default function affilate() {
  return (
    <>
      <PanelHeaderSection
        className="mb-6"
        leftSide={
          <Btn
            as={Link}
            href="/pannel/buy-challenge"
            variant="gradient"
            className="mr-auto"
          >
            خرید چالش جدید
          </Btn>
        }
      >
        چالش‌های من
      </PanelHeaderSection>
      <ChallengeTable pagination/>
    </>
  );
}
