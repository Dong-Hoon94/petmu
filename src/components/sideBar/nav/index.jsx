import { Link } from "react-router-dom";
import { NavWap } from "./styles";

const Nav = () => {
  return (
    <NavWap>
      <div className="nav-container">
        {/* <!-- <div class="seach_wrap">
        <div class="seach_info">
          <input type="text" value="" placeholder="검색어 입력">
          <button>검색</button>
        </div> -->
      <!-- </div> --> */}

        <div className="gnb-menu">
          <ul className="menu">
            <li>
              <Link to="/community">커뮤니티</Link>
            </li>
            <li>갤러리</li>
            <li>주변병원 찾기</li>
            <li>
              <Link to="/my">마이페이지</Link>
            </li>
          </ul>
        </div>
        <div className="user-menu">
          <ul className="menu">
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>
            <Link to="/signup">회원가입</Link>
            </li> 
          </ul>
        </div>
      </div>
    </NavWap>
  );
};

export default Nav;
