import { Outlet } from 'react-router-dom';
import NavBar from '../common/navBar';
import Footer from '../common/footer';
import defaultTheme from '../../theme';

const Root = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <NavBar />
      <main
        style={{
          backgroundColor: `${defaultTheme.colors.lightGray}`,
          // paddingBottom: "30px",
          // margin: "0",
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
