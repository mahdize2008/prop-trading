"use client"

import Heading from "@/components/generic/heading";
import Tabs from "@/components/generic/tabs";
import UiAlerts from "@/components/ui/alerts";
import UiBtns from "@/components/ui/btns";
import UiChips from "@/components/ui/chips";
import UiColors from "@/components/ui/colors";
import UiHeadings from "@/components/ui/headings";
import UiInputs from "@/components/ui/inputs";
import UiSelects from "@/components/ui/selects";
import UiTables from "@/components/ui/tables";
import UiTexts from "@/components/ui/texts";
import clsx from "clsx";
import { useState } from "react";

export default function PanelUi() {
    const [active, setActive] = useState("colors")
    const tabs = [
        {
            value: 'colors',
            label: 'colors',
        },

        {
            value: 'btns',
            label: 'btns',
        },
        {
            value: 'headings',
            label: 'headings',
        },
        {
            value: 'texts',
            label: 'texts',
        },
        {
            value: 'inputs',
            label: 'inputs',
        },
        {
            value: 'selects',
            label: 'selects',
        },
        {
            value: 'alerts',
            label: 'alerts',
        },
        {
            value: 'chips',
            label: 'chips',
        },
        {
            value: 'tables',
            label: 'tables',
        },
    ]
    return (
        <div>
            <div className="container py-10">
                <Tabs tabs={tabs} changeTab={(val) => setActive(val)} />

            </div>
            {
                active === "btns" && (
                    <UiBtns />
                )
            }
            {
                active === "headings" && (
                    <UiHeadings />
                )
            }
            {
                active === "texts" && (
                    <UiTexts />
                )
            }
            {
                active === "colors" && (
                    <UiColors />
                )
            }
            {
                active === "inputs" && (
                    <UiInputs />
                )
            }

            {
                active === "alerts" && (
                    <UiAlerts />
                )
            }

            {
                active === "chips" && (
                    <UiChips />
                )
            }
            {
                active === "tables" && (
                    <UiTables />
                )
            }

            {
                active === "selects" && (
                    <UiSelects />
                )
            }




        </div>
    )
}