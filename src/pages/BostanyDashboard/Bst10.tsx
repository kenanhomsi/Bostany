import { useState } from 'react';
import ar from 'date-fns/locale/ar';
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { ToggleSwitch } from 'flowbite-react';
registerLocale('ar', ar);
const Bst10 = () => {
    const [switchToBaser, setswitchToBaser] = useState(false);
    const [selectedDates, setSelectedDates] = useState<Date[]>([]);
    const handleDateSelect = (date: Date | null) => {
        if (selectedDates.some((d: Date) => d.getDate() === date!.getDate())) {
            setSelectedDates(selectedDates.filter((d: Date) => d.getDate() !== date!.getDate()));
        } else {
            setSelectedDates([...selectedDates, date!]);
        }
    };
    console.log(selectedDates)
    return (
        <div dir='rtl' className=" mt-section ">
            <div className=" flex flex-col gap-4">
                <div className='flex  items-center gap-12'>
                    <p className='font-semibold text-[28px] text-BostanyOnSurface'>متاح الآن</p>
                    <ToggleSwitch sizing="md"
                        theme={{
                            toggle: {
                                checked: {
                                    on: "after:translate-x-full after:border-white rtl:after:-translate-x-full  !bg-BostanyPrimary"
                                }
                            }
                        }}
                        checked={switchToBaser}
                        onChange={setswitchToBaser} /></div>

            </div>

            <DatePicker
                selected={null}
                onChange={handleDateSelect}
                inline
                locale="ar"
                calendarClassName="custom-calendar"
                dayClassName={(date) =>
                    selectedDates.some((d: Date) => d.getDate() === date.getDate() && d.getMonth() === date.getMonth())
                        ? 'selected-date'
                        : ''
                }
            />
        </div>
    )
}

export default Bst10