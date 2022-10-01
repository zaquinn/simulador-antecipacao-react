import { AxiosResponse } from "axios";
import React, {
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

interface ISimulationResponse {
  [key: string]: number;
}

interface ISimulationData {
  days: number;
  value: number;
}

interface ISimulationProviderProps {
  children: ReactNode;
}

interface ISimulationContextData {
  simulationData: ISimulationData[];
  postSimulation: (data: ISimulation) => Promise<void>;
  setSimulationData: React.Dispatch<React.SetStateAction<ISimulationData[]>>;
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
  const [simulationData, setSimulationData] = useState<ISimulationData[]>([]);

  const postSimulation = useCallback(async (data: ISimulation) => {
    api
      .post("", data)
      .then((response: AxiosResponse<ISimulationResponse>) => {
        const data = Object.entries(response.data).map(([key, values]) => ({
          days: Number(key),
          value: values,
        }));
        setSimulationData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <SimulationContext.Provider
      value={{ postSimulation, simulationData, setSimulationData }}
    >
      {children}
    </SimulationContext.Provider>
  );
};

export { useSimulation, SimulationProvider };
