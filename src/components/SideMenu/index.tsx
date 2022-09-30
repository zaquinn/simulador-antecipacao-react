import { useState } from "react";
import { Container, Form } from "./styles";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export const SideMenu = () => {
  const [full, setFull] = useState(false);
  const growSideMenu = () => {
    setFull(!full);
  };
  return (
    <Container full={full}>
      <button onClick={growSideMenu}>
        {!full ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      <h1>Simule Sua Antecipação</h1>
      {full && <Form>Oi</Form>}
    </Container>
  );
};
