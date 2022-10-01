import React, { useState } from "react";
import {
  Container,
  Form,
  InputButtonContainer,
  InputContainer,
  DayNumberBox,
  DayNumberContainer,
} from "./styles";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Input } from "../Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSimulation } from "../../contexts/SimulationContext";

interface SimulationData {
  amount: number;
  installments: number;
  mdr: number;
  days?: Number[];
}

const simulationSchema = yup.object().shape({
  amount: yup
    .number()
    .required("Valor obrigatório")
    .typeError("Valor deve ser um número e não vazio."),
  installments: yup
    .number()
    .required("Valor obrigatório")
    .typeError("Valor deve ser um número e não vazio."),
  mdr: yup
    .number()
    .required("Valor obrigatório")
    .typeError("Valor deve ser um número e não vazio."),
});
export const SideMenu = () => {
  const [full, setFull] = useState(false);
  const [dayNumber, setDayNumber] = useState("");
  const [daysList, setDaysList] = useState<Number[]>([]);

  const { postSimulation, setSimulationData } = useSimulation();

  const growSideMenu = () => {
    setFull(!full);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDayNumber(event.target.value);
  };

  const removeDayNumber = (numero: Number) => {
    const filter = daysList.filter((day) => day !== numero);

    setDaysList(filter);
  };

  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm<SimulationData>({
    resolver: yupResolver(simulationSchema),
  });

  const onSubmit = (data: SimulationData) => {
    if (daysList.length > 0) {
      const addDays = (data.days = daysList);
    }
    postSimulation(data);

    setDayNumber("");
    setDaysList([]);
    setSimulationData([]);
    reset();
  };

  return (
    <Container full={full}>
      <button onClick={growSideMenu}>
        {!full ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      <h1>Simule Sua Antecipação</h1>
      <Form full={full} onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Informe o valor da venda *"
          name="amount"
          placeholder="Ex: 15000"
          register={register}
          errors={errors.amount?.message}
          min="1000"
        />
        <Input
          label="Em quantas parcelas *"
          name="installments"
          placeholder="Ex: 4"
          register={register}
          errors={errors.installments?.message}
          min="1"
        />
        <InputContainer>
          <h2>
            &#40;opcional&#41; Informe números de dias em que deseja que sua
            antecipação seja calculada
          </h2>
          <InputButtonContainer>
            <input
              placeholder="Ex: 3"
              type="number"
              min="1"
              onChange={handleChange}
              value={dayNumber}
            />
            <button
              onClick={() => {
                if (
                  Number(dayNumber) > 0 &&
                  daysList.filter((num) => num === Number(dayNumber)).length ===
                    0 &&
                  daysList.length < 9
                ) {
                  setDaysList([...daysList, Number(dayNumber)]);
                }
              }}
              type="button"
            >
              ADICIONAR
            </button>
          </InputButtonContainer>
        </InputContainer>
        {daysList.length > 0 && (
          <DayNumberContainer>
            {daysList.map((numero, index) => {
              return (
                <DayNumberBox key={index}>
                  <div>
                    <h3>{`${numero}`}</h3>
                    <button
                      type="button"
                      onClick={() => removeDayNumber(numero)}
                    >
                      X
                    </button>
                  </div>
                </DayNumberBox>
              );
            })}
          </DayNumberContainer>
        )}
        <Input
          label="Informe o percentual de MDR *"
          name="mdr"
          placeholder="Ex: 4"
          register={register}
          errors={errors.mdr?.message}
          min="1"
        />
        <button type="submit">SIMULAR</button>
      </Form>
    </Container>
  );
};
