import { CalendarContainer } from 'react-datepicker';

interface DatePickeContainerType {
  className: string;
  children: React.ReactNode;
}

const DatePickerContainer = ({ className, children }: DatePickeContainerType) => {
  return (
    <div style={{}}>
      <CalendarContainer className={className}>
        <div style={{ position: 'relative' }}>{children}</div>
      </CalendarContainer>
    </div>
  );
};

export default DatePickerContainer;
