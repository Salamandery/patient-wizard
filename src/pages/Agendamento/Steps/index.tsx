import React, { useEffect, useState } from 'react';
import {
  FaBook,
  FaCalendar,
  FaIdCard,
  FaRegHospital,
  FaUser,
  FaLock
} from 'react-icons/fa';
import { useMultiStep } from '../../../hooks/MultiStepContext';
import Input from '../../../components/Input';
import { ResumoContainer } from './styles';

export interface stepDataContext {
  convenio: string;
  especialidade: string;
  horario: string;
  procedimento: string;
  usuario: string;
  password: string;
}

const StepConvenico: React.FC = () => {
  const { setParamsData } = useMultiStep();

  useEffect(() => {
    setParamsData(['convenio', 'especialidade']);
  }, [setParamsData]);

  return (
    <>
      <Input
        placeholder='CONVÊNIO'
        name="convenio"
        icon={FaIdCard}
        isBorderMovingLeft
        isBorderAnimationPingPong
      />
      <Input
        placeholder='ESPECIALIDADE'
        name="especialidade"
        icon={FaBook}
        isBorderMovingLeft
        isBorderAnimationPingPong
      />
    </>
  );
}

const StepProcedimento: React.FC = () => {
  const { setParamsData } = useMultiStep();

  useEffect(() => {
    setParamsData([]);
  }, [setParamsData]);
  return (
    <Input
        placeholder='PROCEDIMENTO'
        name="procedimento"
        icon={FaRegHospital}
        isBorderMovingLeft
        isBorderAnimationPingPong
      />
  );
}

const StepHorario: React.FC = () => {
  const { setParamsData } = useMultiStep();

  useEffect(() => {
    setParamsData(['horario']);
  }, [setParamsData]);
  return (
    <Input
        type="datetime"
        placeholder='HORÁRIO'
        name="horario"
        icon={FaCalendar}
        isBorderMovingLeft
        isBorderAnimationPingPong
      />
  );
}

const StepLogin: React.FC = () => {
  const { setParamsData } = useMultiStep();

  useEffect(() => {
    setParamsData(['usuario', 'password']);
  }, [setParamsData]);

  return (
    <>
      <Input
        placeholder='USUÁRIO'
        name="usuario"
        icon={FaUser}
        isBorderMovingLeft
        isBorderAnimationPingPong
      />
      <Input
        placeholder='SENHA'
        name="password"
        icon={FaLock}
        isBorderMovingLeft
        isBorderAnimationPingPong
      />
    </>
  );
}

const StepResumo: React.FC = () => {
  const { setParamsData, getStepData } = useMultiStep();
  const [convenio, setConvenio] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [procedimento, setProcedimento] = useState('');
  const [horario, setHorario] = useState('');
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const {
      convenio,
      especialidade,
      procedimento,
      horario,
      usuario,
      password
    } = getStepData() as stepDataContext;

    setConvenio(convenio);
    setEspecialidade(especialidade);
    setProcedimento(procedimento);
    setHorario(horario);
    setUsuario(usuario);
    setPassword(password);
  }, [getStepData])

  useEffect(() => {
    setParamsData([]);
  }, [setParamsData]);

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