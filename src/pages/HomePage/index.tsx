import { Card, CardContainer, CenterInfo, Container } from "./styles";
import { SideMenu } from "../../components/SideMenu";
import { useSimulation } from "../../contexts/SimulationContext";

export const HomePage = () => {
  const { simulationData } = useSimulation();

  return (
    <Container>
      <SideMenu />
      {simulationData.length > 0 && (
        <CardContainer>
          <Card>
            <h3>Você receberá:</h3>
            <CenterInfo>
              {simulationData.map((data, index) => {
                return data.days === 1 ? (
                  <h4 key={index}>
                    Amanhã:{" "}
                    <span>
                      {data.value.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                  </h4>
                ) : (
                  <h4 key={index}>
                    Em {data.days} dias:{" "}
                    <span>
                      {data.value.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                  </h4>
                );
              })}
            </CenterInfo>
          </Card>
        </CardContainer>
      )}
    </Container>
  );
};
