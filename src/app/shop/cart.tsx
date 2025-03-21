import { Button, Table } from "antd";
import { ChevronRight, Trash2 } from "lucide-react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../providers/context-provider";

interface CartItem {
  _id: string;
  name: string;
  price: number;
  Qty: number;
}

interface CartState {
  products: CartItem[];
}

const Cart: React.FC = () => {
  const { cart, setCart } = useAppContext();

  useEffect(() => {
    if (!cart) {
      setCart({ products: [] });
    }
  }, [cart, setCart]);

  const handleQuantityChange = (_id: string, action: "increase" | "decrease") => {
    setCart((prevCart) => {
      if (!prevCart) return { products: [] };

      return {
        ...prevCart,
        products: prevCart.products.map((item) =>
          item._id === _id
            ? { ...item, Qty: action === "increase" ? item.Qty + 1 : Math.max(1, item.Qty - 1) }
            : item
        ),
      };
    });
  };

  const handleRemoveItem = (_id: string) => {
    setCart((prevCart) => {
      if (!prevCart) return { products: [] };

      return {
        ...prevCart,
        products: prevCart.products.filter((item) => item._id !== _id),
      };
    });
  };

  if (!cart) {
    return <p>Loading cart...</p>;
  }

  const subtotal = cart.products.reduce((sum, item) => sum + item.price * item.Qty, 0);
  const deliveryCharge = subtotal >= 5000 ? 0 : 500;
  const total = subtotal + deliveryCharge;

  const columns = [
    {
      key: "name",
      title: "Product Name",
      dataIndex: "name",
      render: (value: string) => (
        <div className="flex items-center gap-5">
          <img src="https://m.media-amazon.com/images/I/71bNe7PVwrL.AC_UF1000,1000_QL80.jpg" alt="" className="w-12" />
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
      render: (_: any, record: CartItem) => (
        <div className="flex items-center gap-2">
          <Button type="dashed" onClick={() => handleQuantityChange(record._id, "decrease")}>-</Button>
          <h1 className="text-lg">{record.Qty}</h1>
          <Button type="primary" onClick={() => handleQuantityChange(record._id, "increase")}>+</Button>
        </div>
      ),
    },
    {
      key: "subtotal",
      title: "Subtotal",
      render: (_: any, record: CartItem) => `Rs.${record.price * record.Qty}`,
    },
    {
      key: "action",
      title: "Action",
      render: (_: any, record: CartItem) => (
        <Button type="dashed" onClick={() => handleRemoveItem(record._id)}>
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
          <Link to="/app/shop" className="!text-black">Shop</Link>
          <ChevronRight size={16} />
          <h2>My Cart</h2>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 bg-white !p-5 rounded-lg">
        <div className="col-span-2">
          <Table className="!my-4" columns={columns} dataSource={cart.products} pagination={false} />
        </div>
        <div className="col-span-1">
          <div className="flex flex-col border !p-5 rounded-lg !space-y-3">
            <h2 className="text-lg font-semibold">Cart Totals</h2>
            <p className="gap-y-3 text-gray-400 font-semibold">"Enjoy free delivery on orders with a subtotal of up to Rs. 5000 or more!"</p>
            <div className="flex justify-between"><h2>Subtotal</h2><h2>Rs.{subtotal}</h2></div>
            <div className="flex justify-between"><h2>Delivery Charge</h2><h2>Rs.{deliveryCharge}</h2></div>
            <div className="flex justify-between font-bold"><h2>Total</h2><h2>Rs.{total}</h2></div>
            <Button type="primary">Proceed to Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
