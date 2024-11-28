import ChatRoom from '../../components/BostanyComponents/ChatRoom';
import HistoryChats from '../../components/BostanyComponents/HistoryChats';
import { useAppSelector } from '../../redux/store';
const Messages = () => {
    const chatMessages = useAppSelector((state) => state.chatMessage.chats)
    const SelectedChatId = useAppSelector((state) => state.chatMessage.SelectedChatId)
    return (
        <div className="mt-section py-14 2xl:!pr-10 2xl:!pl-24 md:!pr-5 md:!pl-10 flex gap-5">
            {/* incoming Messages */}
            <HistoryChats Chats={chatMessages} />
            {/* Chat */}
            <ChatRoom SelectedChat={chatMessages[SelectedChatId]} />
        </div >
    )
}
export default Messages