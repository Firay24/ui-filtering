import React from 'react'
import Dropdown from './dropdown'

function Supplier({ 
  supliers,
  onFieldChange,
  selectedOption
}) {
  const handleOperatorChange = (event) => {
    const value = event.target.value
    onFieldChange("Supplier_Name", "operator", value)
  }

  const handleOnSelectValue = (value) => {
    onFieldChange("Supplier_Name", "value", value)
  }

  return (
    <div className='flex gap-x-4'>
        <div className='w-1/2'>
          <div className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'>
              <p>Suplier Name</p>
          </div>
        </div>
        <div>
            <select
                value={selectedOption.operator}
                onChange={handleOperatorChange}
                name="operation" 
                id="operation"
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5'
            >
                <option value="is">is</option>
                <option value="not is">not is</option>
            </select>
        </div>
        <div className='w-full'>
          <Dropdown options={supliers.data} onselect={handleOnSelectValue} />
        </div>
    </div>
  )
}

export default Supplier