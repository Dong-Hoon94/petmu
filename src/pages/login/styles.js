import styled from "@emotion/styled";

export const LoginWrap = styled.div`
  position: absolute;
  left: 50%;
  top: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 10px;
  width: 500px;
  height: 505px;
  border-radius: 10px;
  box-shadow: 0px 0px 12px -3px rgb(0 0 0 / 20%);
  background-color: #fff;
  transform: translateX(-50%);

  .login {
    height: 505px;
    padding-bottom: 50px;
    min-width: 430px;
    background: white;
    box-shadow: 0px 0px 12px -3px rgb(0 0 0 / 20%);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
  }

  .login_main span {
    position: fixed;
    top: 20%;
    right: 45%;
  }

  h2 {
    color: #4c6173;
    font-size: 2em;
    font-weight: 700;
    /* em : 자신의 기본 폰트 (x N em) 예) 2em -> 기본폰트 16px x 2 */
  }

  .login_sns {
    padding: 20px;
    display: flex;
  }

  .login_sns li {
    padding: 0px 15px;
  }

  .login_sns a {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 50px;
    background: white;
    font-size: 20px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4), -3px -3px 5px rgba(0, 0, 0, 0.1);
  }

  .login_id {
    margin-top: 20px;
    width: 80%;
  }

  .login_id input {
    width: 100%;
    height: 50px;
    border-radius: 9px;
    margin-top: 10px;
    padding: 8px 20px;
    border: 1px solid lightgray;
    outline: none;
  }

  .login_pw {
    margin-top: 20px;
    width: 80%;
  }

  .login_pw input {
    width: 100%;
    height: 50px;
    border-radius: 9px;
    margin-top: 10px;
    padding: 0px 20px;
    border: 1px solid lightgray;
    outline: none;
    /* outline : 외곽선 스타일 */
  }

  .forgot_pw a {
    font-weight: 600;
  }

  .forgot_pw a:hover {
    border-bottom: 1px solid lightgray;
  }

  .login_etc {
    padding: 15px;
    width: 80%;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
  }

  .submit {
    margin-top: 30px;
    width: 80%;
  }

  .submit .login__submit button {
    width: 100%;
    height: 50px;
    border: 0;
    outline: none;
    border-radius: 9px;
    background: #f28241;
    color: white;
    font-size: 1.2rem;
    letter-spacing: 2px;
    cursor: pointer;
  }

  .submit .login__submit button:hover {
    background: #4c6173;
    transition: 0.8s;
  }

  .submit .login__submit button:hover {
    background: #4c6173;
    transition: 0.8s;
  }

  .submit .kakao {
    margin-top: 12px;
  }

  .submit .sns_login {
    position: relative;
  }

  .submit .sns_login .kakao {
    width: 100%;
    height: 50px;
  }

  .submit ul.sns_login .kakao {
    position: absolute;
    background: yellow;
    border-radius: 9px;
    font-weight: 500;
  }

  .submit ul.sns_login .kakao:hover {
    opacity: 0.7;
  }

  .submit ul.sns_login .kakao a {
    display: flex;
    align-items: center;
    padding: 0 10px;
    height: 100%;
    line-height: 42px;
  }

  .submit ul.sns_login .kakao span {
    letter-spacing: 2px;
    font-size: 1.2rem;
    font-family: Arial;
  }

  ul.sns_login .kakao .kakao_icon {
    width: 40px;
    height: 40px;
    font-weight: 500;
  }

  ul.sns_login .kakao .kakao_icon img {
    width: 100%;
    height: 100%;
  }

  ul.sns_login .kakao .login_text {
    padding: 0 40px;
    letter-spacing: 1.2px;
  }
`;
