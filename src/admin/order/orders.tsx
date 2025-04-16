// import { Button, Form, Input, Table, Select } from 'antd';
// import { ChevronRight, ListOrdered, Trash2 } from 'lucide-react';
// import { Link, useNavigate } from 'react-router';


// const { Option } = Select;

// const Orders = () => {
//   const navigate = useNavigate();

//   const columns = [
//     {
//       key: "orderId",
//       title: "Order Id",
//       dataIndex: "orderId"
//     },
//     {
//       key: "date",
//       title: "Date",
//       dataIndex: "date"
//     },
//     {
//       key: "customer",
//       title: "Customer",
//       dataIndex: "customer"
//     },
//     {
//       key: "items",
//       title: "Items",
//       dataIndex: "items"
//     },
//     {
//       key: "price",
//       title: "Price",
//       dataIndex: "price"
//     },
//     {
//       key: "status",
//       title: "Status",
//       dataIndex: "status",
//     },
//     {
//       key: "action",
//       title: "Action(s)",
//       dataIndex: "action",
//       width: "20%",
//       render: (_: any, record: { orderId: any; }) => (
//         <div className="flex gap-8 w-full">
//           <Button
//             type="primary"
//             htmlType="button"
//             className="w-24 px-6 py-2 text-lg"
//             //onClick={() => handleCancel(record.orderId)}
//           >
//             Cancel
//           </Button>
//           <Button
//               type="text"
//               htmlType="button"
//               onClick={() => navigate("/admin/order/view-order")}
//               style={{ marginRight: '10px' }}
//             >
//               <ListOrdered />
//             </Button>
//           <Trash2
//             style={{ fontSize: 18, color: 'red', cursor: 'pointer' }}
//             //onClick={() => handleDelete(record.orderId)}
//           />
//         </div>

//       )
//     }
//   ];

//   const dataSource: any = [
//     {
//       orderId: "OR-1078",
//       date: "25-02-2025",
//       customer: "Shamal Wije",
//       items: "3",
//       price: "Rs.900.00",
//       status: "pending"

//     },
//     {
//       orderId: "OR-1078",
//       date: "25-02-2025",
//       customer: "Shamal Wije",
//       items: "3",
//       price: "Rs.900.00",
//       status: "pending"

//     },
//     {
//       orderId: "OR-1078",
//       date: "25-02-2025",
//       customer: "Shamal Wije",
//       items: "3",
//       price: "Rs.900.00",
//       status: "pending"

//     },
//     {
//       orderId: "OR-1078",
//       date: "25-02-2025",
//       customer: "Shamal Wije",
//       items: "3",
//       price: "Rs.900.00",
//       status: "pending"

//     },
//   ]


//   return (
//     <div className='!space-y-4'>
//       <div className="flex items-center">
//         <Link to="/app/dashboard" className='!text-black'>Home</Link>
//         <ChevronRight size={16} />
//         <h2>Orders</h2>
//       </div>

//       <h2 className='text-xl font-medium !p-3'>Product Management</h2>

//       <div className="flex justify-right  gap-6 !p-3">

//         <div
//           className="w-64 h-30 bg-white text-black flex justify-center items-center text-xl 
//         font-bold rounded-2xl shadow-lg cursor-pointer hover:bg-gray-200 transition-all border border-gray-300"
//           onClick={() => navigate("/admin/products")}
//         >
//           Products
//         </div>
//         <div
//           className="w-64 h-30 bg-white text-black flex justify-center items-center text-xl 
//         font-bold rounded-2xl shadow-lg cursor-pointer hover:bg-gray-200 transition-all border border-gray-300"
//           onClick={() => navigate("/admin/category")}
//         >
//           Category
//         </div>
//       </div>

//       <h2 className="text-xl font-medium whitespace-nowrap !p-2 ">Order Management</h2>

//       <div className="flex justify-between items-center ">
//         <h2 className="text-lg whitespace-nowrap gap-5">Order List</h2>
//         <div className="flex gap-4">
//           <Input
//             placeholder="Search by appointment number"
//             className="border p-2 rounded-md w-64"
//           />
//           <Select className="border p-2 rounded-md w-40">
//             <option value="Pending">Pending</option>
//             <option value="Canceled">Canceled</option>
//             <option value="Canceled">Completed</option>

//           </Select>
//         </div>
//       </div>

//       <Table className='!my-5'
//         columns={columns}
//         dataSource={dataSource} />
//     </div>

//   );
// }

// export default Orders;
// function handleDelete(appointmentId: any): void {
//   throw new Error('Function not implemented.');
// }

// function handleCancel(appointmentId: any): void {
//   throw new Error('Function not implemented.');
// }

import { Button, Input, message, Table, Select } from 'antd';
import { ChevronRight, ListOrdered, Trash2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import { useAppContext } from '../../providers/context-provider';

const { Option } = Select;

const Orders = () => {
  const navigate = useNavigate();
  const { user } = useAppContext();

  const [loading, setLoading] = useState<boolean>(false);
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    const getOrders = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/order/order-history`, {
          headers: {
            Authorization: `Bearer ${user?.accessToken}`,
          },
          signal: controller.signal,
        });
        setOrders(res.data.payload || []);
      } catch (err) {
        console.error(err);
        message.error('Failed to load order history.');
      } finally {
        setLoading(false);
      }
    };

    getOrders();

    return () => controller.abort();
  }, [user]);

  const handleCancelOrder = async (orderId: string) => {
    try {
      const res = await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/order/${orderId}/cancel`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user?.accessToken}`,
          },
        }
      );
      if (res.status === 200) {
        message.success('Order successfully cancelled!');
        setOrders((prev) =>
          prev.map((o) => (o._id === orderId ? { ...o, status: 'cancelled' } : o))
        );
      }
    } catch (error) {
      console.error(error);
      message.error('Failed to cancel the order.');
    }
  };

  const handleDeleteOrder = async (orderId: string) => {
    try {
      const res = await axios.delete(`${import.meta.env.VITE_BASE_URL}/order/${orderId}`, {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
        },
      });
      if (res.status === 200) {
        message.success('Order successfully deleted!');
        setOrders((prev) => prev.filter((o) => o._id !== orderId));
      }
    } catch (error) {
      console.error(error);
      message.error('Failed to delete the order.');
    }
  };

  const columns = [
    {
      key: '_id',
      title: 'Order Id',
      dataIndex: '_id',
    },
    {
      key: 'date',
      title: 'Date',
      dataIndex: 'date',
      render: (value: string) => (value ? dayjs(value).format('YYYY-MM-DD') : 'N/A'),
    },
    {
      key: 'customer',
      title: 'Customer',
      dataIndex: 'customer',
      render: (value: any) => value?.name,
    },
    {
      key: 'items',
      title: 'Items',
      dataIndex: 'items',
      render: (items: any[]) => items?.length || 0,
    },
    {
      key: 'price',
      title: 'Price',
      dataIndex: 'price', // ✅ Fixed from 'total' to 'price'
      render: (value: number) => (value ? `Rs.${value.toFixed(2)}` : 'N/A'),
    },
    {
      key: 'status',
      title: 'Status',
      dataIndex: 'status',
    },
    {
      key: 'action',
      title: 'Action(s)',
      render: (_: any, record: any) => (
        <div className="flex gap-8 w-full">
          <Button
            type="primary"
            htmlType="button"
            className="w-24 px-6 py-2 text-lg"
            onClick={() => handleCancelOrder(record._id)}
            disabled={record.status.toLowerCase() === 'cancelled'}
          >
            Cancel
          </Button>
          <Button
            type="text"
            htmlType="button"
            onClick={() => navigate(`/admin/order/view-order/${record._id}`)}
            style={{ marginRight: '10px' }}
          >
            <ListOrdered />
          </Button>
          <Trash2
            style={{ fontSize: 18, color: 'red', cursor: 'pointer' }}
            onClick={() => handleDeleteOrder(record._id)}
          />
        </div>
      )
    },
  ];

  return (
    <div className="!space-y-4">
      <div className="flex items-center">
        <Link to="/app/dashboard" className="!text-black">
          Home
        </Link>
        <ChevronRight size={16} />
        <h2>Orders</h2>
      </div>

      <h2 className="text-xl font-medium !p-3">Product Management</h2>

      <div className="flex justify-right gap-6 !p-3">
        <div
          className="w-64 h-30 bg-white text-black flex justify-center items-center text-xl font-bold 
          rounded-2xl shadow-lg cursor-pointer hover:bg-gray-200 transition-all border border-gray-300"
          onClick={() => navigate('/admin/products')}
        >
          Products
        </div>
        <div
          className="w-64 h-30 bg-white text-black flex justify-center items-center text-xl font-bold 
          rounded-2xl shadow-lg cursor-pointer hover:bg-gray-200 transition-all border border-gray-300"
          onClick={() => navigate('/admin/category')}
        >
          Category
        </div>
      </div>

      <h2 className="text-xl font-medium whitespace-nowrap !p-2">Order Management</h2>

      <div className="flex justify-between items-center">
        <h2 className="text-lg whitespace-nowrap gap-5">Order List</h2>
        <div className="flex gap-4">
          <Input placeholder="Search by order number" className="border p-2 rounded-md w-64" />
          <Select className="border p-2 rounded-md w-40" defaultValue="All">
            <Option value="All">All</Option>
            <Option value="Pending">Pending</Option>
            <Option value="Cancelled">Cancelled</Option>
            <Option value="Completed">Completed</Option>
          </Select>
        </div>
      </div>

      <Table
        className="!my-5"
        columns={columns}
        dataSource={orders}
        rowKey="_id"
        loading={loading}
        pagination={false}
      />
    </div>
  );
};

export default Orders;
