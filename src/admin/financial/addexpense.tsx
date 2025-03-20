import React from "react";
import { Button, Form, Input, Select, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const AddExpense = () => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent page reload

        // Get form data
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        console.log("Form Submitted:", data);
        alert("Expense Added!");
    };

    return (
        <div style={{ maxWidth: "650px", margin: "auto", padding: "20px", border: "2px solid #ddd", borderRadius: "10px", backgroundColor:"white"}}>
            
            <div style={{ textAlign: "center", marginBottom: "25px" }}>
                <label style={{fontSize:"20px"}}>New Expense</label>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
             
                <div style={{ display: "flex", justifyContent: "space-between", gap: "50px" ,padding:"20px"}}>
                    <Form.Item label="Date" style={{ flex: 1 }}>
                        <DatePicker style={{ width: "100%" }} name="date" />
                    </Form.Item>

                    <Form.Item label="Amount" style={{ flex: 1 }}>
                        <Input placeholder="Enter expense amount" name="amount" required />
                    </Form.Item>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", gap: "40px" }}>
                    <Form.Item label="Category" style={{ flex: 1 }}>
                        <Select id="category" placeholder="Select category" style={{ width: "98%" }}>
                            <Select.Option value="transport">Transport</Select.Option>
                            <Select.Option value="stationary">Stationary</Select.Option>
                            <Select.Option value="food">Food</Select.Option>
                            <Select.Option value="other">Other</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Description" style={{ flex: 1 }}>
                        <Input placeholder="Enter description" name="description" />
                    </Form.Item>
                </div>

    
                <div style={{ textAlign: "center" }}>
                    <Button type="primary" htmlType="submit">ADD</Button>
                </div>

            </form>
        </div>
    );
};

export default AddExpense;
