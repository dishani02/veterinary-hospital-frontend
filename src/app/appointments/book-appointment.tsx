import { Button, DatePicker, Form, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import moment from 'moment';
import { useState } from 'react';

const BookAppointment = () => {
  const navigate = useNavigate();
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);


  const doctorTimeSlots: Record<string, string[]> = {
    drRoshan: ['09:00 a.m', '10:00 a.m', '11:00 a.m', '14:00 p.m', '16:00 p.m'],
    drNimali: ['08:30 a.m', '09:30 a.m', '11:00 a.m', '17:00 p.m'],
    drSaman: ['10:00 a.m', '12:00 p.m', '14:30 p.m', '19:00 p.m'],
  };

  const handleDoctorChange = (value: string) => {
    setSelectedDoctor(value);
    setAvailableTimes(doctorTimeSlots[value] || []);
  };

  const onFinish = (values: any) => {
    console.log('Form values:', values);
    navigate('/app/appointments/confirm');
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

          <Form.Item label="Pet" name="pet" rules={[{ required: true, message: "Pet is required" }]}>
            <Select placeholder="Select the Pet">
              <Select.Option value="cat">Cat</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Veterinarian" name="veterinarian" rules={[{ required: true, message: "Veterinarian is required" }]}>
            <Select placeholder="Select the Veterinarian" onChange={handleDoctorChange}>
              <Select.Option value="drRoshan">Dr. Roshan Perera</Select.Option>
              <Select.Option value="drNimali">Dr. Nimali Senanayake</Select.Option>
              <Select.Option value="drSaman">Dr. Saman Wijesinghe</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Date" name="date" rules={[{ required: true, message: "Date is required" }]}>
            <DatePicker className='w-full' disabledDate={(current) => current && current < moment().startOf('day')} />
          </Form.Item>

          <Form.Item label="Time" name="time" rules={[{ required: true, message: "Time is required" }]}>
            <Select placeholder="Select an available time" disabled={!selectedDoctor}>
              {availableTimes.map((time) => (
                <Select.Option key={time} value={time}>{time}</Select.Option>
              ))}
            </Select>
          </Form.Item>

          {/* Reason Selection - Dropdown with predefined reasons */}
          <Form.Item label="Reason" name="reason" rules={[{ required: true, message: "Reason is required" }]}>
            <Select placeholder="Select the Reason">
              <Select.Option value="grooming">Grooming</Select.Option>
              <Select.Option value="vaccination">Vaccination</Select.Option>
              <Select.Option value="newClient">Sick pet</Select.Option>
              <Select.Option value="sickPet">Sick Pet Exam</Select.Option>
              <Select.Option value="medicationRefill">Medication Refill</Select.Option>
            </Select>
          </Form.Item>

          <div className="col-span-2">
            <Form.Item label="Note" name="note">
              <TextArea placeholder='Note' />
            </Form.Item>
          </div>
          <Form.Item>
            <Button type="primary" htmlType="submit" className='w-35'>
              Book Appointment
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default BookAppointment;
