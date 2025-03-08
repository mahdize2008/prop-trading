import Btn from "../generic/btn";
import Chip from "../generic/chip";
import SelectBox from "../generic/select";

export default function UiSelects() {
    const options = [
        {
            value: 0,
            label: 'تست ۱'
        },
        {
            value: 1,
            label: 'تست ۲'
        },
        {
            value: 2,
            label: 'تست ۳'
        },
        {
            value: 3,
            label: 'تست ۴'
        },
    ]
    const optionsCustom = [
        {
            value: 0,
            label: 'تست ۱',
            statusText: 'تایید',
            status: 'success',
        },
        {
            value: 1,
            label: 'تست ۲',
            statusText: 'رد شده',
            status: 'danger',
        },
    ]
    return (
        <div className="container pb-8">
            <div className="mb-8 last:mb-0">
                <SelectBox
                    label={' سلکت'}
                    options={options}
                />
            </div>
            <div className="mb-8 last:mb-0">
                <SelectBox
                    label={' سلکت leftSideLabel'}
                    leftSideLabel={<Btn color="primary" size="sm" variant="text">افزودن</Btn>}
                    options={options}
                />
            </div>
            <div className="mb-8 last:mb-0">
                <SelectBox
                    label={' سلکت با اپشن های کاستوم'}
                    options={optionsCustom}
                    formatOption={(option) => (
                        <span className="flex items-center text-sm">
                            <span className="inline-block ml-3">
                                {option.label}
                            </span>
                            <Chip variant="lightness" color={option.status}>
                                {option.statusText}
                            </Chip>
                        </span>
                    )}
                />
            </div>
        </div>
    )
}