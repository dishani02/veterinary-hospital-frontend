

import axios from "axios";
import commonUtil from "../utils/common.util";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Button, Form, Input, message } from "antd";
import { useAppContext } from "../providers/context-provider";

const UserLogin: React.FC = () => {
  const navigate = useNavigate();
  const { setUser } = useAppContext();
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async (values: { email: string, password: string }) => {
    try {
      setLoading(true);
      await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/login`, values).then((res: any) => {
        if (res.status === 200) {
          const { user, token } = res.data;
          setUser({ ...user, accessToken: token });
          if (user.role === commonUtil.USER_ROLES.ADMIN) {
            navigate('/admin/dashboard');
          } else if (user.role === commonUtil.USER_ROLES.PET_OWNER) {
            navigate('/app/dashboard');
          } else {
            message.error("Invalid user role. Please contact administrator!");
          }
        }
      }).catch((err) => {
        console.log(err);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">User Login</h2>
        <Form onFinish={handleLogin} className="space-y-2" layout="vertical" initialValues={{
          email: "admin@admin.com",
          password: "123"
        }}>
          <Form.Item
            label="E-mail"
            name="email"
            rules={[
              {
                required: true,
                message: "E-mail is required"
              }
            ]}
          >
            <Input
              type="email"
              size="large"
              placeholder="Email Address"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Password is required"
              }
            ]}
          >
            <Input
              type="password"
              placeholder="Password"
              size="large"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </Form.Item>
          <Button
            htmlType="submit"
            type="primary"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200"
            loading={loading}
          >
            Login
          </Button>
        </Form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
