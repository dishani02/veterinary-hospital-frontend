import { Button, DatePicker, Form, Input, Select, Upload } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { UploadOutlined } from '@ant-design/icons';
import { ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

const EditProduct = () => {
  function onFinish(values: any): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className='!space-y-4'>
    <div className="flex items-center">
        <Link to="/app/dashboard" className='!text-black'>Home</Link>
        <ChevronRight size={16} />
        <Link to="/admin/orders" className='!text-black'>Order</Link>
        <ChevronRight size={16} />
        <Link to="/admin/products" className='!text-black'>Product</Link>
        <ChevronRight size={16} />
        <h2>Edit product</h2>
    </div>

    <h2 className="text-lg whitespace-nowrap gap-5">Product details</h2>

    <Form layout="vertical" className='bg-white !p-3 rounded' onFinish={onFinish}>
      <div className="grid grid-cols-2 gap-2">

      <Form.Item
          name="productId"
          label="Product Id"
        >
          <Input placeholder=" Product Id" disabled />
        </Form.Item>

        <Form.Item
          name="name"
          label="product Name"
          rules={[
            {
              required: true, message: 'Product name is required'
            }
          ]}>
          <Input placeholder="" />
        </Form.Item>

        <Form.Item
          name="SKU"
          label="SKU"
          rules={[
            {
              required: true, message: 'SKU is required'
            }
          ]}>
          <Input placeholder="Enter SKU"  />
        </Form.Item>

        <Form.Item
          name="category"
          label="Category"
          rules={[
            {
              required: true, message: 'Select is required'
            }
          ]}
        >
          <Select placeholder="Select a category">
            <Select.Option value="dog">Dog</Select.Option>
            <Select.Option value="cat">Cat</Select.Option>
            <Select.Option value="accessories">Accessories</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="brand"
          label="brand"
          rules={[
            {
              required: true, message: 'Brand is required'
            }
          ]}
        >
          <Input placeholder="Enter brand name " />
        </Form.Item>

        <Form.Item
          name="price"
          label="price"
          rules={[
            {
              required: true, message: 'Price is required'
            }
          ]}
        >
          <Input type="number" placeholder="Enter per price " addonBefore="Rs" className="w-full"
          />
        </Form.Item>

        <Form.Item
          name="volume"
          label="Volume"
          rules={[
            {
              required: true, message: 'Volume is required'
            }
          ]}
        >
          <Select placeholder="Select volume">
            <Select.Option value="kg">KG</Select.Option>
            <Select.Option value="gram">Gram</Select.Option>
            <Select.Option value="l">L</Select.Option>
            <Select.Option value="ml">mL</Select.Option>
            <Select.Option value="small">Small</Select.Option>
            <Select.Option value="medium">Medium</Select.Option>
            <Select.Option value="large">Large</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="stock"
          label="stock"
          rules={[
            {
              required: true, message: 'stock is required'
            }
          ]}
        >
          <Input type="number" placeholder="Enter stock quantity" />
        </Form.Item>

        <div className="col-span-2">
          <Form.Item
            name="note"
            label="Description"
            rules={[
              {
                required: true, message: 'Description is required'
              }
            ]}
          >
            <TextArea placeholder='Additional details' />
          </Form.Item>


        </div>
        <Form.Item
          label="Date"
          name="date"
          rules={[
            {
              required: true,
              message: "Date is required"
            }
          ]}
        >
          <DatePicker
            className='w-full'
          // disabledDate={(current) => current && current < moment().endOf('day')} 
          />
          
        </Form.Item>
        <div className="col-span-2">
          <Form.Item name="image" label="Pet Image">
            <Upload beforeUpload={() => false} listType="picture">
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
          </Form.Item>
        </div>
        <div className=" flex justify-n gap-3 ">
          < Button type="primary" htmlType="submit" className='w-50 '>Save</Button>
          <Button type="primary" htmlType="submit" className='w-50'>Cancel</Button>
        </div>

      </div>
    </Form>
  </div>
  )
}

export default EditProduct