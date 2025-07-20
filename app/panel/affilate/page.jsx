"use client";

import Heading from "@/components/generic/heading";
import Table from "@/components/generic/table";
import AffilateInfo from "@/components/panel/affilate/info";
import PanelHeaderSection from "@/components/panel/generic/panel-header-section";
import affilateMockData from "@/data/panel/affilate/mock";
import clsx from "clsx";

export default function affilate() {
  const { tableColumns, code, link, invited } = affilateMockData();
  const tableData = [invited, invited, invited];
  return (
    <>
      <PanelHeaderSection className="mb-6">کسب درامد</PanelHeaderSection>
      <div className={clsx("-m-2 flex", tableData.length && "items-start")}>
        <AffilateInfo code={code} link={link} />
        <div className="w-2/5 p-2">
          <div className={"rounded-lg border border-neutral-light p-4 h-full"}>
            <Heading variant="h5" className="mb-3">
              لیست افراد معرفی شده
            </Heading>
            <Table columns={tableColumns} data={tableData} />
          </div>
        </div>
      </div>
    </>
  );
}
