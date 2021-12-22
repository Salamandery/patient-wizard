import React, { useState, useEffect, useCallback } from 'react';
import { useMultiStep } from '../../hooks/MultiStepContext';
import { useToast } from '../../hooks/ToastContext';
import MultiStepContainer from '../../components/MultiStepContainer';
import {
    Container
} from './styles';

const Agendamento: React.FC = () => {
  const { step } = useMultiStep();
  const { addToast } = useToast();
  const [stepTitles, setStepTitles] = useState<string[]>([]);

  useEffect(() => {
    setStepTitles([
      'Convênio',
      'Procedimentos',
      'Horário',
      'Login',
      'Resumo'
    ]);
  }, []);

  const StepForms = useCallback(() => {
    switch(step) {
      case 1:
        return (
          <form>
            <input />
          </form>
        )
      default:
        return (
          <h1>SEM INFORMAÇÃO</h1>
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