import PropTypes from "prop-types";
import SideBar from "../components/sideBar";
import { MainWrap } from "./styles";

const MainLayout = ({ children }) => {
  return (
    <MainWrap>
      <div className="container">
        <SideBar />
        <main>
          <div className="main_container">
            <div className="contents">{children}</div>
          </div>
        </main>
      </div>
    </MainWrap>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
