import styled from 'styled-components';

export const CountryItem = styled.div<{ theme: string }>`
  background-color: ${(props) =>
    props.theme === 'light' ? '#FFF' : 'rgb(43, 55, 67)'};
  transition: all ease 0.2s;
  box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  a {
    text-decoration: none;
    color: #000;
  }
  .img--area {
    img {
      width: 100%;
      height: 150px;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
  .data--area {
    color: ${(props) => (props.theme === 'light' ? '#000' : '#FFF')};
    padding: 10px 20px;
    p {
      font-size: 13px;
      font-weight: 500;
      margin: 10px 0px;
      span {
        font-weight: 300;
      }
    }
    .country--name {
      font-size: 17px;
      margin: 10px 0px;
    }
  }

  @media (max-width: 768px) {
    .img--area {
      img {
        height: 180px;
      }
    }
  }
`;
