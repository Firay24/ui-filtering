import Supplier from './components/supplier'
import Service from './components/service';
import Dates from './components/dates';
import Operators from './components/operators';

function Fields({ supliers, services, isFirst }) {
  return (
    <div className='w-full'>
        <div className='grid grid-cols-6 mt-3 items-center w-full'>
            <div>
								{
									isFirst ? (
										<p>Where</p>
									) : (
										<Operators />
									)
								}
            </div>
            <div className='grid col-span-5 w-full'>
                <Supplier supliers={supliers && supliers} />
            </div>
        </div>
        <div className='grid grid-cols-6 mt-3 items-center w-full'>
            <div className='grid col-start-2 col-span-5 w-full'>
                <Service services={services && services} />
            </div>
        </div>
        <div className='grid grid-cols-6 mt-3 items-center w-full'>
            <div className='grid col-start-2 col-span-5 w-full'>
                <Dates />
            </div>
        </div>
    </div>
  )
}

export default Fields