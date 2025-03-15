import { Button, Table } from 'antd'
import { ChevronRight, Trash2 } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'


const columns = [
  {
    key: "product",
    title: "Product Name",
    dataIndex: "product",
    render:(value: string)=>{
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
  {
    key:"action",
    dataIndex:"action",
    render:()=>{
      return  <Button type="dashed" htmlType='button' >  <Trash2 /></Button>

    }
  }
]

const dataSource: any = [
  {
    product:"Royal chain Fit",
    price:"Rs.300.00",
    Qty:"3",
    subtotal:"Rs.900.00"

  },
  {
    product:"Royal chain Fit",
    price:"Rs.300.00",
    Qty:"3",
    subtotal:"Rs.900.00"
  },
  {
    product:"Royal chain Fit",
    price:"Rs.300.00",
    Qty:"3",
    subtotal:"Rs.900.00"

  },
  {
    product:"Royal chain Fit",
    price:"Rs.300.00",
    Qty:"3",
    subtotal:"Rs.900.00"

  },
  {
    product:"Royal chain Fit",
    price:"Rs.300.00",
    Qty:"3",
    subtotal:"Rs.900.00"
  }

];

const Cart = () => {
  return (
    <div className='!space-y-4'>
      <div className='flex justify-between'>
        <div className="flex items-center">
          <Link to="/app/dashboard" className='!text-black'>Home</Link>
          <ChevronRight size={16} />
          <Link to="/app/shop" className='!text-black'>Cart</Link>
        </div>

        <Button type="primary" htmlType='button' >Go Back</Button>
      </div>
      <div className='grid grid-cols-3 gap-5  bg-white !p-5 rounded-lg'>

        <div className='col-span-2'>

          <Table
            className='!my-4'
            columns={columns}
            dataSource={dataSource}
            pagination={false}
          />
        </div>

        <div className='col-span-1'>

          <div className='flex flex-col border !p-5 rounded-lg !space-y-3'>

            <h2 className="text-lg font-semibold "> Cart Totals</h2>

            <div className='flex gap-x-15'>
              <h2>SKU </h2>
              <h2>1001</h2>
            </div>

            <div className='flex gap-5'>
              <h2>Category </h2>
              <h2>Dog</h2>
            </div>

            <Button type="primary" htmlType='button'>Proceed to Checkout</Button>
          </div>
        </div>
      </div>








    </div>

  )
}

export default Cart


