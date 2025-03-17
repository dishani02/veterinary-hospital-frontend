import { Button, DatePicker, Form, Input, Select, TimePicker } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';

const RequestNewService = () => {
  const [serviceType, setServiceType] = useState(null);

  return (
    <div className='!space-y-4'>
      <div className="flex items-center">
        <Link to="/app/dashboard" className='!text-black'>Home</Link>
        <ChevronRight size={16} />
        <Link to="/app/service-requests" className='!text-black'>Service Requests</Link>
        <ChevronRight size={16} />
        <h2>Request New Service</h2>
      </div>

      <Form layout="vertical" className='bg-white !p-3 rounded'>
        <div className="grid grid-cols-2 gap-2">
          <Form.Item
            label="Pet Owner Name"
            name="ownerName"
            rules={[{ required: true, message: "Owner name is required" }]}
          >
            <Input placeholder='Owner Name' />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[{ required: true, message: "Phone number is required" }]}
          >
            <Input placeholder='Phone Number' />
          </Form.Item>

          <Form.Item
            label="Pet Type"
            name="type"
            rules={[{ required: true, message: "Pet type is required" }]}
          >
            <Input placeholder='Pet Type' />
          </Form.Item>

          <Form.Item
            label="Pet Breed"
            name="breed"
            rules={[{ required: true, message: "Pet breed is required" }]}
          >
            <Input placeholder='Pet Breed' />
          </Form.Item>

          <Form.Item
            label="Service Type"
            name="serviceType"
            rules={[{ required: true, message: "Service type is required" }]}
          >
            <Select placeholder="Select Service Type" onChange={setServiceType}>
              <Select.Option value="petTaxi">Pet Taxi</Select.Option>
              <Select.Option value="petBoarding">Pet Boarding</Select.Option>
              <Select.Option value="homeVisit">Home Visit</Select.Option>
            </Select>
          </Form.Item>

          {serviceType === 'petTaxi' && (
            <>
              <Form.Item label="Pickup Address" name="pickupAddress" rules={[{ required: true, message: "Pickup address is required" }]}>
                <Input placeholder='Pickup Address' />
              </Form.Item>
              <Form.Item label="Drop Off Address" name="dropOffAddress" rules={[{ required: true, message: "Drop off address is required" }]}>
                <Input placeholder='Drop Off Address' />
              </Form.Item>
              <Form.Item label="Date" name="date" rules={[{ required: true, message: "Date is required" }]}>
                <DatePicker className='w-full' />
              </Form.Item>
              <Form.Item label="Time" name="time" rules={[{ required: true, message: "Time is required" }]}>
                <TimePicker format="HH:mm" className='w-full' />
              </Form.Item>
              <Form.Item label="Crate Required" name="crateRequired">
                <Select>
                  <Select.Option value="yes">Yes</Select.Option>
                  <Select.Option value="no">No</Select.Option>
                </Select>
              </Form.Item>
            </>
          )}

          {serviceType === 'petBoarding' && (
            <>
              <Form.Item label="Preferred Boarding Type" name="boardingType" rules={[{ required: true, message: "Boarding type is required" }]}>
                <Input placeholder='Boarding Type' />
              </Form.Item>
              <Form.Item label="Food Provided" name="foodProvided">
                <Select>
                  <Select.Option value="yes">Yes</Select.Option>
                  <Select.Option value="no">No</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Drop Off Date" name="dropOffDate" rules={[{ required: true, message: "Drop off date is required" }]}>
                <DatePicker className='w-full' />
              </Form.Item>
              <Form.Item label="Drop Off Time" name="dropOffTime" rules={[{ required: true, message: "Drop off time is required" }]}>
                <TimePicker format="HH:mm" className='w-full' />
              </Form.Item>
              <Form.Item label="Pickup Date" name="pickupDate" rules={[{ required: true, message: "Pickup date is required" }]}>
                <DatePicker className='w-full' />
              </Form.Item>
              <Form.Item label="Pickup Time" name="pickupTime" rules={[{ required: true, message: "Pickup time is required" }]}>
                <TimePicker format="HH:mm" className='w-full' />
              </Form.Item>
            </>
          )}

          {serviceType === 'homeVisit' && (
            <>
              <Form.Item label="Date" name="date" rules={[{ required: true, message: "Date is required" }]}>
                <DatePicker className='w-full' />
              </Form.Item>
              <Form.Item label="Time" name="time" rules={[{ required: true, message: "Time is required" }]}>
                <TimePicker format="HH:mm" className='w-full' />
              </Form.Item>
            </>
          )}
        </div>

        <Button type="primary" htmlType="submit" className='w-24'>Request</Button>
      </Form>
    </div>
  );
}

export default RequestNewService;
