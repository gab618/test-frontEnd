import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 28px;

  .description {
    display: flex;
    justify-content: space-between;

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
  }

  form {
    margin-top: 34px;
    display: flex;
    flex-direction: column;

    input {
      background: var(--white);
      border: 1px solid var(--input-border);
      border-radius: 5px;

      margin-top: 20px;
      height: 50px;
      max-width: 264px;

      color: var(--primary);
      font-size: 18px;
      font-weight: 400;

      padding: 12px 15px 13px 15px;
      &::placeholder {
        color: var(--tertiary);
        font-size: 18px;
        font-weight: 300;
      }
    }

    select {
      background: var(--white);
      border: 1px solid var(--input-border);
      border-radius: 5px;

      margin-top: 20px;
      height: 50px;
      max-width: 264px;

      color: var(--tertiary);
      font-size: 18px;
      font-weight: 300;

      padding: 12px 15px 13px 15px;

      &:focus {
        color: var(--primary);
        font-weight: 400;
      }
    }
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 75px;

  button {
    width: 132px;
    height: 44px;
    margin-right: 16px;
  }
`;
