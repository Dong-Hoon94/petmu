import { css } from "@emotion/react";

export const reset = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input:-ms-input-placeholder {
    color: #a8a8a8;
  }
  input::-webkit-input-placeholder {
    color: #a8a8a8;
  }
  input::-moz-placeholder {
    color: #a8a8a8;
  }

  html {
    font-size: 16px;
    line-height: 1.4;
  }

  body {
    font-size: 1rem;
    color: #000;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  ul,
  li {
    list-style: none;
  }
`;
