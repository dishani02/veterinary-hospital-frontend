import { Button, Input, Table, Select } from 'antd';
import { ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const { Option } = Select;

const Staff = () => {
  const navigate = useNavigate();
  
  const columns = [
    {
      key: "staffId",
      title: "Staff ID",
      dataIndex: "staffId"
    },
    {
      key: "name",
      title: "Name",
      dataIndex: "name"
    },
    {
      key: "address",
      title: "Address",
      dataIndex: "address"
    },
    {
      key: "nic",
      title: "NIC",
      dataIndex: "nic"
    },
    {
      key: "email",
      title: "Email",
      dataIndex: "email"
    },
    {
      key: "phoneNumber",
      title: "Phone Number",
      dataIndex: "phoneNumber"
    },
    {
      key: "role",
      title: "Role",
      dataIndex: "role"
    },
    {
      key: "manage",
      title: "Manage",
      render: (_text: any, _record: any) => (
        <div className="flex space-x-2">
          <Button type="primary">Edit</Button>
          <Button type="default" danger>Remove</Button>
        </div>
      )
    }
  ];

  return (
    <div className='!space-y-4'>
      <div className="flex items-center">
        <Link to="/admin/dashboard" className='!text-black'>Home</Link>
        <ChevronRight size={16} />
        <h2>Staff</h2>
      </div>

      <div className="bg-white !p-3">
        <div className="flex justify-between items-center space-x-2">
          <Input placeholder='Search by staff ID or name' className="w-1/3" />

          <Select placeholder="Select Role" className="w-1/4">
            <Option value="Veterinarien">Veterinariens</Option>
            <Option value="Lab Staff">Lab Staff</Option>
            <Option value="Clinic Staff">Clinic Staff</Option>
          </Select>

          <Button type="primary" onClick={() => navigate("/admin/staff/add")}>
            Add New Staff
          </Button>
        </div>
      </div>
      
      <Table className='!my-5' columns={columns} />
    </div>
  );
};

export default Staff;
