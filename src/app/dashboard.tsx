import React from "react";
import { Card, Button, Avatar, List } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const weightData = [
  { name: "Mon", weight: 15 },
  { name: "Tue", weight: 16 },
  { name: "Wed", weight: 15.8 },
  { name: "Thu", weight: 16.2 },
  { name: "Fri", weight: 16.5 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100 flex flex-col gap-4">
      {/* Header */}
      <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700">4Paws Dashboard</h2>
        <div className="flex items-center gap-4">
          <Button type="primary" icon={<PlusOutlined />}>Add Pet</Button>
          <Avatar src="https://i.pravatar.cc/100" />
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Pet Profile */}
        <Card className="shadow-md">
          <div className="flex items-center gap-4">
            <Avatar size={64} src="https://i.pravatar.cc/100" />
            <div>
              <h3 className="text-lg font-semibold">Marlie 🐶</h3>
              <p className="text-sm text-gray-500">1 year old - ID: 0091 00012 34</p>
            </div>
          </div>
        </Card>

        {/* Documents */}
        <Card className="shadow-md">
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold">Docs</h3>
            <Button type="link">Show All</Button>
          </div>
          <List
            dataSource={["Cardiogram.pdf", "Blood Test.pdf", "Ultrasound.pdf"]}
            renderItem={(item) => <List.Item>📄 {item}</List.Item>}
          />
        </Card>

        {/* Appointments */}
        <Card className="shadow-md">
          <h3 className="text-lg font-semibold">Appointments</h3>
          <p>Date: <strong>10.07.2024 - 16:30</strong></p>
          <p>Vet: <strong>Dr. Dmitry Cogan</strong></p>
          <p>Place: <strong>Lenin st. 28</strong></p>
        </Card>

        {/* Weight Chart */}
        <Card className="shadow-md">
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold">Weight</h3>
            <Button size="small" shape="circle" icon={<PlusOutlined />} />
          </div>
          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={weightData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="weight" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Medications */}
        <Card className="shadow-md">
          <h3 className="text-lg font-semibold">Medications</h3>
          <List
            dataSource={[
              "Vitamin D - 1 tablet daily",
              "Meloxicam - Every 3 days",
              "Atenolol - 1 tablet per month",
            ]}
            renderItem={(item) => <List.Item>💊 {item}</List.Item>}
          />
        </Card>

        {/* Coming Events */}
        <Card className="shadow-md">
          <h3 className="text-lg font-semibold">Coming Events</h3>
          <List
            dataSource={["Rabies 1-year - 02.10.2024", "Grooming - 14.08.2024"]}
            renderItem={(item) => <List.Item>📅 {item}</List.Item>}
          />
          <Button type="link">Show All Events</Button>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
