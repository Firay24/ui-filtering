import React, { useState } from 'react'

function Dates() {
  const [operator, setOperator] = useState('more then')

  const handleChange = (event) => {
    const operationValue = event.target.value
    setOperator(operationValue)
  }

  return (
    <div className='flex w-full gap-x-4'>
        <div className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5'>
            <p>Order Date</p>
        </div>
        <div>
            <select
                name="operation" 
                id="operation"
                onChange={handleChange}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5'
            >
                <option value="more then">more then</option>
                <option value="less then">less then</option>
                <option value="between">between</option>
            </select>
        </div>
        {
          operator === 'between' ? (
            <div className='flex w-full gap-x-2'>
                <div className='w-full'>
                    <input 
                        type="date"
                        placeholder='start date'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                    />
                </div>
                <div className='flex items-center'>
                    <p>-</p>
                </div>
                <div className='w-full'>
                    <input 
                        type="date"
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                    />
                </div>
            </div>
          ) : (
            <div className='w-full'>
                <input 
                    type="date"
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                />
            </div>
          )
        }
    </div>
  )
}

export default Dates