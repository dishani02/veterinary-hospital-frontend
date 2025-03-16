import { Button, Form, Input, Select } from 'antd';
import { ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const { Option } = Select;

const AddStaff = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log('Success:', values);
    // Add API call or state update logic here
    navigate('/admin/staff');
  };

  return (
    <div className='!space-y-4'>
      <div className="flex items-center">
        <Link to="/admin/dashboard" className='!text-black'>Home</Link>
        <ChevronRight size={16} />
        <Link to="/admin/staff" className='!text-black'>Staff</Link>
        <ChevronRight size={16} />
        <h2>Add New Staff</h2>
      </div>

      <div className="bg-white !p-6 rounded-md shadow-md">
        <Form layout="vertical" onFinish={onFinish}>

          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter name' }]}> 
            <Input placeholder="Enter Name" />
          </Form.Item>

          <Form.Item label="Address" name="address" rules={[{ required: true, message: 'Please enter address' }]}> 
            <Input placeholder="Enter Address" />
          </Form.Item>

          <Form.Item label="NIC" name="nic" rules={[{ required: true, message: 'Please enter NIC' }]}> 
            <Input placeholder="Enter NIC" />
          </Form.Item>

          <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}> 
            <Input placeholder="Enter Email" />
          </Form.Item>

          <Form.Item label="Phone Number" name="phoneNumber" rules={[{ required: true, message: 'Please enter phone number' }]}> 
            <Input placeholder="Enter Phone Number" />
          </Form.Item>

          <Form.Item label="Role" name="role" rules={[{ required: true, message: 'Please select role' }]}> 
            <Select placeholder="Select Role">
              <Option value="Veterinarien">Veterinariens</Option>
              <Option value="Lab Staff">Lab Staff</Option>
              <Option value="Clinic Staff">Clinic Staff</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <div className="flex space-x-4">
              <Button type="primary" htmlType="submit">Submit</Button>
              <Button type="default" onClick={() => navigate('/admin/staff')}>Cancel</Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddStaff;