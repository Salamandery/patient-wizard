import React, { useState, useEffect, useCallback } from 'react';
import { useMultiStep } from '../../hooks/MultiStepContext';
import { useToast } from '../../hooks/ToastContext';
import MultiStepContainer from '../../components/MultiStepContainer';
import {
    Container,
    ConvenioFormContainer,
} from './styles';
import {
  StepConvenico,
  StepProcedimento,
  StepHorario,
  StepLogin,
  StepResumo,
} from './Steps';
import {
  HorarioComplement
} from './Steps/Complement';

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

  const StepForms = useCallback(() => {
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

  const StepComplement = useCallback(() => {
    switch(step) {
      case 1:
        return (
          <>
          </>
        );
      case 2:
        return (
          <>
          </>
        );
      case 3:
        return (
          <HorarioComplement />
        );
      case 4:
        return (
          <>
          </>
        );
      case 5:
        return (
          <>
          </>
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
          StepForms={StepForms}
          stepTitles={stepTitles}
          handlerSubmit={handleSubmit}
          StepComplement={StepComplement}
        />
      </Container>
  );
}

export default Agendamento;