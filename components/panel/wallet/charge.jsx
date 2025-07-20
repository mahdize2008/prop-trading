import Card from "@/components/generic/card";
import PanelHeaderSection from "../generic/panel-header-section";
import Input from "@/components/generic/input";
import Btn from "@/components/generic/btn";
import Text from "@/components/generic/text";

export default function WalletCharge( {setStep} ) {
    const amountList=[2,5,10,20,100,200]
  return (
    <Card color="neutral-dark" className="p-6">
      <PanelHeaderSection border={false} shape className="mb-6">
        شارژ کیف پول
      </PanelHeaderSection>
      <form>
        <Input
          label="مبلغ (به دلار)"
          placeholder="مقدار دلاری شارژ مورد نظر"
          wrapClasses="mb-9"
          unit="دلار"
          amountList={amountList}
        />
        <div className="flex items-center text-xs text-dim-lighter mb-9">
          نرخ دلار در لحظه محاسبه میگردد.
          <Text size="lg" color="dim-dark" className="mr-auto">
            ۱۲۰ هزارتومان
          </Text>
        </div>
          <Btn
            variant="gradient"
            className="mr-auto"
            icon="icon-left-arrow"
            iconPlace="left"
            as="div"
            onClick={setStep}
          >
            رفتن به درگاه پرداخت
          </Btn>
      </form>
    </Card>
  );
}
