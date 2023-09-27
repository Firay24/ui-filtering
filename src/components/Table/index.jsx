import React from 'react'
import Head from './Head'
import Body from './Body'

function Table({ data }) {
  return (
    <div>
        <table className="mt-5 drop-shadow-sm w-full text-xs text-left text-gray-500 z-0">
            <Head />
            {
                data && data.map((item, index) => (
                    <Body key={index} data={item} />
                ))
            }
        </table>
    </div>
  )
}

export default Table