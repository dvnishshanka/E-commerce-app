import { Outlet } from 'react-router-dom';
import NavBar from '../common/navBar';
import Footer from '../common/footer';
import defaultTheme from '../../theme';

const Root = () => {
  return (
    <div>
      <NavBar />
      <main
        style={{
          backgroundColor: `${defaultTheme.colors.lightGray}`,
          // paddingBottom: "30px",
          // margin: "0",
          minHeight: '50vh',
        }}
      >
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Root;
