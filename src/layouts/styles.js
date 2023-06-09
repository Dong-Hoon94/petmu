import styled from "@emotion/styled";

export const MainWrap = styled.div`
  position: relative;
  width: 100%;

  .container {
    display: flex;
    height: 100vh;
  }

  main {
    flex: 1;
    width: 100%;
    min-width: 680px;
    background-color: #fafafa;
  }

  .main_container {
    padding: 25px;
  }

  .contents {
    position: relative;
    margin: 0 auto;
  }
`;
