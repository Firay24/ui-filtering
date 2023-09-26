import React, { useState } from 'react'
import Fields from './fields'
import { AiOutlinePlusCircle } from "react-icons/ai";

function Filter({ supliers, services }) {
  const [countComponent, setCountComponent] = useState(1)
  const fieldsComponent = []

	const handleAddButton = () => {
		setCountComponent((prevCount) => (
			prevCount + 1
		))
	}

  for (let i = 0; i < countComponent; i++) {
    const isFirst = i === 0
    fieldsComponent.push(
      <Fields 
        key={i} 
        supliers={supliers} 
        services={services} 
        isFirst={isFirst}
      />
    );
  }

  return (
    <div className='w-full drop-shadow-sm py-6 px-4 bg-white border rounded'>
        <div>
            <p className='font-semibold'>Filter</p>
        </div>
        <div className='grid grid-cols-6 items-end'>
          <div className='grid col-span-5 w-full'>
            {fieldsComponent}
          </div>
          <div className='text-2xl text-blue-500 hover:text-gray-500 ml-3'>
              <button onClick={handleAddButton}>
                  <AiOutlinePlusCircle />
              </button>
          </div>
        </div>
    </div>
  )
}

export default Filter