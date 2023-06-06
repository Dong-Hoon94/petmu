import styled from "@emotion/styled";

export const LogoWrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo-inner {
    padding: 18px 70px 10px;
  }

  .logo-icon {
    display: inline-block;
    width: 65px;
  }

  .logo {
    display: inline-block;
    position: relative;
    left: -8px;
    top: -4px;
    width: 35px;
  }

  img {
    width: 100%;
  }
`;
