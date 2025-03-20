import { Button, Form, Input, Table, Select,Flex } from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import { ChevronRight } from 'lucide-react';
import { data, Link, useNavigate } from 'react-router-dom';

import React from 'react';

//definig an arrow function for return all expenses
const AllExpenses = () => {

  const navigate = useNavigate();
  const columns = [
    {
      key: "expenseId",
      title:"ID",
      dataIndex:"id"
    },

    {
      key:"category",
      title:"Category",
      dataIndex:"category"
    },

    {
      key:"amount",
      title:"Amount",
      dataIndex:"amt"
    },

    {
      key:"date",
      title:"Date",
      dataIndex:"date"
    },

    {
      key:"action",
      title:"Action",
      dataIndex:"action"
    },
  ];

  //sample data for AllExpenses table
  const dataSource = [
    {
      id:"ex0001",
      category:"Transport",
      amt:"5020.00",
      date:"15-03-2025",
      action:"approved"
    }
  ];
      

    return(
      //apply content that want to be displayed 

        <div className='!space-y-4'>
        <div className="flex items-center">
          <Link to="/app/dashboard" className='!text-black'>Home</Link>
          <ChevronRight size={16} />
          <h2>Services</h2>
        </div>
  
        <div className="bg-white !p-3">
          <div className="flex justify-between items-center">
            <div className="flex">
              <Input placeholder='Search by expense type' />
              <Select placeholder="Filter by Service Type" className='ml-2'>
                {/*add items here*/}
              </Select>
              
              <Button 
                type='primary' 
                icon={<PlusOutlined/>}
                iconPosition={"start"} 
                onClick={() => navigate("/admin/financial/addexpense")}
              >
                Add
              </Button>
              
              

            </div>
          </div>
        </div>

      {/*This will display the table*/}
        <Table className='!my-5' columns={columns}/>
      </div>

    );
};

export default AllExpenses;

