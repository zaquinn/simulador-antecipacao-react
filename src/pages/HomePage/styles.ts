import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  height: 100vh;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 100;
  animation: fadeIn 1.2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Card = styled.div`
  width: 300px;
  height: 300px;
  background-color: var(--gray-2);
  border-radius: 10px;
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 1024px) {
    width: 500px;
    height: 500px;
  }

  > h3 {
    font-weight: 500;
    font-size: 28px;
  }
`;

export const CenterInfo = styled.div`
  margin-top: 30px;
  min-height: 100px;
  max-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
    background-color: var(--gray-3);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--green);
    border-radius: 10px;
  }

  @media (min-width: 1024px) {
    margin-top: 60px;
    max-height: 300px;
  }

  > h4 {
    font-weight: 500;
    font-size: 24px;
    margin: 10px 10px 10px 0px;

    > span {
      color: var(--green);
    }
  }
`;
