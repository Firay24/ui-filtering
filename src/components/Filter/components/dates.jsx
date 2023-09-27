function Dates({inputValue, onFieldChange}) {
  if (!inputValue) {
      return null;
      }
  const operator = inputValue.operator

  const handleChange = (event, key) => {
    const operationValue = event.target.value
    onFieldChange("order_date", key, operationValue)
  }

  return (
    <div className='flex w-full gap-x-4'>
        <div className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5'>
            <p>Order Date</p>
        </div>
        <div>
            <select
                name="operation" 
                id="operation"
                onChange={(event) => handleChange(event, 'operator')}
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
                        name='startDate'
                        id='startDate'
                        onChange={(event) => handleChange(event, 'startDate')}
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
                        name='endDate' 
                        id='endDate'
                        onChange={(event) => handleChange(event, 'endDate')}
                        type="date"
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                    />
                </div>
            </div>
          ) : (
            <div className='w-full'>
                <input
                    name='aDates'
                    id='aDates'
                    onChange={(event) => handleChange(event, 'aDates')}
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