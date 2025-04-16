
import { Button, Input, Table, Select, message } from 'antd';
import { ChevronRight, ListOrdered, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import dayjs from 'dayjs';
import { useAppContext } from '../../providers/context-provider';
import { useNavigate } from 'react-router';

const { Option } = Select;

const OrdersHistory = () => {
  const { user } = useAppContext();
  const navigate = useNavigate();

  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchOrders = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/order/order-history`,
          {
            headers: {
              Authorization: `Bearer ${user?.accessToken}`,
            },
            signal: controller.signal,
          }
        );

        const dataWithItemCount = res.data.payload?.map((order: any) => ({
          ...order,
          items: order.items?.length || 0,
        })) || [];

        setOrders(dataWithItemCount);
      } catch (error) {
        console.error(error);
        message.error('Failed to load order history.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
    return () => controller.abort();
  }, [user]);

  const handleCancel = async (orderId: string) => {
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
        message.success('Order cancelled successfully.');
        setOrders((prev) =>
          prev.map((order) =>
            order._id === orderId ? { ...order, status: 'cancelled' } : order
          )
        );
      }
    } catch (error) {
      console.error(error);
      message.error('Failed to cancel the order.');
    }
  };

  const handleDelete = async (orderId: string) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/order/${orderId}`,
        {
          headers: {
            Authorization: `Bearer ${user?.accessToken}`,
          },
        }
      );

      if (res.status === 200) {
        message.success('Order deleted successfully.');
        setOrders((prev) => prev.filter((order) => order._id !== orderId));
      }
    } catch (error) {
      console.error(error);
      message.error('Failed to delete the order.');
    }
  };

  const columns = [
    {
      key: '_id',
      title: 'Order ID',
      dataIndex: '_id',
    },
    {
      key: 'date',
      title: 'Date',
      dataIndex: 'date',
      render: (value: string) => value ? dayjs(value).format('YYYY-MM-DD') : 'N/A',
    },
    {
      key: 'items',
      title: 'Total Items',
      dataIndex: 'items',
    },
    {
      key: 'price',
      title: 'Total Price',
      dataIndex: 'price',
      render: (value: number) => value ? `Rs.${value.toFixed(2)}` : 'N/A',
    },
    {
      key: 'status',
      title: 'Status',
      dataIndex: 'status',
    },
    {
      key: 'action',
      title: 'Actions',
      render: (_: any, record: any) => (
        <div className="flex gap-4">
          <Button
            type="primary"
            size='middle'
            onClick={() => handleCancel(record._id)}
            disabled={record.status.toLowerCase() === 'cancelled'}
          >
            Cancel
          </Button>
          <Trash2
            style={{ fontSize: 18, color: 'red', cursor: 'pointer' }}
            onClick={() => handleDelete(record._id)}
          />
           <Button
            type="text"
            htmlType="button"
            onClick={() => navigate(`/admin/order/view-order/${record._id}`)}
            style={{ marginRight: '10px' }}
          >
            <ListOrdered />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="!space-y-4">
      <div className="flex items-center">
        <Link to="/app/dashboard" className="!text-black">
          Home
        </Link>
        <ChevronRight size={16} />
        <h2>Order History</h2>
      </div>

      <div className="flex justify-between items-center">
        <h2 className="text-lg whitespace-nowrap gap-5">Order List</h2>
        <div className="flex gap-4">
          <Input
            placeholder="Search by Order ID"
            className="border p-2 rounded-md w-64"
          />
          <Select className="border p-2 rounded-md w-40" defaultValue="All">
            <Option value="All">All</Option>
            <Option value="Pending">Pending</Option>
            <Option value="Completed">Completed</Option>
            <Option value="Cancelled">Cancelled</Option>
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

export default OrdersHistory;
