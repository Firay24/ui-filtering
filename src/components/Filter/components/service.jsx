import React from 'react'

function Service({ services, onFieldChange, selectedOption }) {
    const handleSelectChange = (event) => {
        const value = event.target.value
        onFieldChange("Service", "value", value)
    }

    const handleOperatorChange = (event) => {
        const value = event.target.value
        onFieldChange("Service", "operator", value)
    }
    return (
        <div className='flex w-full gap-x-4'>
            <div className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5'>
                <p>Service</p>
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
                <select
                    value={selectedOption.value}
                    onChange={handleSelectChange}
                    name="name" 
                    id="name"
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                >
                    <option value=''>pilih</option>
                    {
                        services && services.data.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export default Service