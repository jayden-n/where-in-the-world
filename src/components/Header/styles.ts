import styled from 'styled-components';
export const Header = styled.header`
  height: 90px;
  box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.2);
  .container {
    display: flex;
    width: 1024px;
    margin: auto;
    justify-content: space-between;
    align-items: center;

    p {
      cursor: pointer;
    }
  }
`;
