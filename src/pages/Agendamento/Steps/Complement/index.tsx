import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import {
  FaAngleDown
} from 'react-icons/fa';
import {
  useMultiStep
} from '../../../../hooks/MultiStepContext';
import {
  Container, HourContainer, DateTimeContainer
} from './styles';

interface HourItemProps {
  date: string;
}

const HorarioComplement: React.FC = () => {
  const {
    setCurrentComplementInputValue
  } = useMultiStep();
  const [date, setDate] = useState(['01/01/2022', '02/01/2022']);
  const [hour, setHour] = useState([
    '09:00',
    '09:10',
    '09:20',
    '09:30',
    '09:40',
    '09:50',
    '10:00',
    '10:10',
    '10:20',
    '10:30',
    '10:40',
    '10:50',
    '11:00',
    '11:10',
    '11:20',
    '11:30',
    '11:40',
    '11:50',
    '12:00',
    '12:10',
    '12:20',
    '12:30',
    '12:40',
    '12:50',
    '13:00',
    '13:10',
    '13:20',
    '13:30',
    '13:40',
    '13:50',
    '14:00',
    '14:10',
    '14:20',
    '14:30',
    '14:40',
    '14:50',
    '15:00',
    '15:10',
    '15:20',
    '15:30',
    '15:40',
    '15:50',
  ]);

  const HourItem: React.FC<HourItemProps> = useCallback(({ date }) =>{
    return (
      <HourContainer>
        {
          hour && hour.map(hr => (
            <button
              key={date+hr+1}
              type='button'
              onClick={e => setCurrentComplementInputValue(`${date} ${hr}`)}
            >
              {hr}
            </button>
          ))
        }
      </HourContainer>
    )
  }, [hour, setCurrentComplementInputValue]);

  return (
    <Container>
      <DateTimeContainer>
        {
          date && (
            date.map(dt => (
              <div key={dt+2}>
                <span>{dt}</span>
                <FaAngleDown size={15} />
                <HourItem date={dt} />
              </div>
            ))
          )
        }
      </DateTimeContainer>
    </Container>
  )
}

export {
  HorarioComplement
};

