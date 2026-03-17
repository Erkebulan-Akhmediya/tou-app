import {Text, View} from "react-native";
import globalStyles from "@/styles/globalStyles";
import OptionalProfileImage from "@/components/optional-profile-image";
import useGeneralStore from "@/store/generalStore";

export default function HomePageMainTabNotifications() {
    const notifications = useGeneralStore((state) => state.notifications);
    return (
        <>
            <Text style={[globalStyles.text, globalStyles.titleText]}>Уведомления</Text>
            <View style={[globalStyles.darkContainer, {height: 200, paddingBottom: 20}]}>
                {notifications.slice(0, 3) .map((notification, index) => (
                    <View key={index} style={{flexDirection: 'row', ...globalStyles.lightContainer, marginVertical: 5}}>
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
                ))}
            </View>
        </>
    )
}