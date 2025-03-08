import Chip from "../generic/chip";
import Table from "../generic/table";

export default function UiTables() {
    const columns = [
        {
            key: "th1",
            label: "عنوان ستون ۱",
        },
        {
            key: "th2",
            label: "عنوان ستون ۲",
        },
        {
            key: "th3",
            label: "عنوان ستون ۳",
        },
        {
            key: "th5",
            label: "عنوان ستون ۴",
            renderCell: (_, row) => (
                <Chip variant="lightness" color={row.status}>
                    {row.status_text}
                </Chip>
            ),
        },
        {
            key: "th4",
            label: "عنوان ستون ۴",
        },
       
    ];
    const data = [
        {
            th1: 'تست',
            th2: 'تست',
            th3: 'تست',
            th4: 'تست',
            status: 'success',
            status_text: 'موفق',
        },
        {
            th1: 'تست',
            th2: 'تست',
            th3: 'تست',
            th4: 'تست',
            status: 'danger',
            status_text: 'ناموفق',
        },
        {
            th1: 'تست',
            th2: 'تست',
            th3: 'تست',
            th4: 'تست',
            status: 'warning',
            status_text: 'درحال بررسی',
        },
    ]
    return (
        <div className="container pb-8">
            <Table columns={columns} data={data}/>
        </div>
    )
}