import React from 'react';
import Text from './text';
import clsx from 'clsx';
import Pagination from './pagination';

const Table = ({ columns, data = []  }) => {
    return (
        <div className='w-full'>
            <table className='w-full max-md:!block'>
                <thead className='max-lg:!hidden'>
                    <tr>
                        {columns.map((col) =>
                            <th
                                key={col.key}
                                className='p-3 bg-neutral-light first:rounded-r-base last:rounded-l-base'
                            >
                                <Text size="sm" weight='bold' color='dim'>
                                    {col.label}
                                </Text>
                            </th>
                        )}
                    </tr>
                </thead>
                {
                    !!data.length && (
                        <tbody className=''>
                            {data.map((row, rowIndex) => (
                                <tr
                                    key={`row-${rowIndex}`}
                                    className='group max-lg:!flex flex-wrap max-lg:border border-solid border-neutral max-lg:mb-2 last:mb-0 rounded-md'
                                >
                                    {columns.map((col) =>
                                    (
                                        <td
                                            key={`mobile-cell-${rowIndex}-${col.key}`}
                                            className={clsx(
                                                'p-3 border-b border-solid border-neutral lg:group-last:border-b-0 max-lg:last:border-b-0 max-lg:w-full max-lg:flex items-center',
                                                
                                            )}
                                        >
                                            <Text size='sm' weight='bold' color='dim-dark' className='lg:hidden !ml-auto block'>
                                                { col.label }
                                            </Text>
                                            <Text size='sm' color='dim'>
                                                {col.renderCell
                                                    ? col.renderCell(row[col.key], row)
                                                    : row[col.key]}
                                            </Text>
                                        </td>
                                    )
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    )
                }

            </table>
        </div>
    );
};

export default Table;