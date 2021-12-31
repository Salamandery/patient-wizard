import React, { createContext, useCallback, useContext, useState, useMemo } from 'react';

export interface StepDataRequest {
  step: StepDataProps;
  data: Object;
}

export interface StepDataProps {
  step: number;
  data: Object;
}

interface MultiStepContextData {
    step: number;
    paramData: string[];
    nextStep(): void;
    prevStep(): void;
    getStepData(): Object;
    setStepData(data: StepDataRequest): void;
    setParamsData(data: string[]): void;
    setMultiStepLimit(limit: number): void;
    setCurrentStep(step: number): void;
}

const MultiStepContext = createContext<MultiStepContextData>({} as MultiStepContextData);

export const MultiStepProvider: React.FC = ({ children }) => {
    const [step, setStep] = useState<number>(1);
    const [limit, setLimit] = useState<number>(0);
    const [stepDataContext, setStepDataContext] = useState<StepDataProps>({} as StepDataProps);
    const [dataContext, setDataContext] = useState<Object>({} as Object);
    const [paramData, setParamData] = useState<string[]>([]);

    const getStepData = useCallback((): StepDataRequest => {
      return { step: stepDataContext, data: dataContext };
    }, [dataContext, stepDataContext]);

    const setStepData = useCallback(({ step, data }: StepDataRequest) => {
      setDataContext(oldData => Object.assign(oldData, data));
      setStepDataContext(step);
    }, []);

    const setParamsData = useCallback((data: string[]) => {
      setParamData(data);
    }, []);

    const nextStep = useCallback(() => {
      setStep(oldStep => oldStep < limit ? oldStep+1 : oldStep);
    }, [limit]);

    const prevStep = useCallback(() => {
      setStep(oldStep => oldStep > 1 ? oldStep-1 : oldStep);
    }, []);

    const setCurrentStep = useCallback((step: number) => {
      setStep(step);
    }, []);

    const setMultiStepLimit = useCallback((limit: number) => {
      setLimit(limit);
    }, []);

    const value = useMemo(() => ({
      nextStep,
      prevStep,
      setStepData,
      getStepData,
      setParamsData,
      setMultiStepLimit,
      setCurrentStep,
      step,
      paramData
    }), [
      nextStep,
      prevStep,
      setStepData,
      getStepData,
      setParamsData,
      setMultiStepLimit,
      setCurrentStep,
      step,
      paramData
    ]);

    return (
      <MultiStepContext.Provider value={value}>
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