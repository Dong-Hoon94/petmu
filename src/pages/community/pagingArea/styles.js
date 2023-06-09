import styled from "@emotion/styled";

export const Pagination = styled.div`
  margin-top: 45px;

  ul {
    gap: 10px;
    display: flex;
    justify-content: center;
    padding: 10px 0;
    height: 55px;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    border: 1px solid #f1f3f5;
    &:hover {
      border: 1px solid #ced4da;
    }
    & a {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
