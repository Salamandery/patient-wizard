import React, {
  useEffect,
  useState,
  useRef,
  useCallback
} from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FaPen } from 'react-icons/fa';
import { useMultiStep } from '../../hooks/MultiStepContext';
import {
  ButtonContainer,
  Container,
  Button,
  StepFormContainer,
  StepContainer,
  StepWrapper,
  StepLabel,
  StepLine,
  StepGroup,
} from './styles';

import GetValidationError from '../../utils/getValidationErrors';

interface MultiStepData {
  stepTitles: string[];
  handlerSubmit(): void;
  StepForms: React.FC;
}

const MultiStepContainer: React.FC<MultiStepData> = ({
  stepTitles,
  handlerSubmit,
  StepForms,
}) => {
  const formRef = useRef<FormHandles>(null);
  const {
    nextStep,
    prevStep,
    setMultiStepLimit,
    setCurrentStep,
    setStepData,
    step,
    paramData
  } = useMultiStep();
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    setLimit(stepTitles.length);
    setMultiStepLimit(stepTitles.length);
  }, [stepTitles, setMultiStepLimit]);

  const NextStepForm = useCallback(async(data) =>{
    try {

      formRef.current?.setErrors({});

      if (paramData) {
        const fields = paramData.map(field =>
          console.log(field)
        )
        console.log(fields)
      }

      const schema = Yup.object().shape({
        convenio: Yup.string().required('Convênio é obrigatório'),
        especialidade: Yup.string().required('Especialidade é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      setStepData({
        step,
        data
      });

      nextStep();
    } catch(err) {
      if (err instanceof Yup.ValidationError) {
        const errors = GetValidationError(err);

        formRef.current?.setErrors(errors);
        console.log(errors);
      }
      return;
    }
  }, [nextStep, paramData, setStepData, step]);

  return (
      <Container>
        <StepContainer>
          {
            stepTitles.map((title, idx) => (
              <StepWrapper key={idx}>
                {
                  idx+1 === 1 ? (
                    null
                  ) : (
                    <StepLine
                      active={idx+1 <= step ? true : false}
                    />
                  )
                }
                <StepGroup>
                  <StepLabel onClick={e => setCurrentStep(idx+1)} active={idx+1 <= step ? true : false}>
                    {idx+1 < step ? (
                      <FaPen size={16} />
                    ) : idx+1}
                  </StepLabel>
                  <p>{title}</p>
                </StepGroup>
                {
                  idx+1 === limit ? (
                    null
                  ) : (
                    <StepLine
                      active={idx+1 <= step ? true : false}
                    />
                  )
                }
              </StepWrapper>
            ))
          }
        </StepContainer>
        <StepFormContainer>
          <Form ref={formRef} onSubmit={NextStepForm}>
              <StepForms />
              <ButtonContainer>
                {
                  step > 1 ? (
                    <Button onClick={e => prevStep()}>Voltar</Button>
                  ) : <div style={{minWidth: '100px'}}></div>
                }
                {
                  step < limit ? (
                    <Button
                      type='submit'
                    >
                        Avançar
                    </Button>
                  ) : null
                }
                {
                  step === limit ? (
                    <Button onClick={e => handlerSubmit()}>Confirmar</Button>
                  ) : null
                }
              </ButtonContainer>
          </Form>
        </StepFormContainer>
      </Container>
  );
}

export default MultiStepContainer;