import React, { useEffect, useState } from 'react';
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

interface MultiStepData {
  stepTitles: string[];
  handlerSubmit(): void;
  StepForms: React.FC;
}

const MultiStepContainer: React.FC<MultiStepData> = ({ stepTitles, handlerSubmit, StepForms }) => {
  const { nextStep, prevStep, setMultiStepLimit, setCurrentStep, step } = useMultiStep();
  const [limit, setLimit] = useState(0);
  useEffect(() => {
    setLimit(stepTitles.length);
    setMultiStepLimit(stepTitles.length);
  }, [stepTitles, setMultiStepLimit]);

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
            <StepForms />
            <ButtonContainer>
              {
                step > 1 ? (
                  <Button onClick={e => prevStep()}>voltar</Button>
                ) : <div></div>
              }
              {
                step < limit ? (
                  <Button onClick={e => nextStep()}>avançar</Button>
                ) : null
              }
              {
                step === limit ? (
                  <Button onClick={e => handlerSubmit()}>Confirmar</Button>
                ) : null
              }
            </ButtonContainer>
        </StepFormContainer>
      </Container>
  );
}

export default MultiStepContainer;