const subscribers = {
    'messages-received': [] as MessagesReceivedSubscriberType[],
    'status-changed': [] as StatusChangedSubscriberType[]
}
let ws: WebSocket | null = null;

type EventsNamesType = 'messages-received' | 'status-changed';

export const closeHandler = ()=>{
    notifySubscribersAboutStatus('pending');
    setTimeout(()=>{createChannel()}, 5000);
};

export const messageHandle = (e: MessageEvent) => {
    let newMessages = JSON.parse(e.data);
    console.log('WE HAVE NEW MESSAGE');
    subscribers['messages-received'].forEach(s => s(newMessages))

};
export const openHandle = () => {
    notifySubscribersAboutStatus('ready')
}
export const errorHandle = () => {
    notifySubscribersAboutStatus('error')
    console.error('refresh page')
}

export const cleanUp = () => {
    ws?.removeEventListener('close', closeHandler);
    ws?.removeEventListener('message', messageHandle);
    ws?.removeEventListener('open', openHandle);
    ws?.removeEventListener('error', errorHandle);
}

const notifySubscribersAboutStatus = (status: StatusType) => {
    subscribers['status-changed'].forEach(s => s(status));
}

export function createChannel() {
    cleanUp();
    ws?.close();
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    notifySubscribersAboutStatus('pending')
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message', messageHandle)
    ws.addEventListener('open', openHandle)
    ws.addEventListener('error', errorHandle)
}


export const chatAPI = {
    start() {
        createChannel()
    },
    stop(){
        subscribers['messages-received'] = [];
        subscribers['status-changed'] = [];
        cleanUp();
        ws?.close();
    },
    subscribe(eventName: EventsNamesType, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {

        // @ts-ignore
        subscribers[eventName].push(callback)
        return () => {
            // @ts-ignore
            subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
        }
    },
    unsubscribe(eventName: EventsNamesType, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
        // @ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)

    },
    sendMessage(message: string) {
        ws?.send(message)
    }

}

type MessagesReceivedSubscriberType = (messages: ChatMessageUnitAPIType[]) => void
type StatusChangedSubscriberType = (status: StatusType) => void

export type ChatMessageUnitAPIType = {
    message: string
    photo: string
    userId: number
    userName: string
}
export type StatusType = 'pending' | 'ready' | 'error';