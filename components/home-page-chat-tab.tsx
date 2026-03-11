import {FlatList, Text, View} from "react-native";
import useChatStore, {ConversationState} from '@/store/chatStore'
import globalStyles from "@/styles/globalStyles";
import OptionalProfileImage from "@/components/optional-profile-image";

export default function MainPageChatTab() {
    const conversations: ConversationState[] = useChatStore((state) => state.conversations)
    return (
        <FlatList
            data={conversations}
            renderItem={({item: conversation}) => {
                const msg = conversation.messages[0]
                const msgDateTime = new Date(msg.time)
                const msgDateString = msgDateTime.toLocaleDateString()
                const msgDate = new Date().toLocaleDateString() === msgDateString ? 'Сегодня' : msgDateString
                return (
                    <View style={{...globalStyles.container, flexDirection: 'row'}}>
                        <OptionalProfileImage
                            source={{uri: conversation.person.profilePictureUrl}}
                            style={{width: 50, height: 50, borderRadius: 50}}
                        />
                        <View style={{flex:1}}>
                            <Text>{conversation.person.surname} {conversation.person.name[0]}. {conversation.person.middleName[0]}.</Text>
                            <Text>{msg.text}</Text>
                        </View>
                        <View>
                            <Text>{msgDate}</Text>
                            <Text>{msgDateTime.toLocaleTimeString()}</Text>
                        </View>
                    </View>
                )
            }}
        />
    )
}