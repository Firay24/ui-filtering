import React from 'react'
import ParseDateFunc from '../../parseDate'

function Body({data}) {
  const columns = ['Purchase Order Number', 'order_date', 'Total_Value', 'Supplier_Name', 'Account_Name', 'Service']
  return (
    <tbody>
        <tr className="border-b">
            {
                columns.map((column, index) => (
                    column === 'order_date' ? (
                        <td key={index} className='px-6 py-4 bg-white'>
                            {ParseDateFunc(data[column])}
                        </td>
                    ) : (
                        <td key={index} className='px-6 py-4 bg-white'>
                            {data[column]}
                        </td>
                    )
                ))
            }
        </tr>
    </tbody>
  )
}

export default Body