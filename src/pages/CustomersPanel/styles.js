import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 1076px;
  margin: 0 auto;
`;

export const Title = styled.div`
  margin-top: 99px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 28px;
  border-bottom: 1px solid var(--border);

  > img {
    width: 37px;
    height: 37px;
    margin-right: 21px;
  }

  > h2 {
    font-size: 28px;
    line-height: 34px;
    font-weight: 400;
    color: var(--primary);
  }
`;
