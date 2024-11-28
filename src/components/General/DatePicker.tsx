import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ar } from 'date-fns/locale/ar';
// import { CalendarProps } from 'react-big-calendar';
import { useAppSelector } from '../../redux/store';

registerLocale('ar', ar);

interface DatePickerComponentProps {
    value: string;
    onChange: (date: Date) => void;
    name: string,
    id: string,
}

const DatePickerComponent: React.FC<DatePickerComponentProps> = ({ value, onChange, name, id }) => {
    const [startDate, setStartDate] = useState<Date | null>(value ? new Date(value) : null);
    const RegisterAs = useAppSelector((state) => state.register.RegisterAs)

    const handleChange = (date: Date | null): void => {
        setStartDate(date);
        onChange(date ?? new Date());
    };

    const customInput
        // : CalendarProps['customInput']
        = (
            <input
                type="text"
                className={` h-20 !w-full placeholder:text-dark  !border-none text-BostanyOnSurface text-base px-6 py-4 rounded-3xl ${RegisterAs == 'Baser' ? 'bg-BaserSurface text-BaserOnSurfase focus:outline-BaserPrimary' : ' bg-BostanySurfaceContainer text-BostanyOnSurface focus:outline-BostanyPrimary'}    `}
                placeholder="يوم / شهر / سنة"
            />
        );

    const dayClassName = (date: Date): string => {
        return date.getDay() === 0 || date.getDay() === 6
            ? 'text-red-500 font-semibold'
            : 'font-semibold';
    };

    return (
        <DatePicker
            selected={startDate}
            name={name}
            placeholderText='يوم / شهر / سنة'
            id={id}
            onChange={handleChange}
            dateFormat="yyyy-MM-dd"
            locale="ar"
            customInput={customInput}
            calendarClassName="bg-white rounded-2xl shadow-lg p-4 !w-full"
            dayClassName={dayClassName}
            className="!w-full"
        />
    );
};

export default DatePickerComponent;