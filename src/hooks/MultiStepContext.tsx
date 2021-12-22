import React, { createContext, useCallback, useContext, useState } from 'react';

interface MultiStepContextData {
    step: number;
    nextStep(): void;
    prevStep(): void;
    setMultiStepLimit(limit: number): void;
    setCurrentStep(step: number): void;
}

const MultiStepContext = createContext<MultiStepContextData>({} as MultiStepContextData);

export const MultiStepProvider: React.FC = ({ children }) => {
    const [step, setStep] = useState(1);
    const [limit, setLimit] = useState(0);

    const nextStep = useCallback(() => {
      if (step < limit) setStep(step+1);
    },[limit, step]);

    const prevStep = useCallback(() => {
        if (step > 0) setStep(step-1);
    },[step]);

    const setCurrentStep = useCallback((step: number) => {
      setStep(step);
    },[]);

    const setMultiStepLimit = useCallback((limit: number) => {
      setLimit(limit);
    },[]);

    return (
      <MultiStepContext.Provider value={{ nextStep, prevStep, setMultiStepLimit, setCurrentStep, step }}>
        {children}
      </MultiStepContext.Provider>
    );
  };

  export function useMultiStep(): MultiStepContextData {
    const context = useContext(MultiStepContext);

    if (!context) {
      throw new Error('useMultiStep must be used within a MultiStepProvider');
    }

    return context;
  }