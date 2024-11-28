import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/ar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useEffect, useState } from "react";
// import { useGetUserProfile } from '../../utils/api/User/useGetUserProfile';
import { eventsDataType } from '../../Types';
import { useGetProjects } from '@/utils/api/Projects/useGetProjects';




const AppointmentCalendar = () => {
    // const { data } = useGetUserProfile();
    const [eventsData, seteventsData] = useState<eventsDataType[]>([]);
    const { data } = useGetProjects({
        queryKey: ["type", "seeding"]
    })
    console.log(data)
    useEffect(() => {
        if (data?.data) {
            const events: eventsDataType[] = []
            data.data.map((ele) => {
                events.push({
                    id: Math.random().toString(36).substring(2, 9),
                    title: <p className='flex flex-col gap-2'>
                        <span className='flex items-center gap-2'>
                            <img src={ele.user.avatar} alt={ele.user.avatar} className='w-8 h-8 rounded-full' />
                            <span>{ele.user.name}</span>
                        </span>

                        {ele.specialities[0] ? <span className=' border border-BostanyPrimary p-2 rounded-2xl w-fit'> {ele.specialities[0].text}</span>
                            : ele.name}
                        <span>from  {ele.invitation.start_at}  to {ele.invitation.end_at}</span>
                    </p>,
                    // title: `User Name: ${ele.user.name} , seed name: ${ele.name}  , from  ${ele.invitation.start_at}  to ${ele.invitation.end_at} `,
                    allDay: false,
                    start: new Date(+ele.accepted_request.start_at.split('T')[0].split('-')[0], +ele.accepted_request.start_at.split('T')[0].split('-')[1] - 1, +ele.accepted_request.start_at.split('T')[0].split('-')[2]),
                    end: new Date(+ele.accepted_request.start_at.split('T')[0].split('-')[0], +ele.accepted_request.start_at.split('T')[0].split('-')[1] - 1, +ele.accepted_request.start_at.split('T')[0].split('-')[2]),
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