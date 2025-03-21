import { Link, useNavigate } from 'react-router';
import { Button } from 'antd';
import { ChevronRight, } from 'lucide-react';

const ViewAppointment = () => {
  const navigate = useNavigate();

  return (
    <div className='!space-y-4'>
      <div className="flex items-center">
        <Link to="/admin/dashboard" className='!text-black'>Home</Link>
        <ChevronRight size={16} />
        <Link to="/admin/Appointments" className='!text-black'>Appointments</Link>
        <ChevronRight size={16} />
        <h2>View Appointments</h2>
      </div>

      <div className="max-w-3xl mx-auto p-10 bg-white shadow-lg rounded-lg">
        <div className="grid grid-cols-2 gap-10">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Appointment Details</h2>
          <div className="grid grid-cols-2 gap-10">

          </div>
          <div>
            <h3 className="font-semibold text-gray-700 text-sm">Appointment ID</h3>
            <p className="text-gray-900 text-base">001</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 text-sm">Pet Name</h3>
            <p className="text-gray-900 text-base">SAM</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 text-sm">Veterinarian</h3>
            <p className="text-gray-900 text-base">Dr. Roshan Perera</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 text-sm">Status</h3>
            <p className="text-gray-900 text-base">Pending</p>
            {/* <select
              className="mt-1 p-2 w-full border rounded-md bg-white shadow-sm focus:outline-none focus:ring-2"
              defaultValue="In Progress">
              <option value="In Progress">Pending</option>
              <option value="Complete">Approved</option>
              <option value="Cancel">Cancel</option>
            </select> */}
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 text-sm">Date</h3>
            <p className="text-gray-900 text-base">25.03.2025</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 text-sm">Time</h3>
            <p className="text-gray-900 text-base">4.00</p>
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-10">
          {/* <Button type="primary" className='w-24' onClick={() => navigate(-1)}>Back</Button> */}

          <Button type="primary" htmlType="submit" className="w-24 px-6 py-2 text-lg">Cancle</Button>
          <Button type="primary" htmlType='button' onClick={() => navigate("/admin/appointments/reschedule-appointments")}>  Reschedule
          </Button>
        </div>
      </div>
    </div>

  );
};

export default ViewAppointment;
