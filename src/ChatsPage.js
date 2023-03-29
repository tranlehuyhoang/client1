import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'b6fd53fe-4f46-46a3-ab52-8847aaec20b1',
        props.user.username,
        props.user.secret
    );
    return <div style={{ height: '100vh', width: '100%' }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
    </div>;
//     <PrettyChatWindow
//     projectId="fe6f3ad1-8f5d-400a-8731-bc6d4a9aa8e2"
//     username={props.user.username}
//     secret={props.user.secret}
//     style={{ height: '100%' }}
// />
};
export default ChatsPage;
