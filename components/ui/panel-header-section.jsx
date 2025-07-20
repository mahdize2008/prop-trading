import Btn from "../generic/btn";
import Chip from "../generic/chip";
import PanelHeaderSection from "../panel/generic/panel-header-section";

export default function UiPanelHeaderSection() {
  return (
    <>
    <div className="container mb-8">
      <PanelHeaderSection
      >
        عنوان تست
      </PanelHeaderSection>
    </div>

    <div className="container mb-8">
      <PanelHeaderSection
        leftSide={
          <Btn
            size="sm"
            variant="gradient"
            icon="icon-left-arrow"
            iconPlace="left"
            className="mr-auto"
          >
            خرید چالش جدید
          </Btn>
        }
      >
        عنوان تست
      </PanelHeaderSection>
    </div>
    
    <div className="container mb-8">
      <PanelHeaderSection
        leftSide={
          <Chip color="neutral-light" className="mr-auto">
            شماره حساب:  ۵۵۳۵۴۲۹۹۲۲
          </Chip>
        }
      >
        عنوان تست
      </PanelHeaderSection>
    </div>
    
    <div className="container mb-8">
      <PanelHeaderSection
        leftSide={
          <Chip color="neutral-light">
            مرحله یک
          </Chip>
        }
      >
        عنوان تست
      </PanelHeaderSection>
    </div>
    
    <div className="container mb-8">
      <PanelHeaderSection
        leftSide={
          <>
          <Chip color="neutral-light" className="ml-auto">
            مرحله یک
          </Chip>
          <Btn
            size="sm"
            variant="gradient"
            icon="icon-left-arrow"
            iconPlace="left"
          >
            خرید چالش جدید
          </Btn>
          </>
        }
      >
        عنوان تست
      </PanelHeaderSection>
    </div>
    </>
  );
}
