
import { Link, Outlet } from 'react-router'
import { Avatar, Badge, Layout, Menu } from 'antd';
import { Ambulance, CircleDollarSign, Dog, LayoutDashboard, ShoppingBag, ShoppingCart, Stethoscope, UserRound, UserRoundCog } from 'lucide-react';
import { useAppContext } from '../../providers/context-provider';

const AppLayout = () => {

  const { Header, Content, Footer, Sider } = Layout;
  const size = 18;

  const { cart } = useAppContext();

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
              icon: <Ambulance size={size} />,
              label: <Link to="/app/services">Service Requests</Link>
            },
            {
              key: 3,
              icon: <Dog size={size} />,
              label: <Link to="/app/pet">Pet profile</Link>
            },

            {
              key: 4,
              icon: <ShoppingBag size={size} />,
              label: <Link to="/app/shop">Shop</Link>
            },
            {
              key: 5,
              icon: <CircleDollarSign size={size} />,
              label: <Link to="/app/payment">Payment</Link>
            },
            {
              key: 6,
              icon: <UserRoundCog size={size} />,
              label: <Link to="/app/user">Profile Setting</Link>
            },

          ]} />
      </Sider>
      <Layout>
        <Header className="!bg-white flex justify-end items-center gap-x-4">
          <Link to={'/app/shop/cart'} className='flex item-center'>
            <Badge count={cart?.products.length || 0} className='flex item-center'>
              <ShoppingCart size={22} className='cursor-pointer text-black' />
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