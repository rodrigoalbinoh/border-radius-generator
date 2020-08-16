import styled, { css } from 'styled-components';

interface BoxProps {
  topLeft?: number;
  topRight?: number;
  bottomLeft?: number;
  bottomRight?: number;
  metric: string;
}

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ConfigsContent = styled.div`
  padding: 15px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    div {
      display: inline-block;
      margin-bottom: 15px;
      width: 100%;

      label {
        margin-right: 5px;
        color: #e1e1e6;
      }

      input,
      select {
        background: rgb(25, 22, 34);
        border: 1px solid #ff79c6;
        padding: 5px;
        color: #fff;
        width: 100%;
      }

      @media only screen and (max-width: 425px) {
        input {
          width: 100%;
          margin-top: 5px;
        }
      }
    }
  }

  code {
    background: rgb(25, 22, 34);
    padding: 30px;
    border-radius: 25px;
    margin-top: 25px;

    p {
      color: #ff79c6;

      & + p {
        margin-top: 5px;
      }

      span {
        color: #ff79c6;

        &.property {
          color: #988bc7;
        }

        &.value {
          color: #8be9fd;
        }

        &.white {
          color: #fff;
        }
      }
    }
  }
`;

export const BoxContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 425px) {
    margin-bottom: 25px;
  }
`;

export const Box = styled.div<BoxProps>`
  background: #413756;
  width: 200px;
  height: 200px;

  ${(props) =>
    css`
      border-top-left-radius: ${`${props.topLeft}${props.metric}`};
    `}

  ${(props) =>
    css`
      border-top-right-radius: ${`${props.topRight}${props.metric}`};
    `}

  ${(props) =>
    css`
      border-bottom-left-radius: ${`${props.bottomLeft}${props.metric}`};
    `}

  ${(props) =>
    css`
      border-bottom-right-radius: ${`${props.bottomRight}${props.metric}`};
    `}
`;
