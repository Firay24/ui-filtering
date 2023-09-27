import Supplier from './components/supplier'
import Service from './components/service';
import Dates from './components/dates';
import Operators from './components/operators';
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from 'react';

function Fields({
  supliers,
  services,
  index,
  onFieldChange,
  selectedOperator,
  onOperatorChange,
  selectedOption,
  inputValue,
}) {
  const [selectRule, setSelectRule] = useState({
    supplier: 0,
    services: 0,
    orderDate: 0
  })

  const handleChangeRule = (event) => {
    const rule = event.target.value;
    setSelectRule((prev) => ({
      ...prev,
      [rule]: 1,
    }));
  };
  
  return (
    <div className='w-full flex'>
      <div className='mt-5 w-1/4'>
          {index === 0 ? <p>Where</p> : <Operators selectedOperator={selectedOperator} onOperatorChange={onOperatorChange} />}
      </div>
      <div className='mt-2 w-full bg-slate-100 px-2 pb-3 rounded'>
        <div className='mt-3 items-center w-full'>
          <div className='w-full'>
            {
              selectRule.supplier ? (
                <Supplier
                  supliers={supliers && supliers}
                  onFieldChange={onFieldChange}
                  selectedOption={selectedOption.Supplier_Name}
                />
              ) : null
            }
          </div>
        </div>
        <div className='mt-3 items-center w-full'>
          <div className='w-full'>
            {
              selectRule.services ? (
                <Service
                  services={services && services}
                  onFieldChange={onFieldChange}
                  selectedOption={selectedOption.Service}
                />
              ) : null
            }
          </div>
        </div>
        <div className='mt-3 items-center w-full'>
          <div className='w-full'>
            {
              selectRule.orderDate ? (
                <Dates
                  inputValue={inputValue}
                  onFieldChange={onFieldChange}
                />
              ) : null
            }
          </div>
        </div>
        {
          selectRule.supplier && selectRule.services && selectRule.orderDate ? (
            null
          ) : (
            <div className='mt-3 items-center w-full'>
              <div className='flex items-center hover:bg-slate-200 px-3 text-gray-600 rounded'>
                <AiOutlinePlus />
                <select 
                  name="rule" 
                  id="rule"
                  onChange={handleChangeRule}
                  className='focus:ring-0 bg-transparent border-none'>
                  <option value="">add rule</option>
                  { !selectRule.supplier ? (<option value="supplier">Supplier name</option>) : null}
                  { !selectRule.services ? (<option value="services">Service</option>) : null}
                  { !selectRule.orderDate ? (<option value="orderDate">Order date</option>) : null}
                </select>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Fields;
