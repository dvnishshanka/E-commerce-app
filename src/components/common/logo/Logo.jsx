import { Logo } from "./styles";
import { Link } from "react-router-dom";

const CompanyLogo = () => {
  return (
    <Logo>
      <Link to="/">FlexiCart</Link>
    </Logo>
  );
};

export default CompanyLogo;
