import { Button, Table } from 'antd';
import { ChevronRight, Trash2 } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router';

const Cart = () => {

  const [quantity, setQuantity] = useState<number>(1);

  const [cartItems, setCartItems] = useState([
    { 
      key: 1, 
      product: "Royal chain Fit", 
      price: 300, 
      Qty: 3 
    },
    { 
      key: 2, 
      product: "Royal chain Fit", 
      price: 300, 
      Qty: 3 
    },
    { 
      key: 3, 
      product: "Royal chain Fit", 
      price: 300, 
      Qty: 3 
    },
    { 
      key: 4, 
      product: "Royal chain Fit", 
      price: 300, 
      Qty: 3 
    },
    { 
      key: 5, 
      product: "Royal chain Fit", 
      price: 300, 
      Qty: 3 
    },
  ]);

  const handleQuantity = (action: string) => {
    if (action == "increase") {
      setQuantity(quantity + 1);
    } else if (action == "decrease") {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  }


  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.Qty, 0);
  const deliveryCharge = subtotal >= 5000 ? 0 : 500;
  const total = subtotal + deliveryCharge;

  const columns = [
    {
      key: "product",
      title: "Product Name",
      dataIndex: "product",
      render: (value: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined) => (
        <div className="flex items-center gap-5">
          <img
            src="https://m.media-amazon.com/images/I/71bNe7PVwrL.AC_UF1000,1000_QL80.jpg"
            alt=""
            className="w-12"
          />
          <h2>{value}</h2>
        </div>
      ),
    },
    {
      key: "price",
      title: "Price",
      dataIndex: "price",
      render: (value: number) => `Rs.${value}`,
    },
    {
      key: "Qty",
      title: "Qty",
      dataIndex: "Qty",
      render: (_: any, record: { key: any; Qty: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => (
        <div className="flex items-center gap-2">
          <Button type="dashed" htmlType='button' onClick={() => handleQuantity("decrease")}>-</Button>
              <h1 className="text-lg">{quantity}</h1>
              <Button type="primary" htmlType='button' onClick={() => handleQuantity("increase")}>+</Button>
        </div>
      ),
    },
    {
      key: "subtotal",
      title: "Subtotal",
      render: (_: any, record: { price: number; Qty: number; }) => `Rs.${(record.price * record.Qty)}`,
    },
    {
      key: "action",
      title: "Action",
      render: (_: any, record: { key: any; }) => (
        <Button type="dashed">
          <Trash2 />
        </Button>
      ),
    },
  ];

  return (
    <div className="!space-y-4">
      <div className="flex justify-between">
        <div className="flex items-center">
          <Link to="/app/dashboard" className="!text-black">Home</Link>
          <ChevronRight size={16} />
          <Link to="/app/shop" className="!text-black">Cart</Link>
        </div>
        <Button type="primary">Go Back</Button>
      </div>

      <div className="grid grid-cols-3 gap-5 bg-white !p-5 rounded-lg">
        <div className="col-span-2">
          <Table className="!my-4" columns={columns} dataSource={cartItems} pagination={false} />
        </div>
        <div className="col-span-1">
          <div className="flex flex-col border !p-5 rounded-lg !space-y-3">
            <h2 className="text-lg font-semibold">Cart Totals</h2>
            <div className="flex justify-between">
              <h2>Subtotal</h2>
              <h2>Rs.{subtotal}</h2>
            </div>
            <div className="flex justify-between">
              <h2>Delivery Charge</h2>
              <h2>Rs.{deliveryCharge}</h2>
            </div>
            <div className="flex justify-between font-bold">
              <h2>Total</h2>
              <h2>Rs.{total}</h2>
            </div>
            <Button type="primary">Proceed to Checkout</Button>
          </div>
        </div>
      </div>
    </div> 
  );
 };

export default Cart;


