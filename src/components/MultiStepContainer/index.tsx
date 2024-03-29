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
  ComplementContainer
} from './styles';
import { StepDataProps, StepDataRequest, useMultiStep } from '../../hooks/MultiStepContext';
import GetValidationError from '../../utils/getValidationErrors';

interface MultiStepData {
  stepTitles: string[];
  handlerSubmit(): void;
  StepForms: React.FC;
  StepComplement?: React.FC;
}

interface ParamDataProps {
    [key: string]: any;
}

const MultiStepContainer: React.FC<MultiStepData> = ({
  stepTitles,
  handlerSubmit,
  StepForms,
  StepComplement,
}) => {
  const formRef = useRef<FormHandles>(null);
  const {
    nextStep,
    prevStep,
    setMultiStepLimit,
    setCurrentStep,
    setStepData,
    step,
    paramData,
    getStepData
  } = useMultiStep();
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    setLimit(stepTitles.length);
    setMultiStepLimit(stepTitles.length);
  }, [stepTitles, setMultiStepLimit]);

  const NextStepForm = useCallback(async(data: Object) =>{
    try {
      formRef.current?.setErrors({});
      const allData = getStepData();
      const fields: ParamDataProps = {};

      if (paramData.length > 0 && paramData[0] !== '') {
        for (let i = 0; i < paramData.length; i++) {
          const paramErrorName = paramData[i].charAt(0).toUpperCase() + paramData[i].slice(1);
          fields[paramData[i]] = Yup.string().required(`${paramErrorName} é obrigatório`);
        }
      }

      const schema = Yup.object().shape(fields);

      await schema.validate(data, {
        abortEarly: false,
      });

      const stepData: StepDataProps = { step, data };
      const dataRequest: StepDataRequest = { step: stepData, data }

      setStepData(dataRequest);

      if (allData.step.step > step) {
        return;
      }

      nextStep();
    } catch(err) {
      if (err instanceof Yup.ValidationError) {
        const errors = GetValidationError(err);

        formRef.current?.setErrors(errors);
      }

    }
  }, [paramData, setStepData, step, nextStep, getStepData]);

  const handlerPrevStep = useCallback(() => {
    prevStep();
  }, [prevStep]);

  return (
      <Container>
        <StepContainer>
          {
            stepTitles.map((title, idx) => (
              <StepWrapper key={title+1}>
                {
                  idx+1 === 1 ? (
                    null
                  ) : (
                    <StepLine
                      active={idx+1 <= step}
                    />
                  )
                }
                <StepGroup>
                  <StepLabel onClick={e => setCurrentStep(idx+1)} active={idx+1 <= step}>
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
                      active={idx+1 <= step}
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
                (step < 0) ? (
                  <Button onClick={e => handlerPrevStep()}>Voltar</Button>
                ) : <div style={{minWidth: '100px'}} />
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
        {
          StepComplement && (
          <ComplementContainer>
            <StepComplement />
          </ComplementContainer>
          )
        }
      </Container>
  );
}

export default MultiStepContainer;