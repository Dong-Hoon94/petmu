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

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  h2 {
    color: #4c6173;
    font-size: 2em;
    font-weight: 700;
    position: relative;
    top: 10px;
    /* em : 자신의 기본 폰트 (x N em) 예) 2em -> 기본폰트 16px x 2 */
  }

  .SignUpWrap {
    width: 100%;
  }
  .SignUpWrap_info {
    margin-top: 50px;
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
    left: 40px;
    top: 10px;
    border: none;
    outline: none;
  }

  .label {
  position: relative;
  top: 0px;
  left:-4px;
  }

  .SignUpWrap_info .label {
    margin: 0px 0 45px 0px;
    font-weight: 600;
  }
  
  .button_wrap button {
    width: 92px;
    height: 50px;
    border-top-right-radius: 9px;
    border-bottom-right-radius:9px;
    position: absolute;
    top: -2px;
    bottom: -2px;
    right: 0;
    margin: auto 0;
    border: none;
    color: white;
    cursor: pointer;
    background: #f28241;
    font-size: 15px;
  }

  .button_wrap button:hover {
    opacity: 0.5;
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


  /* input effect */
 .wrapper {
  width: 377px;
  height: 50px;
  display: flex;
  flex-direction: column;;
  justify-content: space-between;
  position: relative;
    top: 0px;
    right: 6px;
}


.fancy-input .fancy-input--input {
  display: block;
  font-size: 14px;
  line-height: 1.5;
  width: 377px;
  height: 50px;
  padding-left: 10px;
  outline: none;
  border: none;
  pointer-events: auto;
   /* box-shadow: 5px 5px 10px rgba(0, 0, 0.2, 0.2); */
  border: 1px solid lightgray;
  border-radius: 9px;
}

.fancy-input--label{
  position: relative;
  top: -6px;
  left: -3px;
  pointer-events: none;
}

.fancy-input .op .fancy-input--input    {
  border: 1px solid red;
  width: 100px;
}
.fancy-input {
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

.fancy-input--input {
  transition: 0.2s ease;

  &:placeholder {
    visibility: hidden;
  }

/* &:valid ~ .fancy-input--label,
  &:not(&:placeholder-shown) ~ .fancy-input--label {
    opacity: 0;
  } */

  &:focus ~ .fancy-input--label,
  &:valid ~ .fancy-input--label{
    font-size: 16px;
    color: black;
    font-weight: 600;
    transform: translateX(-10px) translateY(-38px);
                //라벨 좌표 x: y: 이동
                /* translateX(-12px) translateY(-40px); 초기값*/ 
  }  
}


.fancy-input--label {
  opacity: 1;
  color: #D2D2D2;
  position: absolute;
  z-index: 1;
  top: 12px;
  left: 15px;
  transition: 0.5s ease;
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
