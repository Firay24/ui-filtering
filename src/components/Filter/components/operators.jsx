import React from 'react'

function Operators() {
  return (
    <select 
        name="operation" 
        id="operation"
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5'
    >
        <option value="is">AND</option>
        <option value="not is">OR</option>
    </select>
  )
}

export default Operators