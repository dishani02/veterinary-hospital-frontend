import { Button, Form, Input, Table, Select } from 'antd';
import { ChevronRight, ListOrdered, Trash2 } from 'lucide-react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router';


const { Option } = Select;

const OrdersHistory = () => {
  const navigate = useNavigate();

  // Fetch orders from the API
  useEffect(() => {
    fetch("/api/orders")
      .then(response => response.json())
      .then(data => {
        // Assuming data.payload is an array of orders
        // We map over the data to include itemCount
        const ordersWithItemCount = data.payload.map((order: any) => ({
          ...order,
          items: order.items.length,  // Add itemCount (length of items array)
        }));
        setOrders(ordersWithItemCount);
      })
      .catch(error => console.error('Error fetching orders:', error));
  }, []); // Empty dependency array means this effect runs once when the component mounts


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
      title: "View",
      dataIndex: "action",
      render: () => {
        return (
          <Button type="text" htmlType='button' onClick={() => navigate("/app/orderhistory/order-view")}>
            <ListOrdered />
          </Button>
        );
      }
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

function setOrders(ordersWithItemCount: any) {
  throw new Error('Function not implemented.');
}
