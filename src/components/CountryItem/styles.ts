import styled from 'styled-components';

export const CountryItem = styled.div`
  background-color: #fff;
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
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
  .data--area {
    padding: 10px 20px;
    p {
      font-weight: 500;
      font-size: 13px;
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
