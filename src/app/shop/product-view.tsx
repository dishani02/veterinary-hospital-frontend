import { Button } from 'antd'
import { ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'

const ProductView = () => {

  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantity = (action: string) => {
    if (action == "increase") {
      setQuantity(quantity + 1);
    } else if (action == "decrease") {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  }

  return (
    <div className='!space-y-4'>
      <div className="flex items-center">
        <Link to="/app/dashboard" className='!text-black'>Home</Link>
        <ChevronRight size={16} />
        <Link to="/app/shop" className='!text-black'>Shop</Link>
        <ChevronRight size={16} />
        <h2>15 kg Pedigree Pet Food, Packaging Type: Packet</h2>
      </div>


      <div className="flex bg-white !p-5 rounded  gap-5  rounded-lg" >
        <div className="flex flex-col items-center  w-1/2 ">
          <img src="https://m.media-amazon.com/images/I/71bNe7PVwrL._AC_UF1000,1000_QL80_.jpg" alt="" className='w-2/5' />
        </div>

        <div className="flex flex-col gap-5 w-1/2 ">
          <h1 className="text-3xl ">Royal food</h1>
          <p>Pup-friendly formula with a powerful antioxidant blend for lifelong health.Pup-friendly formula with a powerful antioxidant
            blend for lifelong health.Pup-friendly formula with a powerful antioxidant blend for lifelong health.Pup-friendly formula with a powerful antioxidant blend for lifelong health.
          </p>

          <div className='flex gap-x-15'>
            <h2>SKU </h2>
            <h2>1001</h2>
          </div>

          <div className='flex gap-5'>
            <h2>Category </h2>
            <h2>Dog</h2>
          </div>

          <div className='flex gap-x-11'>
            <h2>Brand </h2>
            <h2>Natural</h2>
          </div>

          <h2 className='text-xl'>Rs. 9500.00</h2>

          <div className='flex gap-5'>

            <div className='flex gap-3'>
              <Button type="dashed" htmlType='button' onClick={() => handleQuantity("decrease")}>-</Button>
              <h1 className="text-lg">{quantity}</h1>
              <Button type="primary" htmlType='button' onClick={() => handleQuantity("increase")}>+</Button>
            </div>

            <div className='flex w-1/2'>
              <Button type="primary" htmlType='button'>Add To Cart</Button>

            </div>

          </div>

        </div>
      </div>
    </div>


  )
}


export default ProductView