import { Button, Input, Table, Select } from 'antd';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

const { Option } = Select;

const Services = () => {
  const columns = [
    {
      key: "serviceId",
      title: "Service ID",
      dataIndex: "serviceId"
    },
    {
      key: "petOwner",
      title: "Pet Owner",
      dataIndex: "petOwner"
    },
    {
      key: "serviceType",
      title: "Service Type",
      dataIndex: "serviceType"
    },
    {
      key: "date",
      title: "Date",
      dataIndex: "date"
    },
    {
      key: "status",
      title: "Status",
      dataIndex: "status"
    }
  ];

  return (
    <div className='!space-y-4'>
      <div className="flex items-center">
        <Link to="/app/dashboard" className='!text-black'>Home</Link>
        <ChevronRight size={16} />
        <h2>Services</h2>
      </div>

      <div className="bg-white !p-3">
        <div className="flex justify-between items-center">
          <div className="flex">
            <Input placeholder='Search by service ID' />
            <Select placeholder="Filter by Service Type" className='ml-2'>
              <Option value="Pet Taxi">Pet Taxi</Option>
              <Option value="Pet Boarding">Pet Boarding</Option>
              <Option value="Home Visit">Home Visit</Option>
            </Select>
          </div>
        </div>
      </div>

      <Table className='!my-5' columns={columns} />
    </div>
  );
};

export default Services;
