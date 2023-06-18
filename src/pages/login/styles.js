import styled from "@emotion/styled";

export const LoginWrap = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 10px;
  width: 500px;
  border-radius: 10px;
  box-shadow: 0px 0px 12px -3px rgb(0 0 0 / 20%);
  background-color: #fff;
  transform: translate(-50%, -50%);

/* input effect */
.login_container{
  width: 377px;
  height: 50px;
  position: relative;
  top: 0px;
  right: 5px;
  outline: none; 
}

.login_input_wrap .login_input {
  display: block;
  font-size: 15px;
  line-height: 1.5;
  width: 377px;
  height: 50px;
  padding-left: 10px;
  outline: none;
  border: none;
  pointer-events: auto;
  border: 1px solid lightgray;
  border-radius: 9px;
}

.login_input__label{
  position: relative;
  top: -6px;
  left: -3px;
  pointer-events: none;
  color: #D2D2D2;
}

.login_input_wrap {
  transition: 0.5s ease;
  position: relative;
  outline: none;

  &:hover,
  &:focus{
    transform: scale(1.1); //확대 모드
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    transition: 0.5s ease;
    box-sizing: border-box;
    pointer-events: none;
    transition: width 0.5s ease-in-out, 
                height 0.5s ease-in-out, 
                border 0s 0.5s ease-in-out;
    width: 0%;
    height: 0%;
  }

  &::before {
    top: 0;
    left: 0;
    border-left: 1px solid transparent;
    border-radius: 9px;
    border-top: 1px solid transparent;
  }

  &:after {
    bottom: 0;
    right: 0;
    border-right: 1px solid transparent;
    border-radius: 9px;
    border-bottom: 1px solid transparent;
  }

  &:hover::before,
  &:focus:before,
  &:hover::after,
  &:focus:after {
    width: 100%;
    height: 100%;
    transition: width 0.5s ease-in-out, 
                height 0.5s ease-in-out;
              }

  &:hover:before,
  &:focus:before {
    /* 1 */
    border-left: 2px solid #f28241; 
    border-top: 2px solid #f28241;  
    
  }

  &:hover:after,
  &:focus:after {
    /* 2 */
    border-right: 2px solid #f28241;
    border-bottom: 2px solid #f28241;
  }
}

.login_input {
  transition: 0.2s ease;
  margin-bottom: 10px;
  &:placeholder {
    visibility: hidden;
  }

/* &:valid ~ .fancy-input--label,
  &:not(&:placeholder-shown) ~ .fancy-input--label {
    opacity: 0; 입력하면 label 서서히 사라지기
  } */

  &:focus ~ .login_input__label,
  &:valid ~ .login_input__label{
    font-size: 16px;
    color: black;
    font-weight: 600;
    transform: translateX(-10px) translateY(-38px);
                //라벨 좌표 x: y: 이동
                /* translateX(-12px) translateY(-40px); 초기값*/ 
  }  
}


.login_input__label {
  opacity: 1;
  position: absolute;
  top: 12px;
  left: 15px;
  transition: 0.5s ease;
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
    width: 77%;
  }


  .login_pw {
    margin-top: 20px;
    width: 77%;

  }

  .login_input_wrap .login_input input{
    width: 100%;
    height: 50px;
    border-radius: 9px;
    margin-top: 10px;
    padding: 30px 10px;
    border: 1px solid lightgray;
    outline: none;
    position: relative;
    /* outline : 외곽선 스타일 */
  }

  .login_input_wrap .eyes {
    position: absolute;
    top: 1px;
    bottom: 0px;
    right: 22px;
    margin: auto;
    height: 30px;
    font-size: 22px;
    cursor: pointer;
  }

  .login_etc {
    padding: 15px;
    width: 410px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    position: relative;
    top: 15px;
    left: -3px;
  }

/* btn effect */
.btn-ami {
  cursor: pointer;
  letter-spacing: 2px;
  font-size: 16.2pt;
  width: 100%;
  height: 50px;
  position: relative;
  border: none;
  color: #fff;
  z-index: 1;
  transition: all 0.3s ease-in-out;
  border-radius: 5px;
  background: #f28241;
  overflow: hidden;
  transition: all 0.3s ease-in-out 0s;
}

.btn-ami:before {
  content: "";
  height: 0%;
  width: 0%;
  background: #4c6173;
  position: absolute;
  top: 50%;
  right: 50%;
  border-radius: 20px;
  z-index: -1;
  transform: translateX(50%) translateY(-50%) rotate(45deg);
}

.btn-ami:hover:before {
  animation: btn-ami 5s;
  background-color: #4c6173;
}

.btn-ami:hover {
  color: #f1f1f1;
  border-color: #4c6173;
  background-color: #4c6173;
  transition: background-color 0.5s ease-in-out 0.7s;
}

@keyframes btn-ami {
  0% {
    height: 0%;
    width: 0%;
  }

  25% {
    height: 1000%;
    width: 1000%;
  }

  50% {
    height: 500%;
    width: 500%;
  }

  75% {
    height: 100%;
    width: 100%;
  }

  100% {
    height: 0%;
    width: 0%;
  }

}

.btn-ami:focus {
  outline: none
}

  .submit {
    margin-top: 30px;
    width: 80%;
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
    background: yellow;
    border-radius: 9px;
    font-weight: 500;
  }

  .submit ul.sns_login .kakao:hover {
    opacity: 0.4;
    transition: all 1s;
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
    font-size: 15.7pt;
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
    padding: 0px 60px;
    letter-spacing: 1.2px;
  }
`;