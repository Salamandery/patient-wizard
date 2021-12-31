import React from 'react';
import { MultiStepProvider } from './MultiStepContext';
import { ToastProvider } from './ToastContext';
import { AuthProvider } from './AuthContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <MultiStepProvider>
        <ToastProvider>{children}</ToastProvider>
      </MultiStepProvider>
    </AuthProvider>
  );
};

export default AppProvider;