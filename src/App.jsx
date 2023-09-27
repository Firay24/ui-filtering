import React, { useEffect, useState } from 'react'
import Table from '../src/components/Table'
import Filter from './components/Filter'
import { getAll, getSuplier, getService, getFilter } from './api'

function App() {
    const [orders, setOrders] = useState(null)
    const [supliers, setSupliers] = useState(null)
    const [services, setservices] = useState(null)
    const [isClick, setIsClick] = useState(false)
    const [filterData, setFilterData] = useState({
      conditions: [],
      operators: []
    });
    
    async function getOrder() {
      const result = await getAll()
      setOrders(result)
    }

    async function getSupliers() {
      const result = await getSuplier()
      setSupliers(result)
    }

    async function getServices() {
      const result = await getService()
      setservices(result)
    }

    async function getFiltering (conditions, operators) {
      const result = await getFilter(conditions, operators)

      setOrders(result)
    }

    const receiveFilterData = (data) => {
      setFilterData(data)
    }

    const handleClickButton = (value) => {
      setIsClick(value)
    }

    useEffect(() => {
      getOrder()
      getSupliers()
      getServices()
    },[])

    useEffect(() => {
      if(isClick) {
        getFiltering(filterData.conditions, filterData.operators)
        setIsClick(false)
      }
    }, [isClick, filterData]);   

    return (
        <div className="my-10 mx-20 flex flex-col items-center">
          <h1 className="text-2xl mb-5 font-semibold">
            Transaksi Pemesanan PT.XYZ
          </h1>
          <div className='w-full'>
            <Filter 
              supliers={supliers && supliers} 
              services={services && services}
              onFilterChange = {receiveFilterData}
              isClickButton={handleClickButton}
            />
          </div>
          <div>
            <Table data={orders && orders.data} />
          </div>
        </div>
    )
}

export default App