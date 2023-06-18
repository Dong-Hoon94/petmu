import styled from "@emotion/styled";

export const SignUpWrap = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:27px 57px 25px 57px;
  width: 500px;
  border-radius: 10px;
  box-shadow: 0px 0px 12px -3px rgb(0 0 0 / 20%);
  background-color: #fff;
  transform: translate(-50%, -50%);

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
  left: -4px;
  }

  .SignUpWrap_info .label {
    margin: 0px 0 45px 0px;
    font-weight: 600;
  }

  .SignUpWrap-input_main .eyes {
    position: absolute;
    top: 1px;
    bottom: 0px;
    right: 22px;
    margin: auto;
    height: 30px;
    font-size: 22px;
    cursor: pointer;
  }

   /* button effect */
  .button_wrap button {
    width: 100px;
    height: 50px;
    border-top-right-radius: 9px;
    border-bottom-right-radius: 9px;
    position: absolute;
    top: -4px;
    bottom: -3px;
    right: -1px;
    margin: auto 0;
    border: none;
    outline: none;
    color: white;
    cursor: pointer;
    background: #f28241;
    font-size: 15px;
    z-index: 1; //button border 가리기
  }
  
  button.Collision {
    color: #fff;
    height: 50px;
    width: 100px;
    display: block;
    font-weight: bold;
    position: absolute;
    overflow: hidden; 
 
  }
  
  button.Collision::before,
  button.Collision::after {
    position: absolute;
    content: '';
    width: 20px;
    height: 20px;
    z-index: -1; //button 텍스트 보이기
    background: #4c6173;
    top:50%;
    border-radius:50%;
   

  }

  button.Collision::before {
    transform: translate(50%, -50%);
    left: -30px;
  }

  button.Collision::after {
    transform: translate(50%, -50%);
    right: -15px;
 
  }

  button.Collision:hover::before {
    animation: move-left 0.8s both;
    animation-direction: alternate;
  }

  button.Collision:hover::after {
    animation: move-right 0.8s both;
    animation-direction: alternate;
  }

   /* @keyframes 
  https://webclub.tistory.com/621 참고*/
   @keyframes move-left {
    0% {
      left: -20px;
    }
    50% {
      left: 30%;
      width: 20px;
      height:20px;
    }
    100% {
      left: -50%;
      width:150px;
      height:150px;
    }
  }  
 
   @keyframes move-right {
    0% {
      right: -30px;
    }
    50% {
      right: 50px;
      width: 20px;
      height:20px;
    }
    100% {
      right: 50px;
      width: 150px;
      height:150px;
    }
   }
  
  /* input effect */
 .SignUpWrap_wrapper {
  width: 377px;
  height: 50px;
  position: relative;
  top: 0px;
  right: 5px;
  outline: none;
   
}

.SignUpWrap-input_main .SignUpWrap-input--input {
  display: block;
  font-size: 15px;
  line-height: 1.5;
  width: 377px;
  height: 50px;
  padding-left: 10px;
  position: r;
  outline: none;
  border: none;
  pointer-events: auto;
   /* box-shadow: 5px 5px 10px rgba(0, 0, 0.2, 0.2); */
  border: 1px solid lightgray;
  border-radius: 9px;
}

.SignUpWrap-input--label{
  position: relative;
  top: -6px;
  left: -3px;
  pointer-events: none;
  color: #D2D2D2;
}

.SignUpWrap-input_main {
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

.SignUpWrap-input--input {
  transition: 0.2s ease;

  &:placeholder {
    visibility: hidden;
  }

/* &:valid ~ .fancy-input--label,
  &:not(&:placeholder-shown) ~ .fancy-input--label {
    opacity: 0; 입력하면 label 서서히 사라지기
  } */

  &:focus ~ .SignUpWrap-input--label,
  &:valid ~ .SignUpWrap-input--label{
    font-size: 16px;
    color: black;
    font-weight: 600;
    transform: translateX(-10px) translateY(-38px);
                //라벨 좌표 x: y: 이동
                /* translateX(-12px) translateY(-40px); 초기값*/ 
  }  
}

.SignUpWrap-input--label {
  opacity: 1;
  position: absolute;
  top: 12px;
  left: 15px;
  transition: 0.5s ease;
}

 /* Moema
.button--moema {
  background: #f28241;
  color: #fff;
  transition: background-color 0.3s, color 0.3s;
}

.button--moema::before {
  content: '';
  position: absolute;
  top: -20px;
  left: -20px;
  bottom: -20px;
  right: -20px;
  background: inherit;
  z-index: -1;
  opacity: 0.4;
  -webkit-transform: scale3d(0.8, 0.5, 1);
  transform: scale3d(0.8, 0.5, 1);
}
.button--moema:hover {
  -webkit-transition: background-color 0.1s 0.3s, color 0.1s 0.3s;
  transition: background-color 0.1s 0.3s, color 0.1s 0.3s;
  -webkit-animation: anim-moema-1 0.3s forwards;
  animation: anim-moema-1 0.3s forwards; //콩콩 뛰는 모션
}
.button--moema:hover::before {
  -webkit-animation: anim-moema-2 0.3s 0.3s forwards;
  animation: anim-moema-2 0.3s 0.3s forwards;
}
@-webkit-keyframes anim-moema-1 {
  60% {
    -webkit-transform: scale3d(0.8, 0.8, 1);
    transform: scale3d(0.8, 0.8, 1);
  }
  85% {
    -webkit-transform: scale3d(1.1, 1.1, 1);
    transform: scale3d(1.1, 1.1, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes anim-moema-1 {
  60% {
    -webkit-transform: scale3d(0.8, 0.8, 1);
    transform: scale3d(0.8, 0.8, 1);
  }
  85% {
    -webkit-transform: scale3d(1.1, 1.1, 1);
    transform: scale3d(1.1, 1.1, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@-webkit-keyframes anim-moema-2 {
  to {
    opacity: 0;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes anim-moema-2 {
  to {
    opacity: 0;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
} 유효성 검사 틀릴 시 사용 */

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
    margin-top: 35px;
    width: 98%;
  }

  .submit button {
    width: 100%;
    height: 50px;
    border: none;
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