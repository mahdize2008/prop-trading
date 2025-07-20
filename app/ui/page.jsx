"use client";

import Tabs from "@/components/generic/tabs";
import UiAlerts from "@/components/ui/alerts";
import UiBtns from "@/components/ui/btns";
import UiCards from "@/components/ui/cards";
import UiChips from "@/components/ui/chips";
import UiColors from "@/components/ui/colors";
import UiHeadings from "@/components/ui/headings";
import UiInputs from "@/components/ui/inputs";
import UiLogo from "@/components/ui/logo";
import UiPanelHeaderSection from "@/components/ui/panel-header-section";
import UiSelects from "@/components/ui/selects";
import UiTables from "@/components/ui/tables";
import UiTexts from "@/components/ui/texts";
import { useState } from "react";

export default function ui() {
  const [activeTab, setActiveTab] = useState("colors");

  const tabsItems = [
    {
      id: "colors",
      name: "colors",
    },
    {
      id: "btns",
      name: "btns",
    },
    {
      id: "headings",
      name: "headings",
    },
    {
      id: "PannelHeaderSection",
      name: "PannelHeaderSection",
    },
    {
      id: "texts",
      name: "texts",
    },
    {
      id: "inputs",
      name: "inputs",
    },
    {
      id: "selects",
      name: "selects",
    },
    {
      id: "alerts",
      name: "alerts",
    },
    {
      id: "chips",
      name: "chips",
    },
    {
      id: "tables",
      name: "tables",
    },
    {
      id: "logo",
      name: "logo",
    },
    {
      id: "cards",
      name: "cards",
    },
  ];
  const renderCell = (item) => {
    return (
      <div className="text-dim text-md py-2 text-center group-[&.active]:text-primary">
        {item.name}
      </div>
    );
  };
  
  return (
    <div className="container">
      <Tabs
        wrapclass="flex items-center mb-8"
        className="grow hover:bg-neutral-dark [&.active]:bg-primary-light rounded-b-base"
        renderCell={renderCell}
        tabs={tabsItems}
        changeTab={(id) => setActiveTab(id)}
      />
      {activeTab === "colors" && <UiColors />}
      {activeTab === "btns" && <UiBtns />}
      {activeTab === "headings" && <UiHeadings />}
      {activeTab === "PannelHeaderSection" && <UiPanelHeaderSection />}
      {activeTab === "texts" && <UiTexts />}
      {activeTab === "inputs" && <UiInputs />}
      {activeTab === "selects" && <UiSelects/>}
      {activeTab === "alerts" && <UiAlerts />}
      {activeTab === "chips" && <UiChips />}
      {activeTab === "tables" && <UiTables/>}
      {activeTab === "logo" && <UiLogo />}
      {activeTab === "cards" && <UiCards />}
    </div>
  );
}
