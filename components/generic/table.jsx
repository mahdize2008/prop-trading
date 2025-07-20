import clsx from "clsx";
import Text from "./text";
import Btn from "./btn";

export default function Table({ columns, data, head = true }) {
  return (
    data.length ? 
    <table className="w-full max-md:!block">
      <thead className="max-lg:!hidden">
        <tr>
          {columns.map((col, index) => (
            <th
              key={index}
              className={clsx(
                { "p-3 border-b border-neutral-light": head },
                "first:rounded-r-base last:rounded-l-base"
              )}
            >
              <Text size="sm" weight="bold" color="dim">
                {col.label}
              </Text>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}
            className="group max-lg:!flex flex-wrap max-lg:border border-solid border-neutral max-lg:mb-2 last:mb-0 rounded-md"
          >
            {columns.map((item, key) => (
              <td
                className="p-3 border-b border-neutral-light lg:group-last:border-b-0 max-lg:last:border-b-0 max-lg:w-full max-lg:flex items-center"
                key={key}
              >
                <Text size="sm" weight="bold" color="dim-light">
                  {item?.renderCell ? item.renderCell(row) : row[item.key]}
                </Text>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    :
    <div>
      <Btn icon="icon-refresh" color="neutral-light" className="mx-auto mb-4" rounded square/>
      <Text size="sm" className="text-center">
      تاریخچه‌ای برای نمایش وجود ندارد!
      </Text>
    </div>
  )
}
