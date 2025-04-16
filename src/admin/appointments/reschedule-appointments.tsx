import { Form, Input, DatePicker, Select, Button, TimePicker } from 'antd';
import { Link, useNavigate } from 'react-router';
import { ChevronRight } from 'lucide-react';
import moment from 'moment';

const RescheduleAppointment = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log('Form values:', values);
    navigate('/admin/Appointments');
  };

  return (
    <div className='!space-y-4'>
      <div className="flex items-center">
        <Link to="/admin/dashboard" className='!text-black'>Home</Link>
        <ChevronRight size={16} />
        <Link to="/admin/Appointments" className='!text-black'>Appointments</Link>
        <ChevronRight size={16} />
        <h2>Reschedule Appointments</h2>
      </div>

      <div className='!space-y-8'>
        <Form layout="vertical" className='bg-white !p-6 rounded-lg mx-12 my-8' onFinish={onFinish}>
          <Form.Item>
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Reschedule Appointment</h2>
          </Form.Item>

          <div className="grid grid-cols-2 gap-6">
            <Form.Item 
              label="Appointment ID" 
              name="appointmentId"
              rules={[{ required: true, message: "Appointment ID is required" }]}
            >
              <Input className='w-full' placeholder="Enter Appointment ID" readOnly />
            </Form.Item>

            <Form.Item 
              label="Pet Name" 
              name="petName"
              rules={[{ required: true, message: "Pet Name is required" }]}
            >
              <Input className='w-full' placeholder="Enter Pet Name" readOnly />
            </Form.Item>

            <Form.Item 
              label="Veterinarian" 
              name="veterinarian"
              rules={[{ required: true, message: "Please select a Veterinarian" }]}
            >
              <Select placeholder="Select a Veterinarian">
                <Select.Option value="drRoshan">Dr. Roshan Perera</Select.Option>
                <Select.Option value="drNimali">Dr. Nimali Senanayake</Select.Option>
                <Select.Option value="drSaman">Dr. Saman Wijesinghe</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Date"
              name="date"
              rules={[{ required: true, message: "Date is required" }]}
            >
              <DatePicker
                className='w-full'
                disabledDate={(current) => current && current < moment().startOf('day')}
              />
            </Form.Item>

            <Form.Item 
              label="Time" 
              name="time" 
              rules={[{ required: true, message: "Time is required" }]}
            >
              <TimePicker format="HH:mm" className='w-full' />
            </Form.Item>
          </div>

          <Form.Item>
            <div className="flex justify-start gap-2 mt-5">
              <Button type="primary" className='w-24' onClick={() => navigate(-1)}>Back</Button>
              <Button type="primary" htmlType="submit" className="w-24 px-6 py-2 text-lg">Update</Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RescheduleAppointment;