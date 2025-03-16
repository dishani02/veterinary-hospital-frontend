import { Button, Form, Input, Table, Select } from 'antd';
import { ChevronRight, ListOrdered, Trash2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router';


const { Option } = Select;

const Orders = () => {
  const navigate = useNavigate();

  const columns = [
    {
      key: "orderId",
      title: "Order Id",
      dataIndex: "orderId"
    },
    {
      key: "date",
      title: "Date",
      dataIndex: "date"
    },
    {
      key: "customer",
      title: "Customer",
      dataIndex: "customer"
    },
    {
      key: "items",
      title: "Items",
      dataIndex: "items"
    },
    {
      key: "price",
      title: "Price",
      dataIndex: "price"
    },
    {
      key: "status",
      title: "Status",
      dataIndex: "status",
    },
    {
      key: "action",
      title: "View",
      dataIndex: "action",
      render:()=>{
        return  <Button type="text" htmlType='button'  onClick={() => navigate("/admin/order/view-orderk")} >  <ListOrdered /></Button>
    //  <Button type="primary" htmlType='button' onClick={() => navigate("/app/appointments/book")}>
    //         Request Appointment
    //       </Button>
      }
    },
  ];

  const dataSource: any = [
    {
      orderId:"OR-1078",
      date:"25-02-2025",
      customer:"Shamal Wije",
      items:"3",
      price:"Rs.900.00",
      status:"pending"
  
    },
    {
      orderId:"OR-1078",
      date:"25-02-2025",
      customer:"Shamal Wije",
      items:"3",
      price:"Rs.900.00",
      status:"pending"
  
    },
    {
      orderId:"OR-1078",
      date:"25-02-2025",
      customer:"Shamal Wije",
      items:"3",
      price:"Rs.900.00",
      status:"pending"
  
    },
    {
      orderId:"OR-1078",
      date:"25-02-2025",
      customer:"Shamal Wije",
      items:"3",
      price:"Rs.900.00",
      status:"pending"
  
    },
  ]


  return (
    <div className='!space-y-4'>
      <div className="flex items-center">
        <Link to="/app/dashboard" className='!text-black'>Home</Link>
        <ChevronRight size={16} />
        <h2>Orders</h2>
      </div>

      <h2 className='text-xl font-medium !p-3'>Product Management</h2>

      <div className="flex justify-right  gap-6 !p-3">
        <div
          className="w-64 h-30 bg-white text-black flex justify-center items-center text-xl 
          font-bold rounded-2xl shadow-lg cursor-pointer hover:bg-gray-200 transition-all border border-gray-300"
        >
          Products
        </div>
        <div
          className="w-64 h-30 bg-white text-black flex justify-center items-center text-xl 
          font-bold rounded-2xl shadow-lg cursor-pointer hover:bg-gray-200 transition-all border border-gray-300"
        >
          Category
        </div>
      </div>

      <h2 className="text-xl font-medium whitespace-nowrap !p-2 ">Order Management</h2>

      <div className="flex justify-between items-center ">
        <h2 className="text-lg whitespace-nowrap gap-5">Order List</h2>
        <div className="flex gap-4">
          <Input
            placeholder="Search by appointment number"
            className="border p-2 rounded-md w-64"
          />
          <Select className="border p-2 rounded-md w-40">
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Canceled">Canceled</option>
          </Select>
        </div>
      </div>

      <Table className='!my-5' 
      columns={columns}
      dataSource={dataSource} />
    </div>

  );
}

export default Orders;
