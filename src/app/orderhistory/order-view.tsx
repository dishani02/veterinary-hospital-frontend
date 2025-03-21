import { Button, Form, Input, Table, Select } from 'antd';
import { ChevronRight, ListOrdered, Trash2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router';


const columns = [
  {
    key: "product",
    title: "Product Name",
    dataIndex: "product",
    render: (value: string) => {
      return <div className='flex items-center gap-5'>
        <img src="https://m.media-amazon.com/images/I/71bNe7PVwrL._AC_UF1000,1000_QL80_.jpg" alt="" className='w-12' />
        <h2>{value}</h2>
      </div>
    }
  },
  {
    key: "price",
    title: "Price",
    dataIndex: "price"
  },
  {
    key: "Qty",
    title: "Qty",
    dataIndex: "Qty"
  },
  {
    key: "subtotal",
    title: "Subtotal",
    dataIndex: "subtotal"
  },
]

const dataSource: any = [
  {
    product: "Royal chain Fit",
    price: "Rs.300.00",
    Qty: "3",
    subtotal: "Rs.900.00"

  },
  {
    product: "Royal chain Fit",
    price: "Rs.300.00",
    Qty: "3",
    subtotal: "Rs.900.00"
  },
  {
    product: "Royal chain Fit",
    price: "Rs.300.00",
    Qty: "3",
    subtotal: "Rs.900.00"

  },
  {
    product: "Royal chain Fit",
    price: "Rs.300.00",
    Qty: "3",
    subtotal: "Rs.900.00"

  },
  {
    product: "Royal chain Fit",
    price: "Rs.300.00",
    Qty: "3",
    subtotal: "Rs.900.00"
  }

];

const { Option } = Select;

const OrderView = () => {
  const navigate = useNavigate();

  return (
    <div className='!space-y-4'>
      <div className="flex items-center">
        <Link to="/app/dashboard" className='!text-black'>Home</Link>
        <ChevronRight size={16} />
        <Link to="/app/orderhistory" className='!text-black'>Orders History </Link>
        <ChevronRight size={16} />
        <h2>Orders Details</h2>
      </div>

      <div className='grid grid-cols-3 gap-x-8 bg-white !p-5 rounded-lg'>
        <div className='col-span-1'>

          <div className="max-w-xl mx-auto p-4 bg-white shadow-lg rounded-lg mb-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Purchase Order Details</h2>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="font-semibold text-gray-700 text-sm">Purchase Order ID</h3>
                <p className="text-gray-900 text-base">21</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 text-sm">Order Date</h3>
                <p className="text-gray-900 text-base">03/13/2023</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 text-sm">Items</h3>
                <p className="text-gray-900 text-base">10</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 text-sm">Total Price</h3>
                <p className="text-gray-900 text-base">Rs. 9500.00</p>
              </div>
            </div>
          </div>

          <div className="max-w-xl mx-auto p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Customer Details</h2>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="font-semibold text-gray-700 text-sm">Ordered By</h3>
                <p className="text-gray-900 text-base">Shamal Wije</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 text-sm">User email</h3>
                <p className="text-gray-900 text-base">shaml@gmail.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 text-sm">Adderss</h3>
                <p className="text-gray-900 text-base">Homagama , colombo</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 text-sm">Phone number</h3>
                <p className="text-gray-900 text-base">0768977656</p>
              </div>
            </div>
          </div>


        </div>
        <div className='col-span-2'>

          <h2 className="text-lg whitespace-nowrap gap-5">Order List</h2>

          <Table
            className='!my-4'
            columns={columns}
            dataSource={dataSource}
            pagination={false}
          />
        </div>


      </div>


    </div>

  );
}

export default OrderView;