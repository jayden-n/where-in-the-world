import styled from 'styled-components';
export const CountriesArea = styled.main`
  min-height: calc(100vh) - 90px;
  .countries {
    display: grid;
    width: 1024px;
    margin: auto;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
  }
  @media (min-width: 740px) and (max-width: 1023px) {
    & {
      img {
        width: 340px;
        height: 200px;
      }

      .data--area {
        h1 {
          font-size: 28px;
        }

        .data--firstArea {
          p,
          span {
            font-size: 14px;
          }
        }

        .border--area {
          p,
          span,
          a {
            font-size: 14px;
          }
        }
      }
    }
  }

  @media (min-width: 618px) and (max-width: 739px) {
    img {
      width: 280px;
      height: 180px;
    }
    .data--area {
      h1 {
        font-size: 28px;
      }

      .data--firstArea {
        p,
        span {
          font-size: 14px;
        }
      }

      .border--area {
        p,
        span,
        a {
          font-size: 14px;
        }
      }
    }
  }

  @media (min-width: 441px) and (max-width: 617px) {
    & {
      grid-template-columns: 1fr;

      img {
        width: 280px;
        height: 180px;
        margin: auto;
      }

      .data--area {
        width: 280px;
        margin: auto;
        margin-top: 30px;

        .data--firstArea {
          grid-template-columns: 1fr;

          .topLevel {
            margin-top: 40px;
          }
        }

        .border--area {
          .borders {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      }
    }
  }

  @media (max-width: 440px) {
    & {
      grid-template-columns: 1fr;

      img {
        width: 280px;
        height: 180px;
        margin: auto;
      }

      .data--area {
        width: 280px;
        margin: auto;
        margin-top: 30px;

        h1 {
          font-size: 17px;
        }

        .data--firstArea {
          grid-template-columns: 1fr;
          p,
          span {
            font-size: 12px;
          }

          .topLevel {
            margin-top: 40px;
          }
        }

        .border--area {
          .borders {
            grid-template-columns: repeat(3, 1fr);
          }
          p,
          span,
          a {
            font-size: 14px;
          }
        }
      }
    }
  }
`;
