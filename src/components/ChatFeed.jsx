import MessageForm from "./MessageForm"
import MyMessage from "./MyMessage"
import TheirMessage from "./ThierMessage"

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props
    const chat = chats && chats[activeChat];
    
    return (
        <div>Chat Feed</div>
    )

}

export default ChatFeed
