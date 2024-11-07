import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/ar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useEffect, useState } from "react";
import { useGetUserProfile } from '../../utils/api/User/useGetUserProfile';
import { eventsDataType } from '../../Types';




const AppointmentCalendar = () => {
    const { data } = useGetUserProfile();
    const [eventsData, seteventsData] = useState<eventsDataType[]>([]);

    useEffect(() => {
        if (data?.data.settings?.schedules) {
            const events: eventsDataType[] = []
            data.data.settings?.schedules.map((ele) => {
                events.push({
                    id: Math.random().toString(36).substring(2, 9),
                    title: ` from  ${ele.from_time}  to ${ele.to_time} `,
                    allDay: false,
                    start: new Date(+ele.date.split('-')[0], +ele.date.split('-')[1] - 1, +ele.date.split('-')[2]),
                    end: new Date(+ele.date.split('-')[0], +ele.date.split('-')[1] - 1, +ele.date.split('-')[2]),
                })
            })
            seteventsData(events)
        }
    }, [data])
    const localizer = momentLocalizer(moment);
    moment.locale('ar');


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