import {create} from 'zustand'
import {PersonState} from "@/store/generalStore";

export type MessageState = {
    text: string,
    time: string,
}

export type ConversationState = {
    person: PersonState,
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