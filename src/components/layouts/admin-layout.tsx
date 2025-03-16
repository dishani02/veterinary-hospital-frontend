
import { Link, Outlet } from 'react-router'
import { Avatar, Layout, Menu } from 'antd';
import { Ambulance, ContactRound, FileText, LayoutDashboard, ShoppingBag, Stethoscope, UserRound, Users } from 'lucide-react';

const AdminLayout = () => {

  const { Header, Content, Footer, Sider } = Layout;
  const size = 18;

  return (
    <Layout>
      <Sider
        collapsible
        className='!bg-black h-screen'
      >
        <div className="flex !p-3 m-auto">
          <h2 className='text-lg text-white text-center'>Pet Paw</h2>
        </div>
        <Menu
          mode='inline'
          theme="dark"
          defaultSelectedKeys={['0']}
          className='!bg-black'
          items={[
            {
              key: 0,
              icon: <LayoutDashboard size={size} />,
              label: <Link to="/admin/dashboard">Dashboard</Link>
            },
            {
              key: 1,
              icon: <Stethoscope size={size} />,
              label: <Link to="/admin/appointments">Appointments</Link>
            },
            {
              key: 2,
              icon: <Ambulance size={size} />, 
              label: <Link to="/app/services">Service Requests</Link>
            },
            {
              key: 3,
              icon:  <ContactRound size={size} />,
              label: <Link to="/admin/orders">Users and Pets</Link>
            },
            {
              key: 3,
              icon: <Users size={size}/>,
              label: <Link to="/admin/orders">Staff Management</Link>
            },
            {
              key: 3,
              icon: <ShoppingBag size={size} />,
              label: <Link to="/admin/orders">Shop</Link>
            },
            {
              key: 3,
              icon:    <FileText size={size}/>,
              label: <Link to="/admin/orders">Reports</Link>
            },
          ]} />
      </Sider>
      <Layout>
        <Header className="!bg-white flex justify-end items-center gap-x-4">
          
          <div className="flex items-center gap-2">
            <Avatar size={35} icon={<UserRound size={14} />} />
            <h2>Hi, Dishani</h2>
          </div>
        </Header>
        <Content className='!p-5 overflow-y-hidden'>
          <Outlet />
        </Content>
        <Footer className='!flex'>
          <h2 className='!text-center !m-auto'>Copyright &copy; 2025 | PetPaw</h2>
        </Footer>
      </Layout>
    </Layout>
  )
}

export default AdminLayout