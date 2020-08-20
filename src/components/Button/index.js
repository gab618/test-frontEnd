import styled from "styled-components";
import { lighten } from "polished";

export default styled.button`
  background: ${(props) =>
    props.outlined ? "transparent" : "var(--main-color)"};
  color: ${(props) => (props.outlined ? "var(--main-color)" : "var(--white)")};
  border: ${(props) =>
    props.outlined ? "1px solid var(--main-color)" : "none"};
  /* padding: 60px; */
  text-align: center;
  border-radius: 5px;

  cursor: pointer;
  outline: 0;
`;
