import { Button, Form, Input, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { ChevronRight } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const EditPet = () => {
  const navigate = useNavigate();
  const { petId } = useParams();
  const [form] = Form.useForm();
  const [pet, setPet] = useState<{ name: string; image?: string } | null>(null);

  useEffect(() => {
    const fetchPet = async () => {
      const petData = { name: 'Buddy', image: '/placeholder-image.png' }; 
      setPet(petData);
      form.setFieldsValue(petData);
    };
    
    fetchPet();
  }, [petId]);

  const onFinish = (values: any) => {
    console.log('Updated values:', values);
    navigate('/app/pets');
  };

  return (
    <div className='!space-y-4'>
      <div className="flex items-center">
        <Link to="/app/dashboard" className='!text-black'>Home</Link>
        <ChevronRight size={16} />
        <Link to="/app/pets" className='!text-black'>Pets</Link>
        <ChevronRight size={16} />
        <h2>Edit Pet</h2>
      </div>

      <Form form={form} layout="vertical" className='bg-white !p-3 rounded' onFinish={onFinish}>
        <Form.Item name="name" label="Pet Name" rules={[{ required: true, message: 'Pet name is required' }]}>
          <Input placeholder="Enter pet name" />
        </Form.Item>

        <Form.Item name="image" label="Pet Image">
          <Upload 
            beforeUpload={() => false} 
            listType="picture"
            defaultFileList={pet?.image ? [{ uid: '-1', name: 'pet-image', url: pet.image }] : []}
          >
            <Button icon={<UploadOutlined />}>Upload Image</Button>
          </Upload>
        </Form.Item>

        <Button type="primary" htmlType="submit" className='w-24'>Save</Button>
      </Form>
    </div>
  );
};

export default EditPet;
