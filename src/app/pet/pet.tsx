import { Button, Table, Input } from 'antd';
import { ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

const Pet = () => {
  const navigate = useNavigate();

  const columns = [
    {
      key: "petId",
      title: "Pet ID",
      dataIndex: "petId"
    },
    {
      key: "name",
      title: "Name",
      dataIndex: "name"
    },
    {
      key: "gender",
      title: "Gender",
      dataIndex: "gender"
    },
    {
      key: "type",
      title: "Type",
      dataIndex: "type"
    },
    {
      key: "breed",
      title: "Breed",
      dataIndex: "breed"
    },
    {
      key: "age",
      title: "Age",
      dataIndex: "age"
    },
    {
      key: "image",
      title: "Image",
      dataIndex: "image",
      render: (text: string | undefined) => (
        <img 
          src={text || "/placeholder-image.png"} 
          alt="Pet" 
          width={50} 
          height={50} 
          onError={(e) => { e.currentTarget.src = "/placeholder-image.png"; }}
        />
      )
    },
    {
      key: "medicalHistory",
      title: "Medical History",
      dataIndex: "medicalHistory",
      render: (_: any, record: any) => (
        <Button type="link" onClick={() => navigate(`/app/pet/${record.petId}/medical-history`)}>
          View History
        </Button>
      )
    },
    {
      key: "action",
      title: "Action",
      dataIndex: "action"
    }
  ];

  return (
    <div className='!space-y-4'>
      <div className="flex items-center">
        <Link to="/app/dashboard" className='!text-black'>Home</Link>
        <ChevronRight size={16} />
        <h2>Pets</h2>
      </div>

      <div className="bg-white !p-3">
        <div className="flex justify-between items-center">
          <Input placeholder='Search by pet name or ID' />
          <Button type="primary" htmlType='button' onClick={() => navigate("/app/pet/add")}>Add New Pet</Button>
        </div>

        <Table className='!my-5' columns={columns} />
      </div>
    </div>
  );
};

export default Pet;