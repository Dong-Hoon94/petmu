import { useState } from "react";
import { SignUpWrap } from "./styles";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";



const SignUp = () => {
  const [isShow, setIsShow] = useState(false);
  const onShowPassword = () => {
    setIsShow((prev) => !prev);
  };
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

          <div className="SignUpWrap_wrapper">
            <div className="SignUpWrap-input_main">
              <div>
                <input
                  className="SignUpWrap-input--input"
                  type="text"
                  required
                  //  span 속성 애니메이션
                />

                <label className="SignUpWrap-input--label" htmlFor="email">
                  이메일
                </label>
              </div>

              <div className="button_wrap">
                <button
                  className="Collision"
                  onClick={() => alert("중복확인 개발중")}
                >
                  중복 확인
                </button>
              </div>
            </div>
          </div>

          <div className="label">
            <label></label>
          </div>

          <div className="SignUpWrap_wrapper">
            <div className="SignUpWrap-input_main">
              <input
                
                className="SignUpWrap-input--input"
                type={`${isShow ? "text" : "password"}`}
                required //  span 속성 애니메이션
              />

             <div className="eyes" onClick={onShowPassword}>
                {isShow ? (
                  <FaRegEye size={20} color="#495057" />
                ) : (
                  <FaRegEyeSlash size={20} color="lightgray" />
                )}
              </div>

              <label className="SignUpWrap-input--label" htmlFor="email">
                <label>비밀번호</label>
              </label>
            </div>
          </div>
          
          <div className="label">
            <label></label>
          </div>

          <div className="SignUpWrap_wrapper">
            <div className="SignUpWrap-input_main">
              <input
                
                className="SignUpWrap-input--input"
                type={`${isShow ? "text" : "password"}`}
                required //  span 속성 애니메이션
              />

             <div className="eyes" onClick={onShowPassword}>
                {isShow ? (
                  <FaRegEye size={20} color="#495057" />
                ) : (
                  <FaRegEyeSlash size={20} color="lightgray" />
                )}
              </div>

              <label className="SignUpWrap-input--label" htmlFor="email">
                <label>비밀번호 확인</label>
              </label>
            </div>
          </div>
          

          <div className="label">
            <label></label>
          </div>

          <div className="SignUpWrap_wrapper">
            <div className="SignUpWrap-input_main">
              <input
                className="SignUpWrap-input--input"
                type="text"
                // autoCapitalize="off"
                required
              />

              <label className="SignUpWrap-input--label" htmlFor="email">
                <label>닉네임</label>
              </label>

              <div className="button_wrap">
                <button
                  className="Collision"
                  onClick={() => alert("중복확인 개발중")}
                >
                  중복 확인
                </button>
              </div>
            </div>
          </div>

          <div className="label">
            <label></label>
          </div>

          <div>
            <div className="submit">
              <button className="btn-ami">
                <span>회원가입</span>
              </button>

              {/* <div className="login__submit">
                <button className="button--moema">회원가입</button>
              </div> 유효성 검사 틀릴 시 사용*/}
            </div>
          </div>
        </div>
      </form>
    </SignUpWrap>
  );
};

export default SignUp;
