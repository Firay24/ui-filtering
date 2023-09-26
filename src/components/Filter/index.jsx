import React from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai";
import Supplier from './supplier'
import Service from './service';
import Dates from './dates';

function Filter({ supliers, services }) {
  return (
    <div className='w-full drop-shadow-sm py-6 px-4 bg-white border rounded'>
        <div>
            <p className='font-semibold'>Filter</p>
        </div>
        <div className='grid grid-cols-6 mt-3 items-center'>
            <div>
                <p>Where</p>
            </div>
            <div className='grid col-span-4 w-full'>
                <Supplier supliers={supliers && supliers} />
            </div>
            <div className='text-2xl text-blue-500 hover:text-gray-500 ml-3'>
                <button>
                    <AiOutlinePlusCircle />
                </button>
            </div>
        </div>
        <div className='grid grid-cols-6 mt-3 items-center'>
            <div>
                <p>Where</p>
            </div>
            <div className='grid col-span-4 w-full'>
                <Service services={services && services} />
            </div>
            <div className='text-2xl text-blue-500 hover:text-gray-500 ml-3'>
                <button>
                    <AiOutlinePlusCircle />
                </button>
            </div>
        </div>
        <div className='grid grid-cols-6 mt-3 items-center'>
            <div>
                <p>Where</p>
            </div>
            <div className='grid col-span-4 w-full'>
                <Dates />
            </div>
            <div className='text-2xl text-blue-500 hover:text-gray-500 ml-3'>
                <button>
                    <AiOutlinePlusCircle />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Filter