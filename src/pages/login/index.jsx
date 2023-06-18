import { useState } from "react";
import { LoginWrap } from "./styles";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const Login = () => {
  const [isShow, setIsShow] = useState(false);
  const onShowPassword = () => {
    setIsShow((prev) => !prev);
  };
  return (
    <LoginWrap className="login-wrap">
      <div className="login_main">
        <h2>로그인</h2>
      </div>

      {/* <!-- 로그인 아이디  --> */}
      <div className="login_id">
        <div className="login_container">
          <div className="login_input_wrap">
            <div className="login_id">
              <input type="text" className="login_input" required />
              <label className="login_input__label" htmlFor="email">
                <label>아이디</label>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="login_pw">
        <div className="login_container">
          <div className="login_input_wrap">
            <div className="login_pw">
              <input
                type={`${isShow ? "text" : "password"}`}
                id="password"
                className="login_input "
                required
              />

              <div className="eyes" onClick={onShowPassword}>
                {isShow ? (
                  <FaRegEye size={20} color="#495057" />
                ) : (
                  <FaRegEyeSlash size={20} color="lightgray" />
                )}
              </div>

              <label className="login_input__label" htmlFor="email">
                <label>비밀번호</label>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="login_etc">
          <div className="checkbox">
            <input type="checkbox" name="Remenber" /> 자동 로그인
          </div>

          {/*  ID & PW find  */}

          <div className="forgot_id">
            <a href="">아이디 찾기</a>
          </div>

          <div className="forgot_pw">
            <a href="">비밀번호 찾기 </a>
          </div>
      </div>

      <div className="submit">
        <button className="btn-ami">
          <span>로그인</span>
        </button>

        <ul className="sns_login">
          <li className="kakao">
            <a href="javascript:void(0)">
              <span className="kakao_icon">
                <img src="./images/kakao_logo.png" alt="" />
              </span>
              <span className="login_text">카카오로 로그인</span>
            </a>
          </li>
        </ul>
      </div>
    </LoginWrap>
  );
};

export default Login;
