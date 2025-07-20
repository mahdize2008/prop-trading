import Input from "../generic/input";

export default function UiInputs() {
  return (
    <div className="container">
      <div className="-m-2 flex flex-wrap">
        <div className="w-1/2 p-2 last:mb-0">
          <Input label="عنوان اینپوت" placeholder="ایمیل" />
        </div>
        <div className="w-1/2 p-2 last:mb-0">
          <Input label="عنوان اینپوت با right-side" rightSide={"تومان"} />
        </div>
        <div className="w-1/2 p-2 last:mb-0">
          <Input label="عنوان اینپوت با left-side" leftSide={"تومان"} />
        </div>
        <div className="w-1/2 p-2 last:mb-0">
          <Input
            label="عنوان اینپوت"
            showMsg={true}
            msg="مشکلی به وجود آمده است"
            msgType="danger"
          />
        </div>
        <div className="w-1/2 p-2 last:mb-0">
          <Input
            label="عنوان اینپوت"
            showMsg={true}
            msg="مشکلی به وجود آمده است"
            msgType="warning"
          />
        </div>
        <div className="w-1/2 p-2 last:mb-0">
          <Input
            label="عنوان اینپوت"
            showMsg={true}
            msg="مشکلی به وجود آمده است"
            msgType="success"
          />
        </div>
        <div className="w-1/2 p-2 last:mb-0">
          <Input
            label="عنوان اینپوت"
            showMsg={true}
            msg="مشکلی به وجود آمده است"
            msgType="info"
          />
        </div>
      </div>
    </div>
  );
}
