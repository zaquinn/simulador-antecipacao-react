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
  days?: number[];
}

interface ISimulationResponse {
  [key: string]: number;
}

interface ISimulationProviderProps {
  children: ReactNode;
}

interface ISimulationContextData {}
