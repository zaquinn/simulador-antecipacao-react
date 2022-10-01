import styled from "styled-components";

interface IContainerProps {
  full: boolean;
}

export const Container = styled.div<IContainerProps>`
  background-color: var(--white);
  width: 100%;
  height: ${(props) => (props.full ? "100vh" : "10vh")};
  transition: height 1s ease;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 450px;
    height: 100vh;
  }

  > button {
    background-color: transparent;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
      display: none;
    }
  }

  > h1 {
    color: var(--gray-4);
    font-weight: 600;
    font-size: 25px;

    @media (min-width: 768px) {
      font-size: 35px;
    }
  }
`;

export const Form = styled.form<IContainerProps>`
  display: ${(props) => (props.full ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70%;

  @media (min-width: 768px) {
    display: flex;
  }

  > button {
    margin-top: 20px;
    background-color: var(--gray-4);
    font-size: 18px;
    font-weight: 500;
    color: var(--white);
    padding: 12px 50px 12px 50px;
    border-radius: 20px;
  }
`;
