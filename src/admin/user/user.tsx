import { Button, Input, Table } from 'antd';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

const Users = () => {
  const columns = [
    {
      key: "userId",
      title: "User ID",
      dataIndex: "userId"
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
      key: "delete",
      title: "Delete",
      render: (text: any, record: any) => (
        <Button type="default" danger>Delete</Button>
      )
    }
  ];

  return (
    <div className='!space-y-4'>
      <div className="flex items-center">
        <Link to="/admin/dashboard" className='!text-black'>Home</Link>
        <ChevronRight size={16} />
        <h2>Users</h2>
      </div>

      <div className="bg-white !p-3">
        <div className="flex justify-between items-center">
          <Input placeholder='Search by user ID or name' />
        </div>
      </div>

      <Table className='!my-5' columns={columns} />
    </div>
  );
};

export default Users;