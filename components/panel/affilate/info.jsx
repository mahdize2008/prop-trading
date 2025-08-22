"use client"

import Alert from "@/components/generic/alert";
import Btn from "@/components/generic/btn";
import Heading from "@/components/generic/heading";
import Input from "@/components/generic/input";
import Text from "@/components/generic/text";
import StatWrap from "../widget/stat/wrap";
import affilateStatData from "@/data/panel/affilate/stat";

import useCopy from "@/utils/copy";

export default function AffilateInfo({ code, link,stats }) {
  return (
    <div className="w-3/5 p-2">
      <div className="rounded-lg border border-neutral-light p-4">
        <Heading variant="h5" className="mb-3">
          برداشت سود
        </Heading>
        <div className="flex -m-1.5 mb-2">
          <StatWrap statList={stats} className="w-1/2 p-1.5" />
        </div>
        <Alert color="success" variant="lightness" className="mb-4">
          سود پنل همکاری برای هر خرید ۵ درصد میباشد و شامل تمامی خرید های رفرال
          میشود و صرفا برای خرید اول نیست
        </Alert>
        <div className="p-4 border-t border-t-neutral-light">
          <div className="flex items-center mb-3">
            <Heading variant="h5">اطلاعات معرف</Heading>
            <Text size="sm" className="mr-auto ml-3">
              کد شما : {code}
            </Text>
            <Btn variant="text" color="dim" onClick={() => useCopy(code)}>
              <i className="icon-copy"></i>
            </Btn>
          </div>
          <Heading
            variant="h6"
            className="mb-2"
            weight="light"
            color="dim-light"
          >
            لینک معرفی شما:
          </Heading>
          <div className="flex items-center">
            <Input wrapClasses="grow" defaultValue={link} disabled />
            <Btn
              color="neutral-light"
              onClick={() => useCopy(link)}
              className="mr-2"
            >
              کپی لینک
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
}
