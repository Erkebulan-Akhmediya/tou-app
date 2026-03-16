import {FlatList, Text, View} from "react-native";
import useGeneralStore from '@/store/generalStore'
import globalStyles from "@/styles/globalStyles";
import OptionalProfileImage from "@/components/optional-profile-image";

export default function HomePageMainTabLessons() {
    const lessons = useGeneralStore((state) => state.lessons);
    return (
        <>
            <Text style={[globalStyles.text]}>Сегодня</Text>
            <FlatList
                horizontal
                data={lessons}
                contentContainerStyle={{gap: 10}}
                renderItem={({item: lesson}) => (
                    <View style={{...globalStyles.darkContainer}}>
                        <View style={[{flexDirection: 'row'}, globalStyles.lightContainer]}>
                            <OptionalProfileImage
                                source={{uri: lesson.teacher.profilePictureUrl}}
                                style={{width: 20, height: 20, borderRadius: 50}}
                            />
                            <Text style={[globalStyles.text]}>
                                {lesson.teacher.surname} {lesson.teacher.name[0]}. {lesson.teacher.middleName ? lesson.teacher.middleName[0] : ''}.
                            </Text>
                        </View>
                        <Text style={[globalStyles.text]}>{lesson.name}</Text>
                        <Text style={[globalStyles.text]}>{lesson.type}</Text>
                        <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 15}}>
                            <View style={{flexDirection: 'row', flex: 1}}>
                                <Text style={[globalStyles.text]}>Время</Text>
                                <Text style={[globalStyles.text]}>{lesson.time}</Text>
                            </View>
                            <View style={{flexDirection: 'row', flex: 1}}>
                                <Text style={[globalStyles.text]}>Аудитория</Text>
                                <Text style={[globalStyles.text]}>{lesson.classroom}</Text>
                            </View>
                        </View>
                    </View>
                )}
            />
        </>
    )
}