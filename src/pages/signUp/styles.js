import styled from "@emotion/styled";

export const SignUpWrap = styled.div`
  position: absolute;
  left: 50%;
  top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 60px 25px 63px;
  width: 500px;
  border-radius: 10px;
  box-shadow: 0px 0px 12px -3px rgb(0 0 0 / 20%);
  background-color: #fff;
  transform: translateX(-50%);

  h2 {
    color: #4c6173;
    font-size: 2em;
    font-weight: 700;
    /* em : 자신의 기본 폰트 (x N em) 예) 2em -> 기본폰트 16px x 2 */
  }

  .SignUpWrap {
    width: 100%;
  }
  .SignUpWrap_info {
    margin-top: 20px;
    width: 100%;
  }

  .input_main_wrap {
    width: 300px;
  }
  .input_wrap {
    position: relative;
    display: flex;
    gap: 15px;
    height: 50px;
    top: -10px;
  }

  .SignUpWrap_info .input_main_wrap {
    width: 100%;
    height: 100%;
    border-radius: 9px;
    margin-top: 10px;
    padding: 8px 105px 8px 8px;
    position: relative;
    border: 1px solid lightgray;
    outline: none;
    top: 0;
    bottom: 0;
    right: 5px;
  }
  .input_main_wrap input {
    width: 65%;
    position: absolute;
    left: 20px;
    top: 16px;
    border: none;
    outline: none;
  }

  .label {
  position: relative;
  top: 0px;
  left:-5px;
  }
  
  .SignUpWrap_info .label {
    margin-top: 20px;
    margin-bottom: 10px;
    font-weight: 600;
  }
  
  .button_wrap {
    width: 100px;
    height: 100%;
    border-radius: 6px;
  }

  .button_wrap button {
    width: 92px;
    height: 50px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    position: absolute;
    top: -2px;
    bottom: -2px;
    right: -1px;
    margin: auto 0;
    border: none;
    color: white;
    cursor: pointer;
    background: #f28241;
    font-size: 15px;
  }

  .SignUpWrap_info button:hover {
    background: #4c6173;
    transition: 0.8s;
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
    position: relative;
    /* outline : 외곽선 스타일 */
  }

  .submit {
    margin-top: 30px;
    width: 80%;
  }
  
  .submit {
    margin-top: 35px;
    width: 100%;
  }

  .submit .login__submit button {
    width: 100%;
    height: 50px;
    border: 0;
    outline: none;
    position: relative;
    left: -5px;
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
`;
