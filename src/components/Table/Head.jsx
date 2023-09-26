import React from 'react'

function Head() {
  const columns = ['Purchase Order Number', 'order_date', 'Total_Value', 'Supplier_Name', 'Account_Name', 'Service']
  return (
    <thead className="rounded text-xs text-gray-700 uppercase bg-gray-100">
        <tr>
            {
                columns.map((column, index) => (
                    <th key={index} className={index === 0 ? 'px-6 py-3 rounded-l-lg' : index === 5 ? 'px-6 py-3 rounded-r-lg' : 'px-6 py-3'}>
                        {column}
                    </th>
                ))
            }
        </tr>
    </thead>
  )
}

export default Head