import { useFormContext } from 'react-hook-form';
import CalenderHeader from './CalenderHeader';

import 'react-datepicker/dist/react-datepicker.css';
import ReactDatePicker from 'react-datepicker';

type Props = {
  endDate: string;
};

const DatePickerComponent = ({ endDate }: Props) => {
  console.log(endDate);
  // 요일 반환
  const getDayName = (date: Date) => {
    return date
      .toLocaleDateString('ko-KR', {
        weekday: 'long',
      })
      .substr(0, 1);
  };

  const createDate = (date: Date) => {
    return new Date(new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0));
  };
  const { register, setValue } = useFormContext();
  return (
    <ReactDatePicker
      dateFormat={`yyyy년 MM월 dd일`}
      className="placeholder:text-s w-full h-10 outline-none text-emerald-800 border-b-2 border-main"
      {...register('endDate')}
      //   selected={Date(endDate)}
      onChange={(date) => setValue('endDate', date, { shouldValidate: true })}
      placeholderText="날짜를 선택해주세요"
      isClearable
      withPortal
      minDate={new Date()}
      renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
        <CalenderHeader date={date} decreaseMonth={decreaseMonth} increaseMonth={increaseMonth} />
      )}
      dayClassName={(date) =>
        getDayName(createDate(date)) === '토' ? 'saturday' : getDayName(createDate(date)) === '일' ? 'sunday' : null
      }
    />
  );
};

export default DatePickerComponent;
