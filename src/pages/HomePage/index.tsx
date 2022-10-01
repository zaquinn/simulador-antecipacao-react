import { Container } from "./styles";
import { SideMenu } from "../../components/SideMenu";
import { useSimulation } from "../../contexts/SimulationContext";

export const HomePage = () => {
  const { simulationData } = useSimulation();
  return (
    <Container>
      <SideMenu />
      <button onClick={() => console.log(simulationData)}>Teste</button>
    </Container>
  );
};
