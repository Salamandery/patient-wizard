import React, { createContext, useCallback, useContext, useState } from 'react';

interface StepDataContextProps {
  step: number;
  data: Object;
}

interface MultiStepContextData {
    step: number;
    paramData: string[];
    nextStep(): void;
    prevStep(): void;
    setStepData(data: StepDataContextProps): void;
    setParamsData(data: string[]): void;
    setMultiStepLimit(limit: number): void;
    setCurrentStep(step: number): void;
}

const MultiStepContext = createContext<MultiStepContextData>({} as MultiStepContextData);

export const MultiStepProvider: React.FC = ({ children }) => {
    const [step, setStep] = useState(1);
    const [limit, setLimit] = useState(0);
    const [stepDataContext, setStepDataContext] = useState({});
    const [paramData, setParamData] = useState<string[]>([]);

    const setStepData = useCallback((data: StepDataContextProps) => {
      setStepDataContext({...stepDataContext, data});
    }, [stepDataContext]);

    const setParamsData = useCallback((data: string[]) => {
      setParamData(data);
    }, []);

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
      <MultiStepContext.Provider value={{
        nextStep,
        prevStep,
        setStepData,
        setParamsData,
        setMultiStepLimit,
        setCurrentStep,
        step,
        paramData
      }}>
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