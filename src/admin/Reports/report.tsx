import { Button, Form, Input, Select } from 'antd';
import { ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

const { TextArea } = Input;

const Viewproduct = () => {
    const navigate = useNavigate();

    return (
        <div className='!space-y-4'>
            <div className="flex items-center">
                <Link to="/admin/dashboard" className='!text-black'>Home</Link>
                <ChevronRight size={16} />
                <Link to="/admin/orders" className='!text-black'>Order</Link>
                <ChevronRight size={16} />
                <Link to="/admin/products" className='!text-black'>Product</Link>
                <ChevronRight size={16} />
                <h2>15 kg Pedigree Pet Food, Packaging Type: </h2>
            </div>



            <div className="flex bg-white !p-5 rounded gap-5 rounded-lg">
                <div className="flex flex-col items-center w-1/2">
                    <img src="https://m.media-amazon.com/images/I/71bNe7PVwrL._AC_UF1000,1000_QL80_.jpg" alt="" className='w-2/5' />
                </div>

                <div className="flex flex-col gap-5 w-1/2">
                    <Form layout="vertical" className='bg-white !p-3 rounded' disabled>
                        <div className="grid grid-cols-2 gap-2">

                            <Form.Item name="name" label="Product Name">
                                <Input defaultValue="15 kg Pedigree Pet Food" />
                            </Form.Item>

                            <Form.Item name="SKU" label="SKU">
                                <Input defaultValue="1001" />
                            </Form.Item>

                            <Form.Item name="category" label="Category">
                                <Select defaultValue="dog">
                                    <Select.Option value="dog">Dog</Select.Option>
                                    <Select.Option value="cat">Cat</Select.Option>
                                    <Select.Option value="accessories">Accessories</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item name="brand" label="Brand">
                                <Input defaultValue="Natural" />
                            </Form.Item>

                            <Form.Item name="price" label="Price">
                                <Input defaultValue="9500.00" addonBefore="Rs" />
                            </Form.Item>

                            <Form.Item name="volume" label="Volume">
                                <Select defaultValue="kg">
                                    <Select.Option value="kg">KG</Select.Option>
                                    <Select.Option value="gram">Gram</Select.Option>
                                    <Select.Option value="l">L</Select.Option>
                                    <Select.Option value="ml">mL</Select.Option>
                                    <Select.Option value="small">Small</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item name="stock" label="Stock">
                                <Input defaultValue="10" />
                            </Form.Item>

                            <div className="col-span-2">
                                <Form.Item name="note" label="Description">
                                    <TextArea defaultValue="Pup-friendly formula with a powerful antioxidant blend for lifelong health." />
                                </Form.Item>
                            </div>
                        </div>

                    </Form>


                    <div className=" flex justify-n gap-3 ">
                        < Button type="primary" htmlType="submit" className='w-50 ' onClick={() => navigate("/admin/products")}>Go back</Button>
                        <Button type="primary" htmlType="submit" className='w-50' onClick={() => navigate("/admin/products/edit/new")}>Edit Details</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Viewproduct;
