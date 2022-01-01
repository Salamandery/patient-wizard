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
import { Container, ErrorTooltip, ListContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  isBorderAppear?: boolean;
  isBorderMovingLeft?: boolean;
  isBorderMovingRight?: boolean;
  isBorderAnimationPingPong?: boolean;
  listValue?: string[];
  currentValue?: string;
}


const Input: React.FC<InputProps> = (
  { name,
    listValue,
    icon: Icon = FiArchive,
    isBorderAppear = false,
    isBorderMovingLeft = true,
    isBorderMovingRight = false,
    isBorderAnimationPingPong = false,
    currentValue,
    ...rest
  }
) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isInputClicked, setInputClicked] = useState(false);
  const [isValueClicked, setValueClicked] = useState(false);
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

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = currentValue;
    }
  }, [currentValue]);

  const HandleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const HandleInputBluer = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handlerSetItemListValue = useCallback((item: string) => {
    if (inputRef.current) {
      inputRef.current.value = item;
    }
    setValueClicked(true);
  }, []);

  const handlerInputClicked = useCallback(() => {
    setInputClicked(true);
    setValueClicked(false);
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
        onClick={e => handlerInputClicked()}
        ref={inputRef}
        {...rest}
      />
      {
        listValue && (
          <ListContainer
            isFocused={isFocused}
            isInputClicked={isInputClicked}
            isValueCLicked={isValueClicked}
            isFilled={isFilled}
            isErrored={!!error}
          >
            {
              listValue.map(item => (
                <button
                  type="button"
                  key={item+2}
                  onClick={e => handlerSetItemListValue(item)}
                >
                  {item}
                </button>
              ))
            }
          </ListContainer>
        )
      }
      {error && (
        <ErrorTooltip title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </ErrorTooltip>
      )}
    </Container>
  );
};

export default Input;