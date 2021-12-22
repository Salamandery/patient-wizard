import React, { useCallback, useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';
import { ToastMessages, useToast } from '../../../hooks/ToastContext';
import { Container } from './styles';

interface ToastProps {
  data: ToastMessages;
  styles: object;
}

const Icons = {
  info: <FiInfo size={20} />,
  success: <FiCheckCircle size={20} />,
  error: <FiAlertCircle size={20} />,
};

const Toast: React.FC<ToastProps> = ({ data, styles }) => {
  const { removeToast } = useToast();
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(data.id);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [data.id, removeToast]);
  const handleRemoveToast = useCallback(
    (id: string) => {
      removeToast(id);
    },
    [removeToast],
  );
  return (
    <Container
      style={styles}
      type={data.type}
      hasDescription={!!data.description}
    >
      {Icons[data.type || 'info']}
      <div>
        <strong>{data.title}</strong>
        {data.description && <p>{data.description}</p>}
      </div>
      <button onClick={e => handleRemoveToast(data.id)} type="button">
        <FiXCircle size={20} />
      </button>
    </Container>
  );
};

export default Toast;