import { SignUpWrap } from "./styles";

const SignUp = () => {
  return (
    <SignUpWrap>
      <div className="SignUpWrap_text">
        <h2>회원가입</h2>
      </div>

      {/* <!-- 회원가입 정보  --> */}
      <form className="SignUpWrap" action="/" method="post">
        <div className="SignUpWrap_info">
          <div className="label">
            <label></label>
          </div>

          <div className="wrapper">
            <div className="fancy-input">
              <div>
                <input
                  className="fancy-input--input"
                  type="text"
                  required
                  //  span 속성 애니메이션
                />

                <label className="fancy-input--label" htmlFor="email">
                  이메일
                </label>
              </div>

              <div className="button_wrap">
                <button onClick={() => alert("중복확인 개발중")}>
                  중복 확인
                </button>
              </div>
            </div>
          </div>

          <div className="label">
            <label></label>
          </div>

          <div className="wrapper">
            <div className="fancy-input">
              <input
                className="fancy-input--input"
                type="password"
                required //  span 속성 애니메이션
              />
              <label className="fancy-input--label" htmlFor="email">
                <label>비밀번호</label>
              </label>
            </div>
          </div>

          <div className="label">
            <label></label>
          </div>

          <div className="wrapper">
            <div className="fancy-input">
              <input
                className="fancy-input--input"
                type="password"
                // autoCapitalize="off"
                required //  span 속성 애니메이션
              />
              <label className="fancy-input--label" htmlFor="email">
                <label>비밀번호 확인</label>
              </label>
            </div>
          </div>

          <div className="label">
            <label></label>
          </div>

          <div className="wrapper">
            <div className="fancy-input">
              <input
                className="login_idh fancy-input--input"
                type="text"
                // autoCapitalize="off"
                required
              />

              <label className="fancy-input--label" htmlFor="email">
                <label>닉네임</label>
              </label>

              <div className="button_wrap">
                <button onClick={() => alert("중복확인 개발중")}>
                  중복 확인
                </button>
              </div>
            </div>
          </div>

          <div className="label">
            <label></label>
          </div>

          <div className="submit">
            <div className="login__submit">
              <button type="submit">회원가입</button>
            </div>
          </div>
        </div>
      </form>
    </SignUpWrap>
  );
};

export default SignUp;
