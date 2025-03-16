import { Button, Form, Input, Select, message } from 'antd';
import { ChevronRight } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const { Option } = Select;

const EditStaff = () => {
  const navigate = useNavigate();
  const { staffId } = useParams();
  const [staff, setStaff] = useState<any>(null);

  useEffect(() => {

    const fetchStaff = async () => {

      const mockData = {
        staffId: staffId,
        name: "",
        role: "",
      };
      setStaff(mockData);
    };
    fetchStaff();
  }, [staffId]);

  const onFinish = (values: any) => {
    console.log("Updated Staff Data:", values);
    message.success("Staff role updated successfully!");
    navigate("/admin/staff");
  };

  if (!staff) return <p>Loading...</p>;

  return (
    <div className='!space-y-4'>
      <div className="flex items-center">
        <Link to="/admin/dashboard" className='!text-black'>Home</Link>
        <ChevronRight size={16} />
        <Link to="/admin/staff" className='!text-black'>Staff</Link>
        <ChevronRight size={16} />
        <h2>Edit Staff</h2>
      </div>

      <div className="bg-white p-5 rounded-lg shadow-md">
        <h3 className="mb-4">Edit Staff Role</h3>
        <Form layout="vertical" onFinish={onFinish} initialValues={staff}>
          <Form.Item label="Staff Name">
            <Input value={staff.name} disabled />
          </Form.Item>
          
          <Form.Item name="role" label="Role" rules={[{ required: true, message: 'Please select a role!' }]}> 
            <Select placeholder="Select Role">
              <Option value="Veterinarian">Veterinarian</Option>
              <Option value="Lab Staff">Lab Staff</Option>
              <Option value="Clinic Staff">Clinic Staff</Option>
            </Select>
          </Form.Item>
          
          <Form.Item>
            <Button type="primary" htmlType="submit">Update Role</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default EditStaff;