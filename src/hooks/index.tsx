import React from 'react';
import { MultiStepProvider } from './MultiStepContext';
import { ToastProvider } from './ToastContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <MultiStepProvider>
      <ToastProvider>{children}</ToastProvider>
    </MultiStepProvider>
  );
};

export default AppProvider;