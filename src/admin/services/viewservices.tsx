import { Button, Form, Input, Table } from 'antd'
import { ChevronRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router'

const Services = () => {
  const navigate = useNavigate();

  const columns = [
    {
      key: "serviceId",
      title: "Service Id",
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
  ]
  
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
            <h2>Available Services</h2>
          </div>
        </div>

        <Table
          className='!my-5'
          columns={columns}
        />
      </div>
    </div>
  )
}

export default Services
