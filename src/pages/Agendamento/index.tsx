import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useMultiStep } from '../../hooks/MultiStepContext';
import { useToast } from '../../hooks/ToastContext';
import MultiStepContainer from '../../components/MultiStepContainer';
import Input from '../../components/Input';
import {
  FaBook
} from 'react-icons/fa';
import {
    Container,
    ConvenioFormContainer
} from './styles';

const Agendamento: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
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

  const StepConvenico = useCallback<React.FC>(() => {

    return (
      <Form ref={formRef} onSubmit={()=>{}}>
        <Input
          placeholder='CONVÊNIO'
          name="Convênio"
          icon={FaBook}
          isBorderMovingLeft={true}
          isBorderAnimationPingPong={true}
        />
        <Input
          placeholder='ESPECIALIDADE'
          name="Especialidade"
          icon={FaBook}
          isBorderMovingLeft={true}
          isBorderAnimationPingPong={true}
        />
      </Form>
    );
  }, [formRef]);

  const StepForms = useCallback<React.FC>(() => {
    switch(step) {
      case 1:
        return (
          <ConvenioFormContainer>
             <StepConvenico />
          </ConvenioFormContainer>
        )
      case 2:
        return (
          <form>
            <input />
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