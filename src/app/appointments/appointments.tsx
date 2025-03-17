import { Button, Form, Input, Table } from 'antd'
import { ChevronRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router'

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
      dataIndex: "PetName"
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
          />
        
      </div>
    </div>
  )
}

export default Appointments