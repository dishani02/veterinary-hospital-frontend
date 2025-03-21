import { Button,  Input, Table, Select } from 'antd';
import { ChevronRight, Trash2 } from 'lucide-react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router';

const { Option } = Select;

const OrdersHistory = () => {
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
      title: "Action(s)",
      dataIndex: "action",
      width :"20%",
      render: (_: any, record: { appointmentId: any; }) => (
        <div className="flex gap-8 w-full">
          <Button
            type="primary"
            htmlType="button"
            className="w-24 px-6 py-2 text-lg"
            onClick={() => handleCancel(record.appointmentId)}
          >
            Cancel
          </Button>
          <Trash2
            style={{ fontSize: 18, color: 'red', cursor: 'pointer' }}
            onClick={() => handleDelete(record.appointmentId)}
          />
        </div>

      )
    }
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
        <h2>Order History</h2>
      </div>

      <div className="flex justify-between items-center ">
        <h2 className="text-lg whitespace-nowrap gap-5">Order List</h2>
        <div className="flex gap-4">
          <Input
            placeholder="Search by Order ID"
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

export default OrdersHistory;

function setOrders(_ordersWithItemCount: any) {
  throw new Error('Function not implemented.');
}
function handleCancel(_appointmentId: any): void {
  throw new Error('Function not implemented.');
}

function handleDelete(appointmentId: any) {
  throw new Error('Function not implemented.');
}

