import React, { useEffect, useState } from 'react';
import {
  FaBook,
  FaCalendar,
  FaIdCard,
  FaRegHospital,
  FaUser,
  FaLock,
  FaArrowCircleRight
} from 'react-icons/fa';
import Input from '../../../components/Input';
import { useMultiStep, StepDataRequest } from '../../../hooks/MultiStepContext';
import { DataContainer, ResumoContainer, Container } from './styles';

export interface stepDataContext {
  convenio?: string;
  especialidade?: string;
  horario?: string;
  procedimento?: string;
  usuario?: string;
  password?: string;
}

const StepConvenico: React.FC = () => {
  const { setParamsData, nextStep, getStepData } = useMultiStep();
  const [convenio, setConvenio] = useState('');
  const [especialidade, setEspecialidade] = useState('');

  useEffect(() => {
    const stepData = getStepData() as StepDataRequest;
    const {
      convenio,
      especialidade,
    } = stepData.data as stepDataContext;

    setConvenio(convenio);
    setEspecialidade(especialidade);
  }, [getStepData]);

  useEffect(() => {
    setParamsData(['']);
  }, [setParamsData]);

  useEffect(() => {
    setParamsData(['convenio', 'especialidade']);
  }, [setParamsData]);

  return (
    <Container>
      <Input
        placeholder="CONVÊNIO"
        name="convenio"
        icon={FaIdCard}
        isBorderMovingLeft
        isBorderAnimationPingPong
        listValue={[
          'AMIL',
          'BRADESCO'
        ]}
        prevValue={convenio}
      />
      <Input
        placeholder="ESPECIALIDADE"
        name="especialidade"
        icon={FaBook}
        isBorderMovingLeft
        isBorderAnimationPingPong
        listValue={[
          'RADIOLOGIA',
          'CLINICO'
        ]}
        prevValue={especialidade}
      />
      {
        (convenio && especialidade) &&
        (
          <DataContainer>
            <p>Resumo</p>
            <span>Convênio: {convenio}</span>
            <span>Especialidade: {especialidade}</span>
            <button type="button" onClick={e => nextStep()}>
              Continuar
              <FaArrowCircleRight size={16} />
            </button>
          </DataContainer>
        )
      }
    </Container>
  );
}

const StepProcedimento: React.FC = () => {
  const { getStepData, setParamsData, nextStep } = useMultiStep();
  const [procedimento, setProcedimento] = useState('');

  useEffect(() => {
    const stepData = getStepData() as StepDataRequest;
    const {
      procedimento,
    } = stepData.data as stepDataContext;

    setProcedimento(procedimento);
  }, [getStepData]);

  useEffect(() => {
    setParamsData(['']);
  }, [setParamsData]);

  return (
    <Container>
      <Input
        placeholder='PROCEDIMENTO'
        name="procedimento"
        icon={FaRegHospital}
        isBorderMovingLeft
        isBorderAnimationPingPong
        prevValue={procedimento}
      />
      {
        (procedimento) &&
        (
          <DataContainer>
            <p>Resumo</p>
            <span>Procedimento: {procedimento}</span>
            <button type="button" onClick={e => nextStep()}>
              Continuar
              <FaArrowCircleRight size={16} />
            </button>
          </DataContainer>
        )
      }
    </Container>
  );
}

const StepHorario: React.FC = () => {
  const {
    setParamsData,
    nextStep,
    getStepData,
    complementInputValue
  } = useMultiStep();
  const [horario, setHorario] = useState('');

  useEffect(() => {
    const stepData = getStepData() as StepDataRequest;
    const {
      horario,
    } = stepData.data as stepDataContext;

    setHorario(horario);
  }, [getStepData]);

  useEffect(() => {
    setParamsData(['']);
  }, [setParamsData]);

  return (
    <Container>
      <Input
        placeholder='HORÁRIO'
        name="horario"
        icon={FaCalendar}
        currentValue={complementInputValue}
        isBorderMovingLeft
        isBorderAnimationPingPong
        prevValue={horario}
      />
      {
        (horario) &&
        (
          <DataContainer>
            <p>Resumo</p>
            <span>Hor&aacute;rio: {horario}</span>
            <button type="button" onClick={e => nextStep()}>
              Continuar
              <FaArrowCircleRight size={16} />
            </button>
          </DataContainer>
        )
      }
    </Container>
  );
}

const StepLogin: React.FC = () => {
  const { setParamsData, getStepData, nextStep } = useMultiStep();
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const stepData = getStepData() as StepDataRequest;
    const {
      usuario,
      password
    } = stepData.data as stepDataContext;

    setUsuario(usuario);
    setPassword(password);
  }, [getStepData]);

  useEffect(() => {
    setParamsData(['usuario', 'password']);
  }, [setParamsData]);

  return (
    <Container>
      <Input
        placeholder='USUÁRIO'
        name="usuario"
        icon={FaUser}
        isBorderMovingLeft
        isBorderAnimationPingPong
        prevValue={usuario}
      />
      <Input
        placeholder='SENHA'
        name="password"
        type="password"
        icon={FaLock}
        isBorderMovingLeft
        isBorderAnimationPingPong
      />
      {
        (usuario && password) &&
        (
          <DataContainer>
            <p>Resumo</p>
            <span>Usu&aacute;rio: {usuario}</span>
            <button type="button" onClick={e => nextStep()}>
              Continuar
              <FaArrowCircleRight size={16} />
            </button>
          </DataContainer>
        )
      }
    </Container>
  );
}

const StepResumo: React.FC = () => {
  const { getStepData, setParamsData } = useMultiStep();
  const [convenio, setConvenio] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [procedimento, setProcedimento] = useState('');
  const [horario, setHorario] = useState('');
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setParamsData(['']);
  }, [setParamsData]);

  useEffect(() => {
    const stepData = getStepData() as StepDataRequest;
    const {
      convenio,
      especialidade,
      procedimento,
      horario,
      usuario,
      password
    } = stepData.data as stepDataContext;

    setConvenio(convenio);
    setEspecialidade(especialidade);
    setProcedimento(procedimento);
    setHorario(horario);
    setUsuario(usuario);
    setPassword(password);
  }, [getStepData]);

  return (
    <ResumoContainer>
      <span>Conv&ecirc;nio: {convenio}</span>
      <span>Especialidade: {especialidade}</span>
      <span>Procedimento: {procedimento}</span>
      <span>Usu&aacute;rio: {usuario}</span>
      <span>Password: {password}</span>
      <span>Hor&aacute;rio: {horario}</span>
    </ResumoContainer>
  );
}

export {
  StepConvenico,
  StepProcedimento,
  StepHorario,
  StepLogin,
  StepResumo
}