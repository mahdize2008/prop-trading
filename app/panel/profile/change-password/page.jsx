import PanelHeaderSection from "@/components/panel/generic/panel-header-section";
import ProfileChangePassword from "@/components/panel/profile/change-password";

export default function () {
  return (
    <>
    <PanelHeaderSection className="mb-6">تغییر رمز عبور</PanelHeaderSection>
      <ProfileChangePassword />
    </>
  );
}
