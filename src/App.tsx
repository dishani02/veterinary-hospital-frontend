import { BrowserRouter, Route, Routes } from "react-router";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AppLayout from './components/layouts/app-layout';
import GuestLayout from './components/layouts/guest-layout';
import AdminLayout from "./components/layouts/admin-layout";
import UserLogin from "./auth/login";
import UserRegister from "./auth/register";
// Customer Pages
import Dashboard from "./app/dashboard";
import Appointments from "./app/appointments/appointments";
import BookAppointment from "./app/appointments/book-appointment";
import AppointmentConfirmation from "./app/appointments/appointment-confirmation";
import Shop from "./app/shop/shop";
import Cart from "./app/shop/cart";
import ProductView from "./app/shop/product-view";
import Pet from "./app/pet/pet";
import AddPet from "./app/pet/addpet";
import EditPet from "./app/pet/editpet";
import UserProfile from "./app/userprofile";
import ServiceRequests from "./app/services/services";
import RequestNewService from "./app/services/requestnewservice";
import ServiceConfirmation from "./app/services/serviceconfirmation";
import OrdersHistory from "./app/orderhistory/order-history";
import OrderView from "./app/orderhistory/order-view";
// Admin Pages
import Orders from "./admin/order/orders";
import ViewOrder from "./admin/order/view-order";
import Products from "./admin/order/products";
import CreateProduct from "./admin/order/create-product";
import EditProduct from "./admin/order/edit-product";
import Users from "./admin/user/user";
import Staff from "./admin/staff/staff";
import AddStaff from "./admin/staff/addstaff";
import EditStaff from "./admin/staff/editstaff";
import ViewStaff from "./admin/staff/viewstaff";
import AdminAppointments from "./admin/appointments/appointments";
import ViewAppointment from "./admin/appointments/view-appointment";
import RescheduleAppointment from "./admin/appointments/reschedule-appointments";
import Services from "./admin/services/services";
import ViewServices from "./admin/services/viewservices";
import AdminDashboard from "./admin/dashboard";
import Viewproduct from "./admin/order/view-product";
import Category from "./admin/order/category";




const API_URL = "http://localhost:5000/api";

const App: React.FC = () => {
    const [data, setData] = useState<string>("");

    useEffect(() => {
        axios.get(API_URL)
            .then(response => {
                setData(response.data.message);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <BrowserRouter>
            <div>
                <h1>Frontend</h1>
                <p>Data from Backend: {data}</p>
            </div>
            <Routes>
                <Route path="auth" element={<GuestLayout />}>
                    <Route path="login" element={<UserLogin />} />
                    <Route path="register" element={<UserRegister />} />
                </Route>
                <Route path="app" element={<AppLayout />}>
                    <Route path="user" element={<UserProfile />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="appointments">
                        <Route index element={<Appointments />} />
                        <Route path="book" element={<BookAppointment />} />
                        <Route path="confirm" element={<AppointmentConfirmation />} />
                    </Route>
                    <Route path="shop">
                        <Route index element={<Shop />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path=":productId" element={<ProductView />} />
                    </Route>
                </Route>
                <Route path="admin" element={<AdminLayout />}>
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path="orders">
                        <Route index element={<Orders />} />
                        <Route path=":orderId" element={<ViewOrder />} />
                    </Route>
                    <Route path="products">
                        <Route index element={<Products />} />
                        <Route path="view/:productId" element={<Viewproduct />} />
                        <Route path="create" element={<CreateProduct />} />
                        <Route path="edit/:productId" element={<EditProduct />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
