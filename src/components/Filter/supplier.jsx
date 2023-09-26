import React from 'react'

function Supplier({ supliers }) {
  return (
    <div className='flex w-full gap-x-4'>
        <div className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5'>
            <p>Suplier Name</p>
        </div>
        <div>
            <select 
                name="operation" 
                id="operation"
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5'
            >
                <option value="is">is</option>
                <option value="not is">not is</option>
            </select>
        </div>
        <div className='w-full'>
            <select 
                name="name" 
                id="name"
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            >
                <option value=''>pilih</option>
                {
                    supliers && supliers.data.map((supplier, index) => (
                        <option key={index} value={supplier}>{supplier}</option>
                    ))
                }
            </select>
        </div>
    </div>
  )
}

export default Supplier