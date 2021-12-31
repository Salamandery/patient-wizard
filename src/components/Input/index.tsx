import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  InputHTMLAttributes,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle, FiArchive } from 'react-icons/fi';
import { useField } from '@unform/core';
import { Container, ErrorTooltip } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  isBorderAppear?: boolean;
  isBorderMovingLeft?: boolean;
  isBorderMovingRight?: boolean;
  isBorderAnimationPingPong?: boolean;
}


const Input: React.FC<InputProps> = (
  { name,
    icon: Icon = FiArchive,
    isBorderAppear = false,
    isBorderMovingLeft = true,
    isBorderMovingRight = false,
    isBorderAnimationPingPong = false,
    ...rest
  }
) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const {
    error,
    fieldName,
    defaultValue,
    registerField
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const HandleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const HandleInputBluer = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container
      isErrored={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
      isBorderAppear={isBorderAppear}
      isBorderMovingLeft={isBorderMovingLeft}
      isBorderMovingRight={isBorderMovingRight}
      isBorderAnimationPingPong={isBorderAnimationPingPong}
    >
      {Icon && <Icon size={20} />}
      <input
        onFocus={HandleInputFocus}
        onBlur={HandleInputBluer}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
      {error && (
        <ErrorTooltip title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </ErrorTooltip>
      )}
    </Container>
  );
};

export default Input;