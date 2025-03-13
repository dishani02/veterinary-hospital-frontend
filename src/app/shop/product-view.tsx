import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router'

const ProductView = () => {
  return (
    <div className='!space-y-4'>
      <div className="flex items-center">
        <Link to="/app/dashboard" className='!text-black'>Home</Link>
        <ChevronRight size={16} />
        <Link to="/app/shop" className='!text-black'>Shop</Link>
        <ChevronRight size={16} />
        <h2>15 kg Pedigree Pet Food, Packaging Type: Packet</h2>
      </div>
    </div>
  )
}

export default ProductView