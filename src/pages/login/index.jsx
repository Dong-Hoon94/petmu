import { LoginWrap } from "./styles"

const Login = () => {
  return (
    <LoginWrap className="login-wrap">
      <div className="login_main">
        <h2>로그인</h2>
      </div>

      {/* <!-- 로그인 아이디  --> */}
      <div className="login_id">
        <h4>ID </h4>
        <input type="text" name="id" id="id" className="login_idh" placeholder="ID" />
      </div>
      <div className="login_pw">
        <h4>Password</h4>
        <input type="password" id="password" className="login_pwh" placeholder="Password" />
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
        <div className="login__submit">
          <button type="submit">로그인</button>
        </div>

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
  )
}

export default Login