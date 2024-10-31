import { useDispatch } from "react-redux"
import { HistoryChatsProps } from "../../Types"
import { PutSelectedChatId } from "../../redux/Slices/chatMessageSlice"


const HistoryChats = ({ Chats }: HistoryChatsProps) => {
    const dispatch = useDispatch()
    const handleClick = (id: number) => {
        dispatch(PutSelectedChatId(id))
    }
    return (
        <div className=" w-[35%] h-[80vh]  overflow-y-scroll scrollbar-hide flex flex-col gap-10 p-4 bg-BostanySurfaceContainerLow">
            <p className=' text-[22px] font-medium text-BostanyOnSurface'>الرسائل الواردة</p>
            <div className="flex flex-col gap-10">
                {
                    Chats.map((chat, index) => {
                        const minute = chat.Messages[chat.Messages.length - 1].date.minute
                        const houre = chat.Messages[chat.Messages.length - 1].date.hour
                        const HoureFormat = houre > 12 ? `${houre - 12} م ` : `${houre} ص `
                        const ComingMessage = chat.Messages.filter((chat) => chat.From == 'Him' && chat.readed == false).length
                        return <div onClick={() => handleClick(chat.id)} className="flex  cursor-pointer justify-between w-full bg-BostanySurfaceContainer p-4 pr-2 items-center rounded-3xl" key={index}>
                            <div className="flex gap-1 items-center">
                                <img src={chat.Person.image} alt={chat.Person.image} className=' w-20 h-20 rounded-full' />
                                <div className="flex flex-col gap-2">
                                    <p className=' text-xl font-medium text-BostanyOnSurface'>{chat.Person.name}</p>
                                    <p className=' truncate w-28 text-base text-dark font-normal'>{chat.Messages[0].text}</p>
                                </div>
                            </div>
                            <div className=" flex flex-col gap-3   items-end">
                                <p className=' text-base text-dark font-normal flex' > <span>{minute}</span><span>:</span><span>{HoureFormat}</span></p>
                                {
                                    ComingMessage > 0 &&
                                    <p className=' p-1 bg-GeneralError rounded-full text-white w-6 h-6 flex items-center justify-center'>{ComingMessage}</p>
                                }
                            </div>
                        </div>
                    }
                    )
                }
            </div>
        </div>
    )
}

export default HistoryChats