"use client";

import Btn from "@/components/generic/btn";
import Card from "@/components/generic/card";
import Chip from "@/components/generic/chip";
import Heading from "@/components/generic/heading";
import Text from "@/components/generic/text";
import PanelHeaderSection from "@/components/panel/generic/panel-header-section";
import StatLink from "@/components/panel/widget/stat/link/stat-link";
import useDashboardStore from "@/store/dashboard";
import Link from "next/link";

export default function profile() {
  const { dashboardstore } = useDashboardStore();

  return (
    <>
      <PanelHeaderSection className="mb-6">حساب کاربری</PanelHeaderSection>
      <Card
        color="neutral"
        variant="lightness"
        className="flex items-center mb-6"
      >
        <div className="flex items-center ml-4 w-1/2">
          <div className="border border-neutral-light bg-neutral-dark w-10 h-10 rounded-full flex items-center justify-center ml-2">
            <i className="icon-avatar1 text-sm text-dim-dark"></i>
          </div>
          <Heading color="dim-dark" variant="h6" className="ml-3">
            {dashboardstore?.user?.full_name}
          </Heading>
          {dashboardstore?.verify ? (
            <Chip color="success" variant="outline">
              تایید شده
            </Chip>
          ) : (
            <>
              <Chip color="neutral-light" variant="outline" className="ml-6">
                احراز هویت نشده
              </Chip>
              <Btn
                icon="icon-left-arrow"
                as={Link}
                href="/panel/profile/verify"
                iconPlace="left"
                variant="gradient"
                size="sm"
              >
                شروع احراز هویت
              </Btn>
            </>
          )}
        </div>
        <div>
          <Text size="sm" color="dim-dark" className="flex items-center mb-5">
            <i className="icon-avatar1 ml-2"></i>
            {dashboardstore?.user?.username}
          </Text>
          <Text size="sm" color="dim-dark" className="flex items-center mb-5">
            <i className="icon-massage1 ml-2"></i>
            {dashboardstore?.user?.email}
          </Text>
          <Btn
            icon="icon-edit"
            color="neutral-light"
            size="sm"
            as={Link}
            href="/panel/profile/change-user-data"
          >
            ویرایش اطلاعات کاربری
          </Btn>
        </div>
      </Card>
      <div className="flex mb-4 -m-2">
        <div className="grow p-2">
          <StatLink
            title="رمز عبور"
            icon="icon-lock"
            color="neutral"
            component="div"
            leftSide={
              <Btn
                icon="icon-edit"
                as={Link}
                href="/panel/profile/change-password"
                size="sm"
                color="neutral-light"
                className="mr-auto"
              >
                ویرایش رمز عبور
              </Btn>
            }
          />
        </div>
        <div className="grow p-2">
          <StatLink
            title="امنیت"
            icon="icon-shield"
            color="neutral"
            component="div"
            leftSide={
              <Btn
                as={Link}
                href="/panel/profile/twoStepLogin"
                size="sm"
                color="neutral-light"
                className="mr-auto"
              >
                فعال ساری ورود دو مرحله‌ای
              </Btn>
            }
          />
        </div>
      </div>
      <Btn
        className="mr-auto"
        icon="icon-logout"
        color="neutral-light"
        size="sm"
        as={Link}
        href="/"
      >
        خروج از حساب
      </Btn>
    </>
  );
}
