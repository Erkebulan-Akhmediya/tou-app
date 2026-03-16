import {FlatList, Text, View} from "react-native";
import globalStyles from "@/styles/globalStyles";
import OptionalProfileImage from "@/components/optional-profile-image";
import useGeneralStore from "@/store/generalStore";

export default function HomePageMainTabNotifications() {
    const notifications = useGeneralStore((state) => state.notifications);
    return (
        <>
            <Text style={[globalStyles.text]}>Уведомления</Text>
            <FlatList
                data={notifications}
                style={{...globalStyles.darkContainer, height: 200}}
                contentContainerStyle={{paddingBottom: 20}}
                renderItem={({item: notification}) => (
                    <View style={{flexDirection: 'row', ...globalStyles.lightContainer, marginVertical: 5}}>
                        <OptionalProfileImage
                            source={{uri: notification.imageUrl}}
                            style={{width: 30, height: 30, borderRadius: 50}}
                        />
                        <View>
                            <Text style={[globalStyles.text]}>{notification.title}</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={[globalStyles.text]}>{notification.description}</Text>
                                <Text style={[globalStyles.text]}>{notification.time}</Text>
                            </View>
                        </View>
                    </View>
                )}
            />
        </>
    )
}