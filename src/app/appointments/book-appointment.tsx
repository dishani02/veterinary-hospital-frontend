import { Button, DatePicker, Form, Select, TimePicker } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';

const BookAppointment = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log("Form Submitted:", values);
    navigate("/app/appointments/confirm");
  };

  return (
    <div className='!space-y-4'>
      <div className="flex items-center">
        <Link to="/app/dashboard" className='!text-black'>Home</Link>
        <ChevronRight size={16} />
        <Link to="/app/appointments" className='!text-black'>Appointments</Link>
        <ChevronRight size={16} />
        <h2>Book</h2>
      </div>

      <Form layout="vertical" className='bg-white !p-3 rounded' onFinish={onFinish}>
        <div className="grid grid-cols-2 gap-2">
          <Form.Item
            label="Pet"
            name="pet"
            rules={[{ required: true, message: "Pet is required" }]}>
            <Select placeholder="Select the Pet">
              <Select.Option value="cat"> Cat</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Doctor"
            name="doctor"
            rules={[{ required: true, message: "Doctor is required" }]}>
            <Select placeholder="Select the Doctor">
              <Select.Option value="Dr.Roshan Perera">Dr. Roshan Perera</Select.Option>
              <Select.Option value="Dr.Amali Perera">Dr. Amali Perera</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: "Date is required" }]}>
            <DatePicker
              className='w-full'
              disabledDate={(current) => current && current < moment().startOf('day')}
            />
          </Form.Item>
          <Form.Item
            label="Time"
            name="time"
            rules={[{ required: true, message: "Time is required" }]}>
            <TimePicker format="HH:mm" className='w-full' />
          </Form.Item>
          <Form.Item
            label="Reason"
            name="reason"
            rules={[{ required: true, message: "Reason is required" }]}>
            <Select placeholder="Select the Reason">
              <Select.Option value="Grooming">Grooming</Select.Option>
              <Select.Option value="Vaccination">Vaccination</Select.Option>
              <Select.Option value="Sick Pet">Sick pet</Select.Option>
              <Select.Option value="Medication Refill">Medication Refill</Select.Option>
              <Select.Option value="Other">Other</Select.Option>
            </Select>
          </Form.Item>
          <div className="col-span-2">
            <Form.Item label="Note" name="note">
              <TextArea placeholder="Note" />
            </Form.Item>
          </div>
        </div>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Book Appointment
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BookAppointment;
