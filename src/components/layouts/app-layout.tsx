
import { Link, Outlet } from 'react-router'
import { Avatar, Badge, Layout, Menu } from 'antd';
import { LayoutDashboard, ShoppingBag, ShoppingCart, Stethoscope, UserRound } from 'lucide-react';

const AppLayout = () => {

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
              label: <Link to="/app/dashboard">Dashboard</Link>
            },
            {
              key: 1,
              icon: <Stethoscope size={size} />,
              label: <Link to="/app/appointments">Appointments</Link>
            },
            {
              key: 2,
              icon: <ShoppingBag size={size} />,
              label: <Link to="/app/shop">Shop</Link>
            }
          ]} />
      </Sider>
      <Layout>
        <Header className="!bg-white flex justify-end items-center gap-x-4">
          <Link to={'/app/shop/cart'} className='flex item-center'>
            <Badge count={5} className='flex item-center'>
              <ShoppingCart size={28} className='cursor-pointer text-black' />
            </Badge>
          </Link>
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

export default AppLayout