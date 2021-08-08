import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'
import './App.css';

const App = () => {
    const projectID = process.env.REACT_APP_PROJECT_ID
    const adminUserName = process.env.REACT_APP_ADMIN_USER_NAME
    const adminUserSecret = process.env.REACT_APP_ADMIN_SECRET


    return (
        <ChatEngine
        height='100vh'
        projectID={projectID}
        userName={adminUserName}
        userSecret={adminUserSecret}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/> }
         />
    )
}

export default App
