import { ChevronRight } from 'lucide-react';
import { FC } from 'react';
import { Link } from 'react-router';

const AppointmentConfirmation: FC = () => {
  return (
    <div className='space-y-10 p-2'>
      <div className='flex items-center'>
        <Link to='/app/dashboard' className='!text-black'>Home</Link>
        <ChevronRight size={16} />
        <Link to='/app/appointments' className='!text-black'>Appointments</Link>
        <ChevronRight size={16} />
        <h2>Confirmation</h2>
      </div>

      <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl'>
        <h3 className='text-xl font-semibold text-gray-900 mb-4'>Appointment Summary</h3>
        <div className='space-y-3'>
          <div className='text-gray-700'>
            <span className='font-medium'>Pet Owner's Name: </span>Dishani
          </div>
          <div className='text-gray-700'>
            <span className='font-medium'>Pet Name: </span>Sam
          </div>
          <div className='text-gray-700'>
            <span className='font-medium'>Veternarian: </span>Dr. Roshan Perera
          </div>
          <div className='text-gray-700'>
            <span className='font-medium'> Date : </span>20.03.2025
          </div>
          <div className='text-gray-700'>
            <span className='font-medium'> Time: </span>04.00
          </div>
          <div className='text-gray-700'>
            <span className='font-medium'>Reason for Appointment: </span>Vaccination
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentConfirmation;
