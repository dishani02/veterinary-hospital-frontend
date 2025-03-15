import { ChevronRight } from 'lucide-react';
import { FC } from 'react';
import { Link } from 'react-router';

const AppointmentConfirmation: FC = () => {
  return (
    <div className='space-y-2 p-2'>
      <div className='flex items-center'>
        <Link to='/app/dashboard' className='!text-black'>Home</Link>
        <ChevronRight size={16} />
        <Link to='/app/appointments' className='!text-black'>Appointments</Link>
        <ChevronRight size={16} />
        <h2>Confirmation</h2>
      </div>

      <div className='p-4 rounded-lg'>
        <h2 className='text-lg font-semibold'>Appointment Summary</h2>
        <div className='mt-2 space-y-2'>
          <div>Pet Owner's Name: Dishani</div>
          <div>Pet Name: Sam</div>
          <div>Species & Breed: Cat</div>
          <div>Appointment Date & Time: 20.03.2025</div>
          <div>Doctor's Name: Dr. Roshan Perera</div>
          <div>Reason for Appointment: Vaccination</div>
        </div>
      </div>

      
    </div>
  );
};

export default AppointmentConfirmation;
