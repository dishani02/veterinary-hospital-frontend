import { Button, DatePicker, Form, Input, Select, TimePicker } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router'


const BookAppointment = () => {
  return (
    <div className='!space-y-4'>
      <div className="flex items-center">
        <Link to="/app/dashboard" className='!text-black'>Home</Link>
        <ChevronRight size={16} />
        <Link to="/app/appointments" className='!text-black'>Appointments</Link>
        <ChevronRight size={16} />
        <h2>Book</h2>
      </div>

      <Form layout="vertical" className='bg-white !p-3 rounded'>
        <div className="grid grid-cols-2 gap-2">
          <Form.Item
            label="Pet"
            name="pet"
            rules={[
              {
                required: true,
                message: "Pet is required"
              }
            ]}
          >
            <Select placeholder="Select the Pet" />
          </Form.Item>

          <Form.Item
            label="Doctor"
            name="doctor"
            rules={[
              {
                required: true,
                message: "Date is required"
              }
            ]}
          >
            <Select placeholder="Select the Doctor" />
          </Form.Item>

          <Form.Item
            label="Date"
            name="date"
             rules={[
             {
                required: true,
                message: "Date is required"
              }
            ]}
>
            <DatePicker 
              className='w-full' 
              disabledDate={(current) => current && current < moment().endOf('day')} 
          />
        </Form.Item>


          <Form.Item
            label="Time"
            name="time"
            rules={[
              {
                required: true,
                message: "Time is required"
              }
            ]}
          >
            <TimePicker format="HH:mm" className='w-full' />
          </Form.Item>

          <Form.Item
            label="Reason"
            name="reason"
            rules={[
              {
                required: true,
                message: "Reason is required"
              }
            ]}
          >
            <Input placeholder='Reason' />
          </Form.Item>

          <div className="col-span-2">
            <Form.Item
              label="Note"
              name="note"
            >
              <TextArea placeholder='Note' />
            </Form.Item>
          </div>

          <Button type="primary" htmlType="submit" className='w-24'>Book</Button>
        </div>
      </Form>
    </div>
  )
}

export default BookAppointment