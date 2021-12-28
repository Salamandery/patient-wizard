import React, { useState, useEffect, useCallback } from 'react';
import { useMultiStep } from '../../hooks/MultiStepContext';
import { useToast } from '../../hooks/ToastContext';
import MultiStepContainer from '../../components/MultiStepContainer';
import Input from '../../components/Input';
import {
  FaBook,
  FaCalendar,
  FaIdCard,
  FaRegHospital,
  FaUser,
  FaLock
} from 'react-icons/fa';
import {
    Container,
    ConvenioFormContainer,
    ResumoContainer
} from './styles';

const Agendamento: React.FC = () => {
  const { step } = useMultiStep();
  const { addToast } = useToast();
  const [stepTitles, setStepTitles] = useState<string[]>([]);

  useEffect(() => {
    setStepTitles([
      'Convênio',
      'Procedimento',
      'Horário',
      'Login',
      'Resumo'
    ]);
  }, []);

  const StepConvenico = useCallback<React.FC>(() => {
    return (
      <>
        <Input
          placeholder='CONVÊNIO'
          name="convenio"
          icon={FaIdCard}
          isBorderMovingLeft={true}
          isBorderAnimationPingPong={true}
        />
        <Input
          placeholder='ESPECIALIDADE'
          name="especialidade"
          icon={FaBook}
          isBorderMovingLeft={true}
          isBorderAnimationPingPong={true}
        />
      </>
    );
  }, []);

  const StepProcedimento = useCallback<React.FC>(() => {
    return (
      <>
        <Input
          placeholder='PROCEDIMENTO'
          name="procedimento"
          icon={FaRegHospital}
          isBorderMovingLeft={true}
          isBorderAnimationPingPong={true}
        />
      </>
    );
  }, []);

  const StepHorario = useCallback<React.FC>(() => {
    return (
      <>
        <Input
          type="datetime"
          placeholder='HORÁRIO'
          name="horario"
          icon={FaCalendar}
          isBorderMovingLeft={true}
          isBorderAnimationPingPong={true}
        />
      </>
    );
  }, []);

  const StepLogin = useCallback<React.FC>(() => {
    return (
      <>
        <Input
          placeholder='USUÁRIO'
          name="usuario"
          icon={FaUser}
          isBorderMovingLeft={true}
          isBorderAnimationPingPong={true}
        />
        <Input
          placeholder='SENHA'
          name="password"
          icon={FaLock}
          isBorderMovingLeft={true}
          isBorderAnimationPingPong={true}
        />
      </>
    );
  }, []);

  const StepResumo = useCallback<React.FC>(() => {
    return (
      <ResumoContainer>
        <span>Conv&ecirc;nio: </span>
        <span>Especialidade: </span>
        <span>Procedimento: </span>
        <span>Usu&aacute;rio: </span>
        <span>Hor&aacute;rio: </span>
      </ResumoContainer>
    );
  }, []);

  const StepForms = useCallback<React.FC>(() => {
    switch(step) {
      case 1:
        return (
          <ConvenioFormContainer>
             <StepConvenico />
          </ConvenioFormContainer>
        );
      case 2:
        return (
          <ConvenioFormContainer>
             <StepProcedimento />
          </ConvenioFormContainer>
        );
      case 3:
        return (
          <ConvenioFormContainer>
             <StepHorario />
          </ConvenioFormContainer>
        );
      case 4:
        return (
          <ConvenioFormContainer>
             <StepLogin />
          </ConvenioFormContainer>
        );
      case 5:
        return (
          <ConvenioFormContainer>
             <StepResumo />
          </ConvenioFormContainer>
        );
      default:
        return (
          <ConvenioFormContainer>
            <h1>SEM INFORMAÇÃO</h1>
          </ConvenioFormContainer>
        );
    }
  }, [step]);

  const handleSubmit = useCallback(() => {
    addToast({
      title: 'Agendamento Realizado',
      description: 'Agendamento realizado com sucesso!',
      type: 'success'
    })
  }, [addToast]);

  return (
      <Container>
          <MultiStepContainer
            stepTitles={stepTitles}
            handlerSubmit={handleSubmit}
            StepForms={StepForms}
          />
      </Container>
  );
}

export default Agendamento;