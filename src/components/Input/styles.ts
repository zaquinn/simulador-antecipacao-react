import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  max-width: 370px;

  > h2 {
    font-size: 18px;
    font-weight: 500;
    color: var(--gray-3);
  }

  > input {
    width: 100%;
    height: 44px;
    background-color: transparent;
    font-size: 16px;
    color: var(--gray-3);
    border-bottom: 2px solid var(--gray-4);
    padding-top: 20px;

    ::placeholder {
      color: var(--gray-3);
    }
  }
`;
