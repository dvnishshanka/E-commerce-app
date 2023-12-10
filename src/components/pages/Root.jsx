import { Outlet } from "react-router-dom";
import NavBar from "../common/navBar";
import Footer from "../common/footer";
import defaultTheme from "../../theme";

const Root = ({ items }) => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <NavBar items={items} />
      <main
        style={{
          backgroundColor: `${defaultTheme.colors.lightGray}`,
          // paddingBottom: "30px",
          // margin: "0",
        }}
      >
        <Outlet />
      </main>
      <Footer items={items} />
    </div>
  );
};

export default Root;
