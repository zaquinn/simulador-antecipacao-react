import { AxiosResponse } from "axios";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { api } from "../services/api";

interface ISimulation {
  amount: number;
  installments: number;
  mdr: number;
  days?: Number[];
}

interface ISimulationProviderProps {
  children: ReactNode;
}

interface ISimulationContextData {
  simulationData: ISimulation[];
  postSimulation: (data: ISimulation) => Promise<void>;
}

const SimulationContext = createContext<ISimulationContextData>(
  {} as ISimulationContextData
);

const useSimulation = () => {
  const context = useContext(SimulationContext);

  if (!context) {
    throw new Error("useTasks must be used within an TaskProvider");
  }
  return context;
};

const SimulationProvider = ({ children }: ISimulationProviderProps) => {
  const [simulationData, setSimulationData] = useState<ISimulation[]>([]);

  const postSimulation = useCallback(async (data: ISimulation) => {
    api
      .post("", data)
      .then((response: AxiosResponse<ISimulation>) => {
        console.log(response);
        setSimulationData([response.data]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <SimulationContext.Provider value={{ postSimulation, simulationData }}>
      {children}
    </SimulationContext.Provider>
  );
};

export { useSimulation, SimulationProvider };
