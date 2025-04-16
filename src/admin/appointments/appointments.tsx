// import { Button, Input, Table, Select } from 'antd';
// import { ChevronRight, ListOrdered } from 'lucide-react';
// import { DeleteOutlined, CheckCircleOutlined } from '@ant-design/icons';
// import { Link, useNavigate } from 'react-router';

// const { Option } = Select;

// const Appointments = () => {
//   const navigate = useNavigate();

//   const columns:any = [
//     {
//       key: "appointmentId",
//       title: "Appointment Id",
//       dataIndex: "appointmentId"
//     },
//     {
//       key: "petName",
//       title: "Pet Name",
//       dataIndex: "petName"
//     },
//     {
//       key: "veterinarian",
//       title: "Veterinarian",
//       dataIndex: "veterinarian"
//     },
//     {
//       key: "date",
//       title: "Date",
//       dataIndex: "date"
//     },
//     {
//       key: "time",
//       title: "Time",
//       dataIndex: "time"
//     },
//     {
//       key: "status",
//       title: "Status",
//       dataIndex: "status",
//     },
//     {
//       key: "Action",
//       title: "Action(s)",
//       dataIndex: "Action",
//       align: "center",
//       render: () => {
//         return (
//           <div className='flex justify-center'>
//             <Button
//               type="text"
//               htmlType="button"
//               onClick={() => navigate("/admin/appointments/view-appointment")}
//               style={{ marginRight: '10px' }}
//             >
//               <ListOrdered />
//             </Button>
//             <CheckCircleOutlined
//               style={{ color: 'green', fontSize: '20px', cursor: 'pointer', marginRight: '20px' }}
//             />
//             <DeleteOutlined
//               style={{ color: 'red', fontSize: '20px', cursor: 'pointer', marginLeft: '5px' }}
//             />
//           </div>
//         );
//       }
//     }
//   ];

//   const datasource = [
//     {
//       appointmentId: "001",
//       petName: "SAM",
//       veterinarian: "Dr.Roshan Perera",
//       date: "20.04.2025",
//       time: "04:00",
//       status: "Pending"
//     },
//   ];

//   return (
//     <div className='!space-y-4'>
//       <div className="flex items-center">
//         <Link to="/admin/dashboard" className='!text-black'>Home</Link>
//         <ChevronRight size={16} />
//         <h2>Appointments</h2>
//       </div>

//       <div className="bg-white !p-3">
//         <div className="flex justify-between items-center">
//           <div className="flex gap-3">
//             <Input placeholder="search by appointment number" />
//             <Select placeholder="sort by status">
//               <Option value="Pending">Pending</Option>
//               <Option value="Approved">Approved</Option>
//               <Option value="Canceled">Canceled</Option>
//             </Select>
//           </div>
//         </div>
//       </div>

//       <Table
//         className='!my-5'
//         columns={columns}
//         dataSource={datasource}
//         pagination={false}
//       />
//     </div>
//   );
// }

// export default Appointments;


import { Button, Input, message, Table } from 'antd';
import { ChevronRight, ListOrdered } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { DeleteOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppContext } from '../../providers/context-provider';
import dayjs from 'dayjs';

const Appointments = () => {
  const navigate = useNavigate();
  const { user } = useAppContext();

  const [loading, setLoading] = useState<boolean>(false);
  const [appointments, setAppointments] = useState<any[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    const getAppointments = async () => {
      setLoading(true);
      await axios.get(`${import.meta.env.VITE_BASE_URL}/appointment/appointment-history`, {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`
        }
      }).then((res) => {
        setAppointments(res.data.payload);
      }).catch((err) => {
        console.log(err);
      }).finally(() => {
        setLoading(false);
      })
    };

    getAppointments();

    return () => {
      controller.abort();
    }
  }, []);

  const handleDeleteAppointment = async (appointmentId: string) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/appointment/${appointmentId}`, {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`
        }
      }).then((res: any) => {
        if (res.status === 200) {
          message.success("Appointment successfully deleted!");
        }
      }).catch((err) => {
        console.error(err);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelAppointment = async (appointmentId: string) => {
    try {
      await axios.patch(`${import.meta.env.VITE_BASE_URL}/appointment/${appointmentId}/cancel`, {}, {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`
        }
      }).then((res: any) => {
        if (res.status === 200) {
          message.success("Appointment successfully cancelled!");
        }
      }).catch((err) => {
        console.error(err);
      });
    } catch (error) {
      console.error(error);
    }
  }

  const columns = [
    {
      key: "_id",
      title: "Appointment Id",
      dataIndex: "_id"
    },
    {
      key: "pet",
      title: "Pet Name",
      dataIndex: "pet",
      render: (value: any) => value.name || "N/A"
    },
    {
      key: "veterinarian",
      title: "Veterinarian",
      dataIndex: "veterinarian",
      render: (value: any) => value.name || "N/A"
    },
    {
      key: "date",
      title: "Date",
      dataIndex: "date",
      render: (value: string) => dayjs(value).format("YYYY-MM-DD")
    },
    {
      key: "time",
      title: "Time",
      dataIndex: "time"
    },
    {
      key: "status",
      title: "Status",
      dataIndex: "status"
    },
    {
      key: "action",
      title: "Action(s)",
      render: (_: any, record: any) => (
        <div className="flex gap-4 w-full">
          <Button htmlType="button" variant="outlined" icon={<DeleteOutlined />} onClick={() => handleCancelAppointment(record._id)} />
          <Button htmlType="button" danger icon={<DeleteOutlined />} onClick={() => handleDeleteAppointment(record._id)} />
          <Button
           type="text"
             htmlType="button"
            onClick={() => navigate(`/admin/appointments/view-appointment/${record._id}`)}
             style={{ marginRight: '10px' }}
           >
             <ListOrdered />
          </Button>
        </div>
      )
    }
  ];

  return (
    <div className='!space-y-4'>
      <div className="flex items-center">
        <Link to="/app/dashboard" className='!text-black'>Home</Link>
        <ChevronRight size={16} />
        <h2>Appointments</h2>
      </div>

      <div className="bg-white !p-3">
        <div className="flex justify-between items-center">
          <div className="flex">
            <Input placeholder='search by appointment number' />
          </div>

          <Button type="primary" htmlType='button' onClick={() => navigate("/app/appointments/book")}>
            Request Appointment
          </Button>
        </div>

        <Table
          className='!my-5'
          columns={columns}
          dataSource={appointments}
          pagination={false}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default Appointments;

function handleCancel(appointmentId: any): void {
  throw new Error('Function not implemented.');
}

// Function to handle the delete action
function handleDelete(appointmentId: any): void {
  console.log(`Deleting appointment with ID: ${appointmentId}`);
}
