import React, {useEffect, useRef, useState} from 'react';
import {Button} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import Avatar from 'antd/lib/avatar/avatar';
import { UserOutlined } from '@ant-design/icons'
import {ChatMessageUnitAPIType, StatusType} from '../../api/chat-api';
import {useDispatch, useSelector} from 'react-redux';
import {
    ChatMessageWithIdType,
    sendMessage,
    startMessagesListening,
    stopMessagesListening
} from '../../redux/chatReducer';
import {AppStateType} from '../../redux/reduxStore';

const ChatPage: React.FC = () => {

    return(
        <div style={{gridColumn: '3 / span 8'}}>
            <Chat/>
        </div>
    )
}

const Chat: React.FC = () => {
    const dispatch = useDispatch()
    const status = useSelector<AppStateType, StatusType>(state => state.chat.status)

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening());
        }
    }, [])

    return(
        <div>
            {status === 'error' && <h3>Some error occured. Please, Refresh Page</h3>}
            <Messages />
            <AddMessagesForm />
        </div>
    )
}

const Messages: React.FC<{}> = (props) => {
    const messagesAnchorRef = useRef<HTMLDivElement>(null);
    const messages = useSelector<AppStateType, ChatMessageWithIdType[]>(state => state.chat.messages)
    const [isAutoScroll, SetIsAutoScroll] = useState<boolean>(false);

    const scrollHandle = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        let diffHeight = e.currentTarget.scrollHeight - e.currentTarget.scrollTop;
        if (Math.abs(diffHeight - e.currentTarget.clientHeight) < 300) {
            !isAutoScroll && SetIsAutoScroll(true)
        } else {
            !isAutoScroll && SetIsAutoScroll(false)
        }
    }

    useEffect(()=>{
        if (isAutoScroll) {
            messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [messages])

    return(
        <div style={{maxHeight: '50vh', margin: '1.6rem 0', overflowY: 'auto'}} onScroll={scrollHandle}>
            {messages.map(m => <Message key={m.id} m={m} />)}
            <div ref={messagesAnchorRef} style={{fontSize: 0}}>&nbsp;</div>
        </div>
    )
}

const Message: React.FC<{m: ChatMessageUnitAPIType}> = React.memo(({m}) => {
    console.log('render')
    return (
        <div style={{display: 'flex', alignItems: 'flex-end', width: '100%', margin: '1.6rem 0', backgroundColor: '#fff', borderRadius: '0.8rem', overflow: 'hidden'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '20%', padding: '1.6rem 1.6rem 0', backgroundColor: '#87b5cc', overflow: 'hidden'}}>
                <div>
                    {
                        m.photo?.length
                            ? <img src={m.photo} alt={m.userName} style={{maxWidth: '4rem', height: 'auto',}}/>
                            : <Avatar size="large" icon={<UserOutlined/>}/>
                    }
                </div>
                <div style={{overflow: 'hidden'}}>
                    <p>
                        {m.userName}
                    </p>
                </div>
            </div>
            <div style={{padding: '1.6rem 1.6rem 0', width: '80%', overflow: 'hidden'}}>
                <p>{m.message}</p>
            </div>
        </div>
    )
})
const AddMessagesForm: React.FC<{}> = (props) => {

    const [inputingMsg, setInputingMsg] = useState('')
    const status = useSelector<AppStateType, StatusType>(state => state.chat.status)
    const dispatch = useDispatch()

    const onClickSendMessage = () => {
        if (!inputingMsg) {
            return
        }
        dispatch(sendMessage(inputingMsg));
        setInputingMsg('');
    }

    return(
        <div>
            <div>
                <TextArea rows={6} onChange={(e) => setInputingMsg(e.currentTarget.value)} value={inputingMsg} />
            </div>
            <div>
                <Button disabled={status !== 'ready'} block type={'primary'} onClick={onClickSendMessage}>SEND</Button>
            </div>
        </div>
    )
}

export default ChatPage;