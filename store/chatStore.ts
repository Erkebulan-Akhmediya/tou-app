import {create} from 'zustand'

export type MessageState = {
    text: string,
    time: string,
}

export type ConversationState = {
    person: {
        surname: string,
        name: string,
        middleName: string,
        profilePictureUrl: string,
    },
    messages: MessageState[],
}

export type ChatState = {
    conversations: ConversationState[]
    setConversations: (conversations: ConversationState[]) => void,
}

export default create<ChatState>()((set) => ({
    conversations: [],
    setConversations: (conversations) => set({conversations}),
}))