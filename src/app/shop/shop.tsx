import { Button } from 'antd';
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router'
import { useAppContext } from '../../providers/context-provider';


const Shop = () => {

  const { setCart, cart } = useAppContext();

  const categories = [
    "All",
    "Cat",
    "Dog",
    "Accessories"
  ];

  const products = [
    {
      _id: "1",
      name: "Product 1",
      price: 2250,
      description: "Pup-friendly formula with a powerful antioxidant blend for lifelong health"
    },
    {
      _id: "2",
      name: "Product 2",
      price: 3000,
      description: "Pup-friendly formula with a powerful antioxidant blend for lifelong health"
    },
    {
      _id: "3",
      name: "Product 3",
      price: 5200,
      description: "Pup-friendly formula with a powerful antioxidant blend for lifelong health"
    },
    {
      _id: "4",
      name: "Product 4",
      price: 6000,
      description: "Pup-friendly formula with a powerful antioxidant blend for lifelong health"
    },
    {
      _id: "5",
      name: "Product 5",
      price: 1250,
      description: "Pup-friendly formula with a powerful antioxidant blend for lifelong health"
    },
    {
      _id: "6",
      name: "Product 6",
      price: 2250,
      description: "Pup-friendly formula with a powerful antioxidant blend for lifelong health"
    }
  ];


  const addToCart = (product: any) => {
    setCart((prevCart) => {
      if (!prevCart) return { products: [{ ...product, Qty: 1 }] };

      const existingProduct = prevCart.products.find((item) => item._id === product._id);

      if (existingProduct) {
        alert("Already added to cart!.");
        return prevCart;
      }

      return { ...prevCart, products: [...prevCart.products, { ...product, Qty: 1 }] };
    });
  };

  const handleAddToCart = (product: any) => {
    setCart((prevCart) => {
      if (!prevCart) {
        return { products: [product] };
      }

      const updatedProducts = [...prevCart.products, product];
      return { ...prevCart, products: updatedProducts };
    });
  };


  return (
    <div className='!space-y-4'>
      <div className="flex items-center">
        <Link to="/app/dashboard" className='!text-black'>Home</Link>
        <ChevronRight size={16} />
        <h2>Shop</h2>
      </div>

      <div className="flex gap-x-2">
        {categories.map((category) => (
          <div className='flex border rounded !px-4 !py-2 cursor-pointer hover:shadow-lg' key={category}>
            <h2>{category}</h2>
          </div>
        ))}
      </div>

      <div className='grid lg:grid-cols-5 grid-cols-2 gap-3'>
        {products.map((product) => (
          <div className='flex flex-col bg-white rounded-lg !p-3 gap-y-2 hover:shadow-lg' key={product._id}>
            <img src="https://5.imimg.com/data5/GT/AS/MY-11365942/pedigree-adult-chicken-and-veg-15kg.jpg" alt={product.name} />
            <h2 className='font-semibold'></h2>
            <Link to={'/app/shop/1'}>{product.name}</Link>
            <h2>Rs.{product.price}</h2>
            <p>{product.description}</p>
            <Button type="primary" onClick={() => addToCart(product)}>Add To Cart</Button>
          </div>
        ))}
      </div>


    </div>
  )
}

export default Shop

