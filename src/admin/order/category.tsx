import React, { useState } from "react";
import { Button, Input, Modal, Table } from "antd";
import { ChevronRight, Plus, ArrowLeft, Trash2 } from "lucide-react";
import { Link, useNavigate } from "react-router";

const CategoryPage: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState([
    { key: "1", name: "Cat" },
    { key: "2", name: "Dog" },
    { key: "3", name: "Accessories" },
  ]);
  const [newCategory, setNewCategory] = useState("");

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);
  const handleSave = () => {
    if (newCategory.trim()) {
      setCategories([...categories, { key: Date.now().toString(), name: newCategory }]);
      setNewCategory("");
      setIsModalOpen(false);
    }
  };

  const handleDelete = (key: string) => {
    setCategories(categories.filter(category => category.key !== key));
  };

  const columns = [
    { title: "Category Name", dataIndex: "name", key: "name" },
    { 
        title: "Action", 
        key: "action", 
        

        render: (_: any, record: { key: string }) => (
          <Button 
            type="text" 
            icon={<Trash2 size={16} />} 
            danger 
            onClick={() => handleDelete(record.key)}
          />
        )
      }
  ];

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center space-x-2">
      <Link to="/app/dashboard" className='!text-black'>Home</Link>
      <ChevronRight size={16} />
      <Link to="/admin/orders" className='!text-black'>Orders</Link>
      <ChevronRight size={16} />
      <h2>Category</h2>
      </div>
      
      <div className="flex justify-between">
        <Button type="primary" icon={<Plus size={16} />} onClick={showModal}>
          Add New Category
        </Button>
        <Button type="primary" icon={<ArrowLeft size={16} />} onClick={() => navigate("/admin/orders") }>
          Go Back to Orders
        </Button>
      </div>
      
      <Table columns={columns} dataSource={categories} pagination={false} />
      
      <Modal title="Add New Category" open={isModalOpen} onCancel={handleCancel} onOk={handleSave}>
        <Input
          placeholder="Enter category name"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default CategoryPage;
function handleDelete(key: string): void {
    throw new Error("Function not implemented.");
}

