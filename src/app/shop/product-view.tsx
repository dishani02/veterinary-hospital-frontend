

// import { Button } from 'antd'
// import { ChevronRight } from 'lucide-react'
// import { useState } from 'react'
// import { Link } from 'react-router'
// import { useAppContext } from '../../providers/context-provider'

// const ProductView = () => {
//   const { setCart, cart } = useAppContext();
//   const [quantity, setQuantity] = useState<number>(1);

//   // Sample Product (replace with dynamic product details)
//   const product = {
//     _id: "1001",
//     name: "Royal Food",
//     price: 9500,
//     description: "Pup-friendly formula with a powerful antioxidant blend for lifelong health.",
//     category: "Dog",
//     brand: "Natural",
//     image: "https://m.media-amazon.com/images/I/71bNe7PVwrL._AC_UF1000,1000_QL80_.jpg"
//   };

//   const handleQuantity = (action: string) => {
//     setQuantity((prev) => {
//       if (action === "increase") return prev + 1;
//       if (action === "decrease" && prev > 1) return prev - 1;
//       return prev;
//     });
//   };

//   const addToCart = () => {
//     setCart((prevCart) => {
//       const updatedCart = prevCart ?? { products: [] };

//       const existingProduct = updatedCart.products.find((p) => p._id === product._id);

//       let updatedProducts;
//       if (existingProduct) {
//         updatedProducts = updatedCart.products.map((p) =>
//           p._id === product._id ? { ...p, quantity: p.quantity + quantity } : p
//         );
//       } else {
//         updatedProducts = [...updatedCart.products, { ...product, quantity }];
//       }

//       return { products: updatedProducts };
//     });
//   };

//   return (
//     <div className='!space-y-4'>
//       <div className="flex items-center">
//         <Link to="/app/dashboard" className='!text-black'>Home</Link>
//         <ChevronRight size={16} />
//         <Link to="/app/shop" className='!text-black'>Shop</Link>
//         <ChevronRight size={16} />
//         <h2>{product.name}</h2>
//       </div>

//       <div className="flex bg-white !p-5 rounded gap-5 rounded-lg">
//         <div className="flex flex-col items-center w-1/2">
//           <img src={product.image} alt={product.name} className='w-2/5' />
//         </div>

//         <div className="flex flex-col gap-5 w-1/2">
//           <h1 className="text-3xl">{product.name}</h1>
//           <p>{product.description}</p>

//           <div className='flex gap-x-15'>
//             <h2>SKU </h2>
//             <h2>{product._id}</h2>
//           </div>

//           <div className='flex gap-5'>
//             <h2>Category </h2>
//             <h2>{product.category}</h2>
//           </div>

//           <div className='flex gap-x-11'>
//             <h2>Brand </h2>
//             <h2>{product.brand}</h2>
//           </div>

//           <h2 className='text-xl'>Rs. {product.price}</h2>

//           <div className='flex gap-5'>
//             <div className='flex gap-3'>
//               <Button type="dashed" htmlType='button' onClick={() => handleQuantity("decrease")}>-</Button>
//               <h1 className="text-lg">{quantity}</h1>
//               <Button type="primary" htmlType='button' onClick={() => handleQuantity("increase")}>+</Button>
//             </div>

//             <div className='flex w-1/2'>
//               <Button type="primary" htmlType='button' onClick={addToCart}>Add To Cart</Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductView;

import { Button } from 'antd'
import { ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'
import { useAppContext } from '../../providers/context-provider'

const ProductView = () => {
  const { setCart, cart } = useAppContext();
  const [quantity, setQuantity] = useState<number>(1);

  const product = {
    _id: "1001",
    name: "Royal Food",
    price: 9500,
    description: "Pup-friendly formula with a powerful antioxidant blend for lifelong health.",
    category: "Dog",
    brand: "Natural",
    image: "https://m.media-amazon.com/images/I/71bNe7PVwrL._AC_UF1000,1000_QL80_.jpg"
  };

  const handleQuantity = (action: string) => {
    setQuantity((prev) => {
      if (action === "increase") return prev + 1;
      if (action === "decrease" && prev > 1) return prev - 1;
      return prev;
    });
  };

  const addToCart = () => {
    setCart((prevCart) => {
      if (!prevCart) return { products: [{ ...product, Qty: quantity, subtotal: product.price * quantity }] };

      const existingProductIndex = prevCart.products.findIndex((item) => item._id === product._id);

      if (existingProductIndex !== -1) {
        alert("Already added to cart!");
        return prevCart;
      }

      return {
        ...prevCart,
        products: [...prevCart.products, { ...product, Qty: quantity, subtotal: product.price * quantity }]
      };
    });
  };

  return (
    <div className='!space-y-4'>
      <div className="flex items-center">
        <Link to="/app/dashboard" className='!text-black'>Home</Link>
        <ChevronRight size={16} />
        <Link to="/app/shop" className='!text-black'>Shop</Link>
        <ChevronRight size={16} />
        <h2>{product.name}</h2>
      </div>

      <div className="flex bg-white !p-5 rounded gap-5 rounded-lg">
        <div className="flex flex-col items-center w-1/2">
          <img src={product.image} alt={product.name} className='w-2/5' />
        </div>

        <div className="flex flex-col gap-5 w-1/2">
          <h1 className="text-3xl">{product.name}</h1>
          <p>{product.description}</p>

          <div className='flex gap-x-15'>
            <h2>SKU </h2>
            <h2>{product._id}</h2>
          </div>

          <div className='flex gap-5'>
            <h2>Category </h2>
            <h2>{product.category}</h2>
          </div>

          <div className='flex gap-x-11'>
            <h2>Brand </h2>
            <h2>{product.brand}</h2>
          </div>

          <h2 className='text-xl'>Rs. {product.price}</h2>

          <div className='flex gap-5'>
            <div className='flex gap-3'>
              <Button type="dashed" htmlType='button' onClick={() => handleQuantity("decrease")}>-</Button>
              <h1 className="text-lg">{quantity}</h1>
              <Button type="primary" htmlType='button' onClick={() => handleQuantity("increase")}>+</Button>
            </div>

            <div className='flex w-1/2'>
              <Button type="primary" htmlType='button' onClick={addToCart}>Add To Cart</Button>
            </div>
          </div>

          <div className='flex gap-5'>
            <h2>Subtotal:</h2>
            <h2>Rs. {product.price * quantity}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductView;
