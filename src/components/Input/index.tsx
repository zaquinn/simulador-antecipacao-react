import { Container, ErrorMessage } from "./styles";
import { UseFormRegister } from "react-hook-form";

interface SimulationData {
  amount: number;
  installments: number;
  mdr: number;
}

interface InputProps {
  register: UseFormRegister<SimulationData>;
  errors: string | undefined;
  label: string;
  placeholder: string;
  name: "amount" | "installments" | "mdr";
  min: string;
}

export const Input = ({
  register,
  errors,
  label,
  name,
  placeholder,
  min,
}: InputProps) => {
  return (
    <Container>
      <h2>{label}</h2>
      <input
        placeholder={placeholder}
        {...register(name)}
        type="number"
        min={min}
      />
      {!!errors && <ErrorMessage>{errors}</ErrorMessage>}
    </Container>
  );
};
