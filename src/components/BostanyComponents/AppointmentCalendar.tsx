import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/ar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from "react";
import { events } from "../../utils/data";




const AppointmentCalendar = () => {

    const [eventsData] = useState(events);
    const localizer = momentLocalizer(moment);
    moment.locale('ar');
    // const handleSelect = ({ start, end }: { start: Date, end: Date }) => {
    //     console.log(start);
    //     console.log(end);
    //     const title = window.prompt("New Event name");
    //     if (title)
    //         setEventsData([
    //             ...eventsData,
    //             {
    //                 id: eventsData.length + 1,
    //                 start,
    //                 end,
    //                 title
    //             }
    //         ]);
    // };

    return (
        <div className="" style={{ minHeight: 580 }}>
            <Calendar
                className="bg-[#FAFBF9] border-[#E6E1E6] "
                views={["day", "agenda", "work_week", "month"]}
                selectable
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="month"
                events={eventsData}
                style={{ height: "110vh" }}
                onSelectEvent={(event) => alert(event.title)}
                // onSelectSlot={handleSelect}

                formats={{
                    dayFormat: 'dddd',
                    dayHeaderFormat: 'dddd',
                    weekdayFormat: 'dddd',
                    eventTimeRangeFormat: ({ start, end }) => `${moment(start).format('HH:mm')} - ${moment(end).format('HH:mm')}`,
                }}
                messages={{
                    today: 'اليوم',
                    previous: 'السابق',
                    next: 'التالي',
                    month: 'شهر',
                    work_week: 'أسبوع العمل',
                    day: 'يوم',
                    agenda: 'جدول الأعمال',

                }}
            />
        </div>
    );
}

export default AppointmentCalendar;