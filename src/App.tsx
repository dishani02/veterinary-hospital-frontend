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



//admin pages
import Orders from "./admin/order/orders";
import ViewOrder from "./admin/order/view-order";
import Products from "./admin/order/products";
import CreateProduct from "./admin/order/create-product";
import EditProduct from "./admin/order/edit-product";
import AdminAppointments from "./admin/appointments/appointments";
import ViewAppointment from "./admin/appointments/view-appointment";
import AdminDashboard from "./admin/dashboard";
import AdminLayout from "./components/layouts/admin-layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth" element={<GuestLayout />}>
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="app" element={<AppLayout />}>
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

        <Route path="admin" element={<AdminLayout/>}>
          <Route path="dashboard" element={<AdminDashboard/>}/>
          <Route path="orders">
            <Route index element={<Orders />} />
            <Route path=":orderId" element={<ViewOrder />} />
          </Route>

          <Route path="products">
            <Route index element={<Products />} />
            <Route path="create" element={<CreateProduct />} />
            <Route path=":productId" element={<EditProduct />} />
          </Route>

          <Route path="appointments">
            <Route index element={<AdminAppointments/>}/>
            <Route path=":appointmentId" element={<ViewAppointment/>}/>
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
