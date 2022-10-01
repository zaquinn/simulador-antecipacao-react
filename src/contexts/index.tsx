import { ReactNode } from "react";
import { SimulationProvider } from "./SimulationContext";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <SimulationProvider>{children}</SimulationProvider>
);
