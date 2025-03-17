import { Form, Input, DatePicker, Select, TimePicker, Button } from 'antd';
import { Link, useNavigate } from 'react-router';
import { ChevronRight } from 'lucide-react';

const RescheduleAppointment = () => {
  const navigate = useNavigate();

  return (
    <div className='!space-y-4'>
      <div className="flex items-center">
        <Link to="/app/dashboard" className='!text-black'>Home</Link>
        <ChevronRight size={16} />
        <h2>Appointments</h2>
        <ChevronRight size={16} />
        <h2>Reschedule Appointments</h2>
      </div>

      <div className='!space-y-8'>
        <Form layout="vertical" className='bg-white !p-6 rounded-lg mx-12 my-8'>
          <Form.Item>
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Reschedule Appointment</h2>
          </Form.Item>

          <div className="grid grid-cols-2 gap-6">
            <Form.Item label="Appointment ID" name="appointmentId">
              <Input className='w-full' placeholder="Enter Appointment ID" readOnly />
            </Form.Item>

            <Form.Item label="Pet Name" name="petName">
              <Input className='w-full' placeholder="Enter Pet Name" readOnly />
            </Form.Item>

            <Form.Item label="Veterinarian" name="veterinarian">
              <Select placeholder="Select a Veterinarian">
                <Select.Option value="Dr.Roshan Perera">Dr.Roshan Perera</Select.Option>
                <Select.Option value="Dr.Amali Perera">Dr.Amali Perera</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Date" name="date">
              <DatePicker className='w-full' placeholder="Select a Date" disabled />
            </Form.Item>

            <Form.Item label="Time" name="time">
              <TimePicker format="HH:mm" className='w-full' placeholder="Select a Time" disabled />
            </Form.Item>
          </div>

          <Form.Item>
            <div className="flex justify-start gap-2 mt-5">
              <Button type="default" className="w-24 bg-gray-300 text-black hover:bg-gray-400" onClick={() => navigate(-1)}>Back</Button>
              <Button type="primary" htmlType="submit" className="w-24 px-6 py-2 text-lg">Save</Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RescheduleAppointment;
