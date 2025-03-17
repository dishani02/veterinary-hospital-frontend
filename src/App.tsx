import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from './components/layouts/app-layout';
import GuestLayout from './components/layouts/guest-layout';

import Login from "./auth/login";

//customer pages
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


//admin pages
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
import Services from "./admin/services/services";
import ViewServices from "./admin/services/viewservices";
import AdminDashboard from "./admin/dashboard";
import AdminLayout from "./components/layouts/admin-layout";
import Viewproduct from "./admin/order/view-product";
import Category from "./admin/order/category";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth" element={<GuestLayout />}>
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="app" element={<AppLayout />}>
          <Route path="user" element={<UserProfile />}></Route>
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

          <Route path="pet">
            <Route index element={<Pet />} />
            <Route path="add" element={<AddPet />} />
            <Route path="edit" element={<EditPet />} />

          </Route>

          <Route path="services">
            <Route index element={<ServiceRequests />} />
            <Route path="new" element={<RequestNewService />} />
            <Route path="confirm" element={<ServiceConfirmation />} />

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
            <Route path="view" element={<Products />} />
            <Route path="create" element={<CreateProduct />} />
            <Route path="edit/:productId" element={<EditProduct />} />
          </Route>
          
          
          <Route path="category">
            <Route index element={<Category />} />
            <Route path="view" element={<Category />} />
          </Route>

          <Route path="user-pet">
            <Route index element={<Users />} />
          </Route>

          <Route path="staff">
            <Route index element={<Staff />} />
            <Route path=":staffId" element={<ViewStaff />} />
            <Route path="add" element={<AddStaff />} />
            <Route path="edit" element={<EditStaff />} />
          </Route>

          <Route path="appointments">
            <Route index element={<AdminAppointments />} />
            <Route path=":appointmentId" element={<ViewAppointment />} />
          </Route>

          <Route path="order">
            <Route index element={<ViewOrder />} />
            <Route path=":orderid" element={<ViewOrder />} />
          </Route>

          <Route path="services">
            <Route index element={<Services />} />
            <Route path=":serviceId" element={<ViewServices />} />
          </Route>


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
