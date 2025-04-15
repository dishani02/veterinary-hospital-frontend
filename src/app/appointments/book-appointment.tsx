import { Button, DatePicker, Form, message, Select, TimePicker } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppContext } from '../../providers/context-provider';
import dayjs from 'dayjs';

const BookAppointment = () => {
  const navigate = useNavigate();
  const { user } = useAppContext();

  const [loading, setLoading] = useState<boolean>(false);
  const [doctors, setDoctors] = useState<any[]>([]);
  const [pets, setPets] = useState<any[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    const getDoctors = async () => {
      await axios.get(`${import.meta.env.VITE_BASE_URL}/doctor`, {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`
        }
      }).then((res) => {
        setDoctors(res.data);
      }).catch((err) => {
        console.error(err);
      });
    }

    const getPets = async () => {
      await axios.get(`${import.meta.env.VITE_BASE_URL}/pets`, {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`
        }
      }).then((res) => {
        setPets(res.data.payload);
      }).catch((err) => {
        console.error(err);
      });
    };

    getDoctors();
    getPets();

    return () => {
      controller.abort();
    }
  }, []);

  const onFinish = async (values: any) => {
    if (values.date) values.date = dayjs(values.date).format("YYYY-MM-DD");
    if (values.time) values.time = dayjs(values.time).format("HH:mm");

    try {
      setLoading(true);
      await axios.post(`${import.meta.env.VITE_BASE_URL}/appointment`, values, {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`
        }
      }).then((res: any) => {
        if (res.status === 201) {
          message.success("Appointment successfully created!");
          navigate("/app/appointments/confirm", { replace: true });
        }
      }).catch((err) => {
        console.error(err);
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
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
            name="petId"
            rules={[{ required: true, message: "Pet is required" }]}>
            <Select placeholder="Select the Pet">
              {pets && pets.map((pet: any) => (
                <Select.Option key={pet._id} value={pet._id}>{pet.name}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Doctor"
            name="doctorId"
            rules={[{ required: true, message: "Doctor is required" }]}>
            <Select placeholder="Select the Doctor">
              {doctors && doctors.map((doctor: any) => (
                <Select.Option key={doctor._id} value={doctor._id}>{doctor.name}</Select.Option>
              ))}
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
  
          <Button type="primary" htmlType="submit" loading={loading}>
            Book Appointment
          </Button>
    
      </Form>
    </div>
  );
};

export default BookAppointment;
