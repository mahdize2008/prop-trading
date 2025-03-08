import Input from "../generic/input";

export default function UiInputs() {
    return (
        <div className="container">
            <div className="mb-8 last:mb-0">
                <Input
                    label="عنوان اینپوت"
                />
            </div>
            <div className="mb-8 last:mb-0">
                <Input
                    label="عنوان اینپوت با right-side"
                    rightSide={'تومان'}
                />
            </div>
            <div className="mb-8 last:mb-0">
                <Input
                    label="عنوان اینپوت با left-side"
                    leftSide={'تومان'}
                />
            </div>
            <div className="mb-8 last:mb-0">
                <Input
                    label="عنوان اینپوت"
                    showMsg={true}
                    msg="مشکلی به وجود آمده است"
                    msgType="danger"
                />
            </div>
            <div className="mb-8 last:mb-0">
                <Input
                    label="عنوان اینپوت"
                    showMsg={true}
                    msg="مشکلی به وجود آمده است"
                    msgType="warning"
                />
            </div>
            <div className="mb-8 last:mb-0">
                <Input
                    label="عنوان اینپوت"
                    showMsg={true}
                    msg="مشکلی به وجود آمده است"
                    msgType="success"
                />
            </div>
            <div className="mb-8 last:mb-0">
                <Input
                    label="عنوان اینپوت"
                    showMsg={true}
                    msg="مشکلی به وجود آمده است"
                    msgType="info"
                />
            </div>
        </div>
    )
}