import Supplier from './components/supplier'
import Service from './components/service';
import Dates from './components/dates';
import Operators from './components/operators';

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
  return (
    <div className='w-full'>
      <div className='grid grid-cols-6 mt-3 items-center w-full'>
        <div>
          {index === 0 ? <p>Where</p> : <Operators selectedOperator={selectedOperator} onOperatorChange={onOperatorChange} />}
        </div>
        <div className='grid col-span-5 w-full'>
          <Supplier
            supliers={supliers && supliers}
            onFieldChange={onFieldChange}
            selectedOption={selectedOption.Supplier_Name}
          />
        </div>
      </div>
      <div className='grid grid-cols-6 mt-3 items-center w-full'>
        <div className='grid col-start-2 col-span-5 w-full'>
          <Service
            services={services && services}
            onFieldChange={onFieldChange}
            selectedOption={selectedOption.Service}
          />
        </div>
      </div>
      <div className='grid grid-cols-6 mt-3 items-center w-full'>
        <div className='grid col-start-2 col-span-5 w-full'>
          <Dates
            inputValue={inputValue}
            onFieldChange={onFieldChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Fields;
