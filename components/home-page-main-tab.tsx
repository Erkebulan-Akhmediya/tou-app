import {FlatList, Text, View, Image} from "react-native";
import useGeneralStore from '@/store/generalStore'
import globalStyles from "@/styles/globalStyles";
import {useEffect, useState} from "react";
import OptionalProfileImage from "@/components/optional-profile-image";

export default function HomePageMainTab() {
    const lessons = useGeneralStore((state) => state.lessons);
    const notifications = useGeneralStore((state) => state.notifications);
    const announcementImageUrls = useGeneralStore((state) => state.announcementImageUrls);
    const [announcementIndex, setAnnouncementIndex] = useState(0);

    useEffect(() => {
        setInterval(() => {
            if (announcementIndex < announcementImageUrls.length - 1)
                setAnnouncementIndex(announcementIndex + 1);
            else
                setAnnouncementIndex(0)
        }, 3000)
    })

    return (
        <View>
            <Text>Сегодня</Text>
            <FlatList
                horizontal
                data={lessons}
                contentContainerStyle={{gap: 10}}
                renderItem={({item: lesson}) => (
                    <View style={{...globalStyles.container}}>
                        <View style={{flexDirection: 'row'}}>
                            <OptionalProfileImage
                                source={{uri: lesson.teacher.profilePictureUrl}}
                                style={{width: 20, height: 20, borderRadius: 50}}
                            />
                            <Text>
                                {lesson.teacher.surname} {lesson.teacher.name[0]}. {lesson.teacher.middleName[0]}.
                            </Text>
                        </View>
                        <Text>{lesson.name}</Text>
                        <Text>{lesson.type}</Text>
                        <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 15}}>
                            <View style={{flexDirection: 'row', flex: 1}}>
                                <Text>Время</Text>
                                <Text>{lesson.time}</Text>
                            </View>
                            <View style={{flexDirection: 'row', flex: 1}}>
                                <Text>Аудитория</Text>
                                <Text>{lesson.classroom}</Text>
                            </View>
                        </View>
                    </View>
                )}
            />
            <Text>Уведомления</Text>
            <FlatList
                data={notifications}
                style={{...globalStyles.container, height: 200}}
                contentContainerStyle={{paddingBottom: 20}}
                renderItem={({item: notification}) => (
                    <View style={{flexDirection: 'row', ...globalStyles.container, marginVertical: 5}}>
                        <OptionalProfileImage
                            source={{uri: notification.imageUrl}}
                            style={{width: 30, height: 30, borderRadius: 50}}
                        />
                        <View>
                            <Text>{notification.title}</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text>{notification.description}</Text>
                                <Text>{notification.time}</Text>
                            </View>
                        </View>
                    </View>
                )}
            />
            <Text>Объявления</Text>
            <Image
                source={{uri: announcementImageUrls[announcementIndex]}}
                style={{width: '100%', height: 200, borderRadius: 10}}
            />
        </View>
    )
}