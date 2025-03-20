import { Button, Input, Table, Select } from 'antd';
import { ChevronRight, ListOrdered } from 'lucide-react';
import { DeleteOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router';

const { Option } = Select;

const Appointments = () => {
  const navigate = useNavigate();

  const columns:any = [
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
      dataIndex: "status",
    },
    {
      key: "Action",
      title: "Action(s)",
      dataIndex: "Action",
      align: "center",
      render: () => {
        return (
          <div className='flex justify-center'>
            <Button
              type="text"
              htmlType="button"
              onClick={() => navigate("/admin/appointments/view-appointment")}
              style={{ marginRight: '10px' }}
            >
              <ListOrdered />
            </Button>
            <CheckCircleOutlined
              style={{ color: 'green', fontSize: '20px', cursor: 'pointer', marginRight: '20px' }}
            />
            <DeleteOutlined
              style={{ color: 'red', fontSize: '20px', cursor: 'pointer', marginLeft: '5px' }}
            />
          </div>
        );
      }
    }
  ];

  const datasource = [
    {
      appointmentId: "001",
      petName: "SAM",
      veterinarian: "Dr.Roshan Perera",
      date: "20.04.2025",
      time: "04:00",
      status: "Pending"
    },
  ];

  return (
    <div className='!space-y-4'>
      <div className="flex items-center">
        <Link to="/admin/dashboard" className='!text-black'>Home</Link>
        <ChevronRight size={16} />
        <h2>Appointments</h2>
      </div>

      <div className="bg-white !p-3">
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <Input placeholder="search by appointment number" />
            <Select placeholder="sort by status">
              <Option value="Pending">Pending</Option>
              <Option value="Approved">Approved</Option>
              <Option value="Canceled">Canceled</Option>
            </Select>
          </div>
        </div>
      </div>

      <Table
        className='!my-5'
        columns={columns}
        dataSource={datasource}
        pagination={false}
      />
    </div>
  );
}

export default Appointments;
