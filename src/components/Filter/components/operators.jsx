import React from 'react'

function Operators({ selectedOperator, onOperatorChange }) {
  const handleChange = (event) => {
    const newOperator = event.target.value
    onOperatorChange(newOperator)
  }
  return (
    <select 
        name="operation" 
        id="operation"
        value={selectedOperator}
        onChange={handleChange}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5'
    >
        <option value="AND">AND</option>
        <option value="OR">OR</option>
    </select>
  )
}

export default Operators