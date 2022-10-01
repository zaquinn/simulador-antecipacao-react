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
  position: fixed;
  top: auto;
  bottom: 0;

  @media (min-width: 1024px) {
    width: 450px;
    height: 100vh;
    position: relative;
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

    @media (min-width: 1024px) {
      display: none;
    }
  }

  > h1 {
    color: var(--gray-4);
    font-weight: 600;
    font-size: 25px;

    @media (min-width: 1024px) {
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
  height: 100%;

  @media (min-width: 1024px) {
    display: flex;
    height: 70%;
  }

  > button {
    margin: 20px 0px 10px 0px;
    background-color: var(--gray-4);
    font-size: 18px;
    font-weight: 500;
    color: var(--white);
    padding: 12px 50px 12px 50px;
    border-radius: 20px;
  }
`;

export const InputContainer = styled.div`
  width: 80%;
  max-width: 370px;

  > h2 {
    font-size: 18px;
    font-weight: 500;
    color: var(--gray-3);
  }

  > input {
    width: 60%;
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

export const InputButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;

  > input {
    width: 65%;
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

  > button {
    height: 28px;
    width: 30%;
    background-color: var(--gray-4);
    font-size: 14px;
    color: var(--white);
    font-weight: 400;
    border-radius: 14px;
  }
`;

export const DayNumberContainer = styled.div`
  width: 80%;
  max-width: 370px;
  min-height: 40px;
  margin: 5px 0px 5px 0px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 5px;
`;

export const DayNumberBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    height: 20px;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: var(--gray-1);

    > h3 {
      font-size: 14px;
      font-weight: 400;
    }

    > button {
      height: 14px;
      width: 14px;
      border-radius: 100%;
      background-color: var(--gray-4);
      font-size: 8px;
      color: var(--white);
      transform: translate(25px, -10px);
      position: absolute;
    }
  }
`;
