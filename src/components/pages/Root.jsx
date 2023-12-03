import { Outlet } from "react-router-dom";
import NavBar from "../common/navBar";
import Footer from "../common/footer";

const Root = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
