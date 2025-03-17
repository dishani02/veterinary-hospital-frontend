import { Button, Form, Input, Table } from 'antd';
import { ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router';


const ServiceRequests = () => {
  const navigate = useNavigate();

  const columns = [
    {
      key: "serviceId",
      title: "Service ID",
      dataIndex: "serviceId"
    },
    {
      key: "petName",
      title: "Pet Name",
      dataIndex: "petName"
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
      key: "reason",
      title: "Reason",
      dataIndex: "reason"
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
        <h2>Service Requests</h2>
      </div>

      <div className="bg-white !p-3">
        <div className="flex justify-between items-center">
          <div className="flex">
            <Input placeholder='Search by service ID' />
          </div>

          <Button type="primary" htmlType='button' onClick={() => navigate("/app/services/new")}> 
            Request Service
          </Button>
        </div>

        <Table
          className='!my-5'
          columns={columns}
        />
      </div>
    </div>
  );
};

export default ServiceRequests;
