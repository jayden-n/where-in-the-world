import styled from 'styled-components';

export const Header = styled.header<{ theme: string }>`
  height: 90px;
  background-color: ${(props) =>
    props.theme === 'light' ? '' : 'rgb(43, 55, 67)'};
  color: ${(props) => (props.theme === 'light' ? '' : '#FFF')};
  transition: all ease 0.2s;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.15);

  .container {
    display: flex;
    height: 90px;
    width: 1024px;
    margin: auto;
    justify-content: space-between;
    align-items: center;

    p {
      cursor: pointer;
    }
    .toggle--light {
      background-color: #ffffff;
      color: #14b8a6;
      cursor: pointer;
      display: flex;
      align-items: center;
      margin-top: 0.5rem;
      padding: 10px 19px;
      border: 0.5px solid #eeeeee;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
      border-radius: 50px;
    }
    .toggle--dark {
      background-color: #26262a;
      cursor: pointer;
      display: flex;
      align-items: center;
      margin-top: 0.5rem;
      padding: 10px 19px;
      border: 1px solid #2c323d;
      border-radius: 50px;
    }
  }

  @media (max-width: 1024px) {
    & {
      padding: 0px 20px;

      .container {
        width: auto;
      }
    }
  }

  @media (max-width: 767px) {
    .container {
      height: 100%;
      h1 {
        font-size: 17px;
      }
      p {
        font-size: 14px;
      }
    }
  }
`;
