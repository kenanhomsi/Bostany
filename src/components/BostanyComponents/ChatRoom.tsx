import { useEffect, useRef, useState } from 'react';
import { LiaPaperclipSolid } from 'react-icons/lia'
import { PiCheck, PiChecks, PiMicrophone, PiPaperPlaneRightFill } from 'react-icons/pi'
import { ChatRoomProps } from '../../Types';
import { useDispatch } from 'react-redux';
import { addMessageToChat, makeAllMessageSeen } from '../../redux/Slices/chatMessageSlice';
import { useAppSelector } from '../../redux/store';

const ChatRoom = ({ SelectedChat }: ChatRoomProps) => {
    // const [DayChatTime, setDayChatTime] = useState('');
    // const [DayChatState, setDayChatState] = useState(false);
    const [InputValue, setInputValue] = useState('');
    const SelectedChatId = useAppSelector((state) => state.chatMessage.SelectedChatId)
    const [, setAttechedFile] = useState<File | null>(null);
    const [, setAttechedAudio] = useState<File | null>(null);
    const dispatch = useDispatch()
    const audioPickerRef = useRef<HTMLInputElement>(null);
    const filePickerRef = useRef<HTMLInputElement>(null);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setAttechedFile(file)
        }
    }
    const handleAudioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setAttechedAudio(file)
        }
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    const handleSend = () => {
        const date = new Date()
        if (InputValue != '') {
            dispatch(addMessageToChat({
                id: SelectedChatId,
                data: {
                    From: "me",
                    text: InputValue,
                    date: {
                        hour: date.getHours(),
                        minute: date.getMinutes(),
                        day: date.getDate(),
                        mounth: date.getMonth() + 1,
                        year: date.getFullYear(),
                    },
                    received: false,
                    readed: false,
                },
            }))
        }
    }
    useEffect(() => {
        dispatch(makeAllMessageSeen(SelectedChatId))
    }, [SelectedChatId, dispatch])
    function getArabicDate(dayNumber: number | undefined, monthNumber: number) {
        const days = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
        const months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
        // Get the current date to find the day of the week
        const date = new Date(2024, monthNumber - 1, dayNumber);
        const dayOfWeek = days[date.getDay()]; // Get day of the week (0-6)
        const monthName = months[monthNumber - 1]; // Get month name
        return `${dayOfWeek}, ${dayNumber} ${monthName}`;
    }
    return (
        <div className=" flex-1 bg-white h-[80vh] flex flex-col">
            {/* header */}
            <div className=" flex gap-2 items-center">
                <img src={SelectedChat.Person.image} alt={SelectedChat.Person.image} className=' w-20 h-20 rounded-full' />
                <p className=' text-xl font-medium text-BostanyOnSurface'>{SelectedChat.Person.name}</p>
            </div>
            {/* body */}
            <div className=" flex flex-col gap-3 h-full overflow-y-scroll w-full">
                {
                    SelectedChat.Messages.map((chat, index) => {
                        const minute = chat.date.minute
                        const houre = chat.date.hour
                        const HoureFormat = houre > 12 ? `${houre - 12} م ` : `${houre} ص `
                        let checkedCount = 0
                        if (chat.received) {
                            checkedCount = 1
                        }
                        if (chat.readed) {
                            checkedCount = 2
                        }
                        const DayDate = getArabicDate(chat.date.day, chat.date.mounth)
                        // if (DayChatTime == '' && !DayChatState) {
                        //     setDayChatState(true)
                        //     setDayChatTime(DayDate)
                        // } else {
                        //     if (DayChatTime != DayDate) {
                        //         setDayChatState(true)
                        //         setDayChatTime(DayDate)
                        //     } else {
                        //         setDayChatState(false)
                        //     }
                        // }
                        return <div className="flex flex-col gap-5  px-14 py-5" key={index}>
                            <div className=" text-dark text-lg font-medium self-center">{DayDate}</div>
                            <div className={`flex items-end ${chat.From == 'Him' ? ' self-start' : ' self-end flex-row-reverse'} gap-1`}>
                                <p className=" bg-BostanyPrimary p-4  rounded-2xl text-white">{chat.text}</p>
                                <div className="flex flex-col gap-1">
                                    <p className=' text-2xl  text-BostanyPrimary'>
                                        {
                                            checkedCount == 1 && <PiCheck />
                                        }
                                        {
                                            checkedCount == 2 && <PiChecks />
                                        }
                                    </p>
                                    <p className=' text-sm text-dark font-medium flex' > <span>{minute}</span><span>:</span><span>{HoureFormat}</span></p>
                                </div>
                            </div>
                        </div>
                    })

                }
            </div>
            <div className="flex gap-5 items-center  relative bottom-0">
                <div className=" flex gap-2 self-center">
                    <input className=' hidden' type='file' ref={filePickerRef} onChange={handleFileChange} />
                    <button className="rounded-full flex items-center justify-center bg-white text-2xl   w-10 h-10" onClick={() => filePickerRef.current?.click()}>
                        <LiaPaperclipSolid />
                    </button>
                    <input className=' hidden' type='file' accept="audio/*" ref={audioPickerRef} onChange={handleAudioChange} />
                    <button className="rounded-full flex items-center justify-center bg-white text-2xl   w-10 h-10" onClick={() => audioPickerRef.current?.click()}>
                        <PiMicrophone />
                    </button>
                </div>
                <input type="text" onChange={handleInputChange} value={InputValue} name="chatInput" id="chatInput" placeholder='أكتب...' className=' text-dark text-base font-medium p-4 rounded-3xl bg-[#E1E3E0] flex-1 border-none' />
                <p onClick={handleSend} className=' cursor-pointer bg-BostanyPrimary rounded-full !w-[46px] !h-[46px]  flex items-center justify-center'>
                    <PiPaperPlaneRightFill className='w-[30px] h-[30px] text-white  rotate-180' />
                </p>
            </div>
        </div>
    )
}

export default ChatRoom