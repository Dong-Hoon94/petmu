import { Link } from "react-router-dom";
import Nav from "./nav";
import { LogoWrap } from "./styles";

const SideBar = () => {
  return (
    <>
      <LogoWrap className="logo-wrap">
        <Link to="/" className="logo-inner">
          <span className="logo-icon">
            <img src="./images/logo_imge.png" />
          </span>
          <span className="logo">
            <img src="./images/logo_text.png" />
          </span>
        </Link>
      </LogoWrap>
      <Nav/>
    </>
  );
};

export default SideBar;
