import { Button, Input, Table } from 'antd';
import { ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

const Appointments = () => {
  const navigate = useNavigate();

  const columns = [
    {
      key: "appointmentId",
      title: "Appointment Id",
      dataIndex: "appointmentId"
    },
    {
      key: "petName",
      title: "Pet Name",
      dataIndex: "petName"
    },
    {
      key: "veterinarian",
      title: "Veterinarian",
      dataIndex: "veterinarian"
    },
    {
      key: "date",
      title: "Date",
      dataIndex: "date"
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
      title: "Action",
      render: (_: any, record: { appointmentId: any; }) => (
        <Button 
          type="primary" 
          htmlType="button" 
          className="w-24 px-6 py-2 text-lg" 
          onClick={() => handleCancel(record.appointmentId)}
        >
          Cancel
        </Button>
      )
    }
  ];

  const data = [
    {
      key: '1',
      appointmentId: '001',
      petName: 'SAM',
      veterinarian: 'Dr. Amali Dias',
      date: '2025-03-20',
      time: '04.00',
      status: 'Confirmed'
    },
    {
      key: '2',
      appointmentId: 'A002',
      petName: 'Luna',
      veterinarian: 'Dr. Roshan Perera',
      date: '2025-03-22',
      time: '05.00',
      status: 'Pending'
    },
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
          dataSource={data}
          pagination={false}
        />
      </div>
    </div>
  );
}

export default Appointments;


function handleCancel(appointmentId: any): void {
  throw new Error('Function not implemented.');
}

