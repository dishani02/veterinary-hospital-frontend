// import { Button, Input, Select, Space, Table } from 'antd';
// import { ChevronRight, Eye, ListOrdered, Pencil, Trash2 } from 'lucide-react';
// import React from 'react'
// import { useNavigate, Link } from 'react-router';

// const Products = () => {
//   const navigate = useNavigate();

//   const columns = [
//     {
//       key: "Product",
//       title: "Product",
//       dataIndex: "Product",
//       width: "15%",
//       render: (value: string) => {
//         return <div className='flex items-center gap-5'>
//           <img src="https://m.media-amazon.com/images/I/71bNe7PVwrL._AC_UF1000,1000_QL80_.jpg" alt="" className='w-8' />
//           <h2>{value}</h2>
//         </div>
//       }

//     },
//     {
//       key: "productId",
//       title: "Product Id",
//       dataIndex: "productId",
//       width: "15%",

//     },
//     {
//       key: "category",
//       title: "Category",
//       dataIndex: "category",
//       width: "15%",

//     },
//     {
//       key: "price",
//       title: "Price",
//       dataIndex: "price",
//       width: "15%",

//     },
//     {
//       key: "volume",
//       title: "Volume",
//       dataIndex: "volume"
//     },
//     {
//       key: "stock",
//       title: "Stock",
//       dataIndex: "stock",
//     },
//     {
//       key: "action",
//       title: "View",
//       dataIndex: "action",
//       width: "10%",

//       render: () => {
//         return (
//           <Space>
//             <Button
//               type="text"
//               htmlType="button"
//               size="small"
//               onClick={() => navigate(`/admin/products/view/new`)}
//             >
//               <Eye />
//             </Button>

//             <Button
//               type="text"
//               htmlType="button"
//               size="small"
//               onClick={() => navigate("/admin/products/edit/new")}>
//               <Pencil />
//             </Button>

//             <Button
//               type="text"
//               htmlType="button"
//               danger size="small"
//               onClick={() => console.log("Delete action triggered")}>
//               <Trash2 />
//             </Button>

//           </Space>
//         );
//       },
//     }

//   ];

//   const dataSource: any = [
//     {
//       Product: "Cat Food",
//       productId: "OR-1078",
//       category: "Cat",
//       price: "Rs.900.00",
//       volume: "KG",
//       stock: "25"

//     },
//     {
//       Product: "Cat Food",
//       productId: "OR-1078",
//       category: "Cat",
//       price: "Rs.900.00",
//       volume: "KG",
//       stock: "25"
//     },
//     {
//       Product: "Cat Food",
//       productId: "OR-1078",
//       category: "Cat",
//       price: "Rs.900.00",
//       volume: "KG",
//       stock: "25"
//     },
//     {
//       Product: "Cat Food",
//       productId: "OR-1078",
//       category: "Cat",
//       price: "Rs.900.00",
//       volume: "KG",
//       stock: "25"
//     },
//   ]


//   return (
//     <div className='!space-y-4'>
//       <div className="flex items-center">
//         <Link to="/app/dashboard" className='!text-black'>Home</Link>
//         <ChevronRight size={16} />
//         <Link to="/admin/orders" className='!text-black'>Orders</Link>
//         <ChevronRight size={16} />
//         <h2>Products</h2>
//       </div>

//       <h2 className='text-xl font-medium !p-3'>Product Management</h2>

//       <div className="flex justify-between items-center ">
//         <h2 className="text-lg whitespace-nowrap gap-5">Product List</h2>
//         <div className="flex gap-4">
//           <Input
//             placeholder="Search product by SKU"
//             className="border p-2 rounded-md w-64"
//           />
//           <Select className="border p-2 rounded-md w-40">
//             <option value="Cat">Cat</option>
//             <option value="Dod">Dod</option>
//             <option value="Accessories">Accessories</option>
//           </Select>
//           <Button type="primary" htmlType='button' onClick={() => navigate("/admin/products/create")}>
//             Create new product
//           </Button>
//         </div>
//       </div>

//       <Table className='!my-5'
//         columns={columns}
//         dataSource={dataSource} />
//     </div>
//   )
// }

// export default Products

// function setCategories(arg0: any) {
//   throw new Error('Function not implemented.');
// }
import { Button, Input, Select, Space, Table, message } from 'antd';
import { ChevronRight, Eye, Pencil, Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router';
import axios from 'axios';
import { useAppContext } from '../../providers/context-provider';

const Products = () => {
  const navigate = useNavigate();
  const { user } = useAppContext();

  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products/product-list`, {
          headers: {
            Authorization: `Bearer ${user?.accessToken}`
          }
        });
        setProducts(response.data.payload);
      } catch (error) {
        console.error("Error fetching products:", error);
        message.error("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [user]);

  const columns = [
    {
      key: "Product",
      title: "Product",
      dataIndex: "name",
      width: "15%",
      render: (value: string, record: any) => {
        return (
          <div className='flex items-center gap-5'>
            <img
              src={record.image || "https://via.placeholder.com/32"}
              alt={value}
              className='w-8 h-8 object-cover rounded'
            />
            <h2>{value}</h2>
          </div>
        );
      }
    },
    {
      key: "productId",
      title: "Product Id",
      dataIndex: "_id",
      width: "15%",
    },
    {
      key: "category",
      title: "Category",
      dataIndex: "category",
      width: "15%",
    },
    {
      key: "price",
      title: "Price",
      dataIndex: "price",
      width: "15%",
      render: (price: number) => `Rs.${price.toFixed(2)}`
    },
    {
      key: "volume",
      title: "Volume",
      dataIndex: "volume"
    },
    {
      key: "stock",
      title: "Stock",
      dataIndex: "stock",
    },
    {
      key: "action",
      title: "View",
      width: "10%",
      render: (_: any, record: any) => {
        return (
          <Space>
            <Button
              type="text"
              htmlType="button"
              size="small"
              onClick={() => navigate(`/admin/products/view/${record._id}`)}
            >
              <Eye />
            </Button>

            <Button
              type="text"
              htmlType="button"
              size="small"
              onClick={() => navigate(`/admin/products/edit/${record._id}`)}
            >
              <Pencil />
            </Button>

            <Button
              type="text"
              htmlType="button"
              danger
              size="small"
              onClick={() => console.log("Delete action triggered")}
            >
              <Trash2 />
            </Button>
          </Space>
        );
      },
    }
  ];

  return (
    <div className='!space-y-4'>
      <div className="flex items-center">
        <Link to="/app/dashboard" className='!text-black'>Home</Link>
        <ChevronRight size={16} />
        <Link to="/admin/orders" className='!text-black'>Orders</Link>
        <ChevronRight size={16} />
        <h2>Products</h2>
      </div>

      <h2 className='text-xl font-medium !p-3'>Product Management</h2>

      <div className="flex justify-between items-center">
        <h2 className="text-lg whitespace-nowrap gap-5">Product List</h2>
        <div className="flex gap-4">
          <Input
            placeholder="Search product by SKU"
            className="border p-2 rounded-md w-64"
          />
          <Select className="border p-2 rounded-md w-40">
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
            <option value="Accessories">Accessories</option>
          </Select>
          <Button type="primary" htmlType='button' onClick={() => navigate("/admin/products/create")}>
            Create new product
          </Button>
        </div>
      </div>

      <Table
        className='!my-5'
        columns={columns}
        dataSource={products}
        loading={loading}
        rowKey="_id"
        pagination={false}
      />
    </div>
  );
};

export default Products;
