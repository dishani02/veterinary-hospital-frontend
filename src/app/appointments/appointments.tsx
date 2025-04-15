import { Button, Input, message, Modal, Table } from 'antd';
import { ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { DeleteOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppContext } from '../../providers/context-provider';
import dayjs from 'dayjs';

const Appointments = () => {
  const navigate = useNavigate();
  const { user } = useAppContext();

  const [loading, setLoading] = useState<boolean>(false);
  const [deleteLoading, setDeleteLoading] = useState<boolean>(false);
  const [cancelLoading, setCancelLoading] = useState<boolean>(false);

  const [appointments, setAppointments] = useState<any[]>([]);
  const [deleteAppointmentId, setDeleteAppointmentId] = useState<string | undefined>("");
  const [cancelAppointmentId, setCancelAppointmentId] = useState<string | undefined>("");

  useEffect(() => {
    const controller = new AbortController();

    const getAppointments = async () => {
      setLoading(true);
      await axios.get(`${import.meta.env.VITE_BASE_URL}/appointment/appointment-history`, {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`
        }
      }).then((res) => {
        setAppointments(res.data.payload);
      }).catch((err) => {
        console.error(err);
      }).finally(() => {
        setLoading(false);
      })
    };

    getAppointments();

    return () => {
      controller.abort();
    }
  }, []);

  const handleDeleteAppointment = async (appointmentId?: string) => {
    if (!appointmentId) return;
    try {
      setDeleteLoading(true);
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/appointment/${appointmentId}`, {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`
        }
      }).then((res: any) => {
        if (res.status === 200) {
          message.success("Appointment successfully deleted!");
          setDeleteAppointmentId(undefined);
        }
      })
    } catch (error) {
      console.error(error);
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleCancelAppointment = async (appointmentId?: string) => {
    if(!appointmentId) return;
    try {
      setCancelLoading(true);
      await axios.patch(`${import.meta.env.VITE_BASE_URL}/appointment/${appointmentId}/cancel`, {}, {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`
        }
      }).then((res: any) => {
        if (res.status === 200) {
          message.success("Appointment successfully cancelled!");
        }
      })
    } catch (error) {
      console.error(error);
    } finally {
      setCancelLoading(false);
    }
  }

  const columns = [
    {
      key: "_id",
      title: "Appointment Id",
      dataIndex: "_id"
    },
    {
      key: "pet",
      title: "Pet Name",
      dataIndex: "pet",
      render: (value: any) => value.name || "N/A"
    },
    {
      key: "veterinarian",
      title: "Veterinarian",
      dataIndex: "veterinarian",
      render: (value: any) => value.name || "N/A"
    },
    {
      key: "date",
      title: "Date",
      dataIndex: "date",
      render: (value: string) => dayjs(value).format("YYYY-MM-DD")
    },
    {
      key: "time",
      title: "Time",
      dataIndex: "time"
    },
    {
      key: "status",
      title: "Status",
      dataIndex: "status"
    },
    {
      key: "action",
      title: "Action(s)",
      render: (_: any, record: any) => (
        <div className="flex gap-x-2 w-full">
          <Button htmlType="button" variant="outlined" icon={<DeleteOutlined />} onClick={() => setCancelAppointmentId(record._id)} />
          <Button htmlType="button" danger icon={<DeleteOutlined />} onClick={() => setDeleteAppointmentId(record._id)} />
        </div>
      )
    }
  ];

  return (
    <div className='!space-y-4'>
      <div className="flex items-center">
        <Link to="/app/dashboard" className='!text-black'>Home</Link>
        <ChevronRight size={16} />
        <h2>Appointments</h2>
      </div>

      <div className="bg-white !p-3">
        <div className="flex justify-between items-center">
          <div className="flex">
            <Input placeholder='search by appointment number' />
          </div>

          <Button type="primary" htmlType='button' onClick={() => navigate("/app/appointments/book")}>
            Request Appointment
          </Button>
        </div>

        <Table
          className='!my-5'
          columns={columns}
          dataSource={appointments}
          pagination={false}
          loading={loading}
        />

        <Modal
          open={!!deleteAppointmentId}
          centered={true}
          title="Delete Appointment"
          okText="Yes, delete"
          onOk={() => handleDeleteAppointment(deleteAppointmentId)}
          onCancel={() => setDeleteAppointmentId(undefined)}
          onClose={() => setDeleteAppointmentId(undefined)}
          okButtonProps={{
            loading: deleteLoading
          }}
        >
          <div className='flex flex-col bg-gray-100 rounded p-3'>
            <h2>Are you sure to delete this appointment ? Once you delete this, cannot be undone.</h2>
          </div>
        </Modal>

        <Modal
          open={!!cancelAppointmentId}
          centered={true}
          title="Cancel Appointment"
          okText="Yes, cancel"
          onOk={() => handleCancelAppointment(cancelAppointmentId)}
          onCancel={() => setCancelAppointmentId(undefined)}
          onClose={() => setCancelAppointmentId(undefined)}
          okButtonProps={{
            loading: cancelLoading
          }}
        >
          <div className='flex flex-col bg-gray-100 rounded p-3'>
            <h2>Are you sure to cancel this appointment ? Once you cancel this, cannot be undone.</h2>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Appointments;