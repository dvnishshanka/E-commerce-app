import { Outlet } from "react-router-dom";
import NavBar from "../common/navBar";
import Footer from "../common/footer";
import defaultTheme from "../../theme";

const Root = () => {
  return (
    <div>
      <NavBar />
      <main
        style={{
          backgroundColor: `${defaultTheme.colors.lightGray}`,
          marginBottom: "30px",
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
