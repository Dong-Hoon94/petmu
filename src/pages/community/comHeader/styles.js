import styled from "@emotion/styled";

export const CommunityHeader = styled.header`
  .title {
    font-size: 24px;
  }
`;

export const MenuWrap = styled.nav`
  width: 100%;
  padding-bottom: 30px;

  ul {
    display: flex;
    gap: 20px;
    padding: 25px 0;
  }

  li {
    position: relative;
    display: flex;
    justify-content: center;
    align-content: center;
    width: 90px;
    box-shadow: 0px 0px 12px -3px rgb(0 0 0 / 10%);
    border-radius: 8px;
    font-size: 18px;
    transition: all 0.3s ease-in-out;
    a {
      display: block;
      padding: 5px 8px;
      text-align: center;
      width: 100%;
    }

    /* &::after {
      content: '';
      position: absolute;
      left: 0%;
      width: 100%;
      height: 100%;
      background: red;
    } */
    &:hover {
      box-shadow: 0px 0px 12px -3px rgb(0 0 0 / 30%);
    }
  }
`;

export const ButtonWrap = styled.div`
width: 100%;
position: relative;

.btn-container {
  position: absolute;
  right: 0px;
  bottom: 9px;
  width: 90px;

  }
  button {
    border-radius: 8px;
    display: block;
    padding: 5px 8px;
    width: 100%;
    text-align: center;
    border: none;
    background: #f8f9fa;
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
    box-shadow: 0px 0px 12px -3px rgb(0 0 0 / 10%);
  }
  &:active {
    position: relative;
    top: 3px;
  }
`;
