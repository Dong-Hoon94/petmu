import { Link } from "react-router-dom";
import { ButtonWrap, CommunityHeader, MenuWrap } from "./styles";
import { BiAddToQueue } from "react-icons/bi";
const ComHeader = () => {
  const onMenuClick = (e) => {
    e.preventDefault();
    console.log(e.target.textContent);
  };
  return (
    <CommunityHeader>
      <div className="title">
        <span>커뮤니티</span>
      </div>
      <MenuWrap>
        <ul>
          <li>
            <Link to="/" onClick={onMenuClick}>
              자유
            </Link>{" "}
          </li>
          <li>
            <Link to="/" onClick={onMenuClick}>
              메뉴1
            </Link>{" "}
          </li>
          <li>
            <Link to="/" onClick={onMenuClick}>
              메뉴2
            </Link>{" "}
          </li>
          <li>
            <Link to="/" onClick={onMenuClick}>
              메뉴3
            </Link>{" "}
          </li>
        </ul>
      </MenuWrap>
      <ButtonWrap>
        <div className="btn-container">
          <button>
            <BiAddToQueue size={25} />
          </button>
        </div>
      </ButtonWrap>
    </CommunityHeader>
  );
};

export default ComHeader;
