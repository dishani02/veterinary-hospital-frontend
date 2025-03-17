import { ChevronRight } from 'lucide-react';
import { FC } from 'react';
import { Link } from 'react-router';

const ServiceConfirmation: FC = () => {
  return (
    <div className='space-y-2 p-2'>
      <div className='flex items-center'>
        <Link to='/app/dashboard' className='!text-black'>Home</Link>
        <ChevronRight size={16} />
        <Link to='/app/services' className='!text-black'>Service Requests</Link>
        <ChevronRight size={16} />
        <h2>Confirmation</h2>
      </div>

      <div className='p-4 rounded-lg'>
        <h2 className='text-lg font-semibold'>Service Request Summary</h2>
        <div className='mt-2 space-y-2'>
          <div>Pet Name: Kumal</div>
          <div>Service Type: Home Visit</div>
          <div>Request Date: 20.03.2025</div>
          <div>Service Reason: Pet Care</div>
          <div>Request Status: Approved</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceConfirmation;
