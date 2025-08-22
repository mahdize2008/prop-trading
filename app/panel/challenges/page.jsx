"use client";

import Btn from "@/components/generic/btn";
import Heading from "@/components/generic/heading";
import Table from "@/components/generic/table";
import AffilateInfo from "@/components/panel/affilate/info";
import ChallengeTable from "@/components/panel/dashboard/challenge-table";
import PanelHeaderSection from "@/components/panel/generic/panel-header-section";
import affilateMockData from "@/data/panel/affilate/mock";
import challengesMockData from "@/data/panel/challenges/mock";
import clsx from "clsx";
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
