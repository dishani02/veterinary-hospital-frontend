import { Button, Form, Input, Select, Upload } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { UploadOutlined } from '@ant-design/icons';
import { ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const { Option } = Select;

const AddPet = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log('Received values:', values);
    navigate('/app/pets');
  };

  return (
    <div className='!space-y-4'>
      <div className="flex items-center">
        <Link to="/app/dashboard" className='!text-black'>Home</Link>
        <ChevronRight size={16} />
        <Link to="/app/pets" className='!text-black'>Pets</Link>
        <ChevronRight size={16} />
        <h2>Add</h2>
      </div>

      <Form layout="vertical" className='bg-white !p-3 rounded' onFinish={onFinish}>
        <div className="grid grid-cols-2 gap-2">
          <Form.Item name="name" label="Pet Name" rules={[{ required: true, message: 'Pet name is required' }]}>
            <Input placeholder="Enter pet name" />
          </Form.Item>

          <Form.Item name="gender" label="Gender" rules={[{ required: true, message: 'Gender is required' }]}>
            <Select placeholder="Select gender">
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
            </Select>
          </Form.Item>

          <Form.Item name="type" label="Type" rules={[{ required: true, message: 'Pet type is required' }]}>
            <Input placeholder="Enter pet type (e.g., Dog, Cat)" />
          </Form.Item>

          <Form.Item name="breed" label="Breed" rules={[{ required: true, message: 'Breed is required' }]}>
            <Input placeholder="Enter pet breed" />
          </Form.Item>

          <Form.Item name="age" label="Age" rules={[{ required: true, message: 'Age is required' }]}>
            <Input type="number" placeholder="Enter pet age" />
          </Form.Item>

          <div className="col-span-2">
            <Form.Item name="note" label="Note">
              <TextArea placeholder='Additional details' />
            </Form.Item>
          </div>

          <div className="col-span-2">
            <Form.Item name="image" label="Pet Image">
              <Upload beforeUpload={() => false} listType="picture">
                <Button icon={<UploadOutlined />}>Upload Image</Button>
              </Upload>
            </Form.Item>
          </div>

          <Button type="primary" htmlType="submit" className='w-24'>Add</Button>
        </div>
      </Form>
    </div>
  );
};

export default AddPet;
