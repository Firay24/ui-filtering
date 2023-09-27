import React, { useEffect, useState } from 'react'
import Fields from './fields'
import { AiOutlinePlusCircle } from "react-icons/ai";

function Filter({ supliers, services, onFilterChange, isClickButton }) {
  const [fieldsData, setFieldsData] = useState([
    {
      Supplier_Name: { operator: 'is', value: '' },
      Service: { operator: 'is', value: '' },
      order_date: { operator: 'more then', aDates: '', startDate: '', endDate: '' },
    },
  ]);
  const [operatorsFields, setOperatorsFields] = useState(['AND']); // Gantilah nilai default sesuai kebutuhan // Gantilah nilai default sesuai kebutuhan

  const addFields = () => {
    const newIndex = fieldsData.length;
    setFieldsData((prevFieldsData) => [
      ...prevFieldsData,
      {
        Supplier_Name: { operator: 'is', value: '' },
        Service: { operator: 'is', value: '' },
        order_date: { operator: 'more then', aDates: '', startDate: '', endDate: '' },
      },
    ]);

    if (newIndex > 0) {
      setOperatorsFields((prevOperators) => [...prevOperators, 'AND']); // Default operator (AND) for the new condition
    }
  };

  const handleFieldChange = (index, field, key, value) => {
    const newFieldsData = [...fieldsData];
    newFieldsData[index][field][key] = value;
    setFieldsData(newFieldsData);
  };

  const handleOperatorChange = (index, operator) => {
    const newOperators = [...operatorsFields];
    newOperators[index] = operator;
    setOperatorsFields(newOperators);
  };

  const handleIsClikButton = () => {
    isClickButton(true)
  }

  const requestBody = () => {
    const conditions = fieldsData.map((field, index) => {
      return {
        id: index,
        Supplier_Name: field.Supplier_Name,
        Service: field.Service,
        order_date: field.order_date,
      };
    });

    const operators = operatorsFields.slice(1, conditions.length);

    return {
      conditions,
      operators,
    };
  };

  useEffect(() => {
    const requestBodyData = requestBody();
    onFilterChange(requestBodyData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fieldsData, operatorsFields]);

  return (
    <div className='w-full drop-shadow-sm py-6 px-4 bg-white border rounded'>
      <div>
        <p className='font-semibold'>Filter</p>
      </div>
      <div className='grid grid-cols-6 items-end'>
        <div className='grid col-span-5 w-full'>
          {fieldsData.map((field, index) => (
            <Fields
              key={index}
              supliers={supliers}
              services={services}
              selectedOption={field}
              inputValue={field.order_date}
              onFieldChange={(field, key, value) =>
                handleFieldChange(index, field, key, value)
              }
              selectedOperator={operatorsFields[index]}
              onOperatorChange={(operator) => handleOperatorChange(index, operator)}
              index={index}
            />
          ))}
        </div>
        <div className='flex text-blue-500 hover:text-gray-500 ml-3 gap-x-3'>
          <button onClick={addFields} className='text-2xl'>
            <AiOutlinePlusCircle />
          </button>
          <div className="">
            <button onClick={handleIsClikButton} className="bg-blue-300 px-4 py-1 rounded-md text-gray-800 hover:bg-blue-400">
              Cari
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter