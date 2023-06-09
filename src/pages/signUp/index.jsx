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
            <label htmlFor="id">ID</label>
          </div>

          <div className="input_wrap">
            <div className="input_main_wrap">
              <input
                type="text"
                name="id"
                id="id"
                className="login_idh"
                placeholder="아이디를 입력해주세요."
              />

              <div className="button_wrap">
                <button onClick={() => alert("중복확인 개발중")}>
                  중복 확인
                </button>
              </div>
            </div>
          </div>

          <div className="label">
            <label htmlFor="label_a Password">Password</label>
          </div>

          <div className="input_wrap">
            <div className="input_main_wrap">
              <input
                type="password"
                name="password"
                id="password"
                className="login_idh"
                placeholder="비밀번호를 입력해주세요."
              />
            </div>
          </div>

          <div className="label">
            <label htmlFor="Password_check">Confirm Password</label>
          </div>

          <div className="input_wrap">
            <div className="input_main_wrap">
              <input
                type="text"
                name="Password_check"
                id="Password_check"
                className="login_idh"
                placeholder="비밀번호를 한번 더 입력해주세요."
              />
            </div>
          </div>

          <div className="label">
            <label htmlFor="Nickname">Nickname</label>
          </div>
          
          <div className="input_wrap">
            <div className="input_main_wrap">
              <input
                type="text"
                name="Nickname"
                id="Nickname"
                className="login_idh"
                placeholder="닉네임을 입력해주세요."
              />

              <div className="button_wrap">
                <button onClick={() => alert("중복확인 개발중")}>
                  중복 확인
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="submit">
          <div className="login__submit">
            <button type="submit">회원가입</button>
          </div>
        </div>
      </form>
    </SignUpWrap>
  );
};

export default SignUp;
