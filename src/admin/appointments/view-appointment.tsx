import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { Button, message, Spin } from 'antd';
import { ChevronRight } from 'lucide-react';
import axios from 'axios';
import { useAppContext } from '../../providers/context-provider';

const ViewAppointment = () => {
  const navigate = useNavigate();
  const { appointmentId } = useParams();
  const { user } = useAppContext();

  const [appointment, setAppointment] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchAppointment = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/admin/appointments/view-appointment/${appointmentId}`,
          {
            headers: {
              Authorization: `Bearer ${user?.accessToken}`,
            },
          }
        );
        setAppointment(response.data.payload);
      } catch (error) {
        console.error('Error fetching appointment:', error);
        message.error('Failed to fetch appointment');
      } finally {
        setLoading(false);
      }
    };

    if (appointmentId) {
      fetchAppointment();
    }
  }, [appointmentId, user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="!space-y-4">
      <div className="flex items-center">
        <Link to="/admin/dashboard" className="!text-black">
          Home
        </Link>
        <ChevronRight size={16} />
        <Link to="/admin/Appointments" className="!text-black">
          Appointments
        </Link>
        <ChevronRight size={16} />
        <h2>View Appointments</h2>
      </div>

      <div className="max-w-3xl mx-auto p-10 bg-white shadow-lg rounded-lg">
        <div className="grid grid-cols-2 gap-10">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 col-span-2">
            Appointment Details
          </h2>

          <div>
            <h3 className="font-semibold text-gray-700 text-sm">Appointment ID</h3>
            <p className="text-gray-900 text-base">{appointment?._id || 'N/A'}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700 text-sm">Pet Name</h3>
            <p className="text-gray-900 text-base">{appointment?.petName || 'N/A'}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700 text-sm">Veterinarian</h3>
            <p className="text-gray-900 text-base">
              {appointment?.veterinarian?.name || 'N/A'}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700 text-sm">Status</h3>
            <p className="text-gray-900 text-base">{appointment?.status || 'N/A'}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700 text-sm">Date</h3>
            <p className="text-gray-900 text-base">{appointment?.date || 'N/A'}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700 text-sm">Time</h3>
            <p className="text-gray-900 text-base">{appointment?.time || 'N/A'}</p>
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-10">
          <Button
            type="default"
            className="w-24"
            onClick={() => navigate(-1)}
          >
            Back
          </Button>

          <Button
            type="primary"
            danger
            htmlType="button"
            className="w-24"
            onClick={() => message.info('Cancel feature not yet implemented')}
          >
            Cancel
          </Button>

          <Button
            type="primary"
            htmlType="button"
            onClick={() =>
              navigate(`/admin/appointments/reschedule-appointments/${appointment?._id}`)
            }
          >
            Reschedule
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ViewAppointment;
