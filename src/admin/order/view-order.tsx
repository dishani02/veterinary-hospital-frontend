import { Button, Table, Select, message } from 'antd';
import { ChevronRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppContext } from '../../providers/context-provider';
import dayjs from 'dayjs';

const { Option } = Select;

const columns = [
  {
    key: 'product',
    title: 'Product Name',
    dataIndex: 'product',
    render: (value: string, record: any) => {
      return (
        <div className="flex items-center gap-5">
          <img
            src={record?.product?.image || 'https://via.placeholder.com/50'}
            alt=""
            className="w-12"
          />
          <h2>{record?.product?.name}</h2>
        </div>
      );
    },
  },
  {
    key: 'price',
    title: 'Price',
    dataIndex: 'price',
    render: (value: number) => `Rs.${value.toFixed(2)}`,
  },
  {
    key: 'quantity',
    title: 'Qty',
    dataIndex: 'quantity',
  },
  {
    key: 'subtotal',
    title: 'Subtotal',
    dataIndex: 'subtotal',
    render: (_: any, record: any) => `Rs.${(record.price * record.quantity).toFixed(2)}`,
  },
];

const ViewOrder = () => {
  const { orderId } = useParams();
  const { user } = useAppContext();
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/order/${orderId}`, {
          headers: {
            Authorization: `Bearer ${user?.accessToken}`,
          },
        });
        setOrderDetails(res.data.payload);
      } catch (error) {
        console.error(error);
        message.error('Failed to fetch order details.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId, user]);

  return (
    <div className="!space-y-4">
      <div className="flex items-center">
        <Link to="/app/dashboard" className="!text-black">Home</Link>
        <ChevronRight size={16} />
        <Link to="/admin/orders" className="!text-black">Orders</Link>
        <ChevronRight size={16} />
        <h2>Order Details</h2>
      </div>

      <div className="grid grid-cols-3 gap-x-8 bg-white !p-5 rounded-lg">
        <div className="col-span-1">
          <div className="max-w-xl mx-auto p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Purchase Order Details</h2>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="font-semibold text-gray-700 text-sm">Purchase Order ID</h3>
                <p className="text-gray-900 text-base">{orderDetails?._id || 'N/A'}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 text-sm">Order Date</h3>
                <p className="text-gray-900 text-base">
                  {orderDetails?.date ? dayjs(orderDetails.date).format('YYYY-MM-DD') : 'N/A'}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 text-sm">Ordered By</h3>
                <p className="text-gray-900 text-base">{orderDetails?.customer?.name || 'N/A'}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 text-sm">Items</h3>
                <p className="text-gray-900 text-base">{orderDetails?.items?.length || 0}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 text-sm">Total Price</h3>
                <p className="text-gray-900 text-base">
                  Rs.{orderDetails?.price?.toFixed(2) || '0.00'}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 text-sm">Order Status</h3>
                <select
                  className="mt-1 p-2 w-full border rounded-md bg-white shadow-sm focus:outline-none focus:ring-2"
                  defaultValue={orderDetails?.status || 'Pending'}
                  disabled
                >
                  <option value="Pending">Pending</option>
                  <option value="Cancel">Cancel</option>
                  <option value="Complete">Complete</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <h2 className="text-lg whitespace-nowrap gap-5">Order List</h2>
          <Table
            className="!my-4"
            columns={columns}
            dataSource={orderDetails?.items || []}
            pagination={false}
            loading={loading}
            rowKey={(record) => record.product?._id || Math.random().toString()}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
