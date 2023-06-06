import styled from "@emotion/styled";

export const NavWap = styled.nav`
  padding: 120px 0;
  min-width: 230px;
  background-color: #ebeaf3;
  display: flex;
  flex-direction: column;
  align-items: center;

  .nav-container {
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
  }

  .menu {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .menu li {
    padding: 10px 0;
    width: 100%;
    text-align: center;
    cursor: pointer;
    font-size: 20px;
    transition: background-color 0.4s ease-out;
  }

  .menu li:hover {
    background-color: #fafafa;
  }

  .gnb-menu {
    flex: 1;
  }
  .user-menu {
    flex: 0;
  }
`;
