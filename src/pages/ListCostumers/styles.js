import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 28px;

  .description {
    display: flex;
    justify-content: space-between;
    margin-bottom: 33px;

    .description-text {
      display: flex;
      flex-direction: column;

      > strong {
        font-size: 20px;
        font-weight: 400;
        color: var(--secondary);
      }
      > span {
        font-size: 18px;
        font-weight: 300;
        color: var(--tertiary);
        margin-top: 14px;
      }
    }

    a > {
      button {
        width: 117px;
        height: 35px;
        font-size: 16px;
        margin-right: 36px;
      }
    }
  }

  > span {
    margin-top: 7px;
    font-size: 18px;
    font-weight: 300;
    color: var(--tertiary);
  }
`;

export const CustomerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid var(--border);
  margin-bottom: 26px;
  padding: 20px 33px;

  font-size: 18px;
  font-weight: 300;
  color: var(--tertiary);

  > div {
    display: flex;
    flex-direction: column;
    width: 36%;

    > strong {
      color: var(--tertiary);
      font-weight: 400;
    }
  }

  > button {
    width: 132px;
    height: 44px;
    font-size: 18px;
    &:hover {
      background: ${(props) =>
        props.outlined ? "transparent" : "var(--main-color)"};
      color: ${(props) =>
        props.outlined ? "var(--main-color)" : "var(--white)"};
      border: ${(props) =>
        props.outlined ? "1px solid var(--main-color)" : "none"};
    }
  }

  .status {
    display: flex;
    flex-direction: row;
    align-items: center;

    .status-sign {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      flex-shrink: 0;
      margin-right: 8px;

      &.status-0 {
        background: var(--disable);
      }
      &.status-1 {
        background: var(--active);
      }
      &.status-2 {
        background: var(--inactive);
      }
      &.status-3 {
        background: var(--waiting);
      }
    }
  }
`;
