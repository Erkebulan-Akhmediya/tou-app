import {FlatList, Text, View} from "react-native";
import useGeneralStore from '@/store/generalStore'
import globalStyles from "@/styles/globalStyles";
import OptionalProfileImage from "@/components/optional-profile-image";
import axios from "axios";
import {useEffect} from "react";

async function getLessons() {
    const {setLessons} = useGeneralStore.getState()
    try {
        const {data} = await axios.get('/schedule/lessons');
        setLessons(data);
    } catch (e) {
        console.error(e);
    }
}

export default function HomePageMainTabLessons() {
    const lessons = useGeneralStore((state) => state.lessons);

    useEffect(() => {
        getLessons();
    }, [])

    return (
        <>
            <Text style={[globalStyles.text, globalStyles.titleText]}>Сегодня</Text>
            <FlatList
                horizontal
                data={lessons}
                contentContainerStyle={{gap: 10}}
                renderItem={({item: lesson}) => {
                    const time = new Date(lesson.time).toLocaleTimeString()
                    return (
                        <View style={[globalStyles.darkContainer, {justifyContent: 'space-between', width: 220, height: 120}]}>
                            <View>
                                <View style={[
                                    {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: '70%'},
                                    globalStyles.lightContainer
                                ]}>
                                    <OptionalProfileImage
                                        source={{uri: lesson.teacher.profilePictureUrl}}
                                        style={{width: 17, height: 17, borderRadius: 50}}
                                    />
                                    <Text style={[globalStyles.text, {fontSize: 12}]}>
                                        {lesson.teacher.surname} {lesson.teacher.name[0]}. {lesson.teacher.middleName ? lesson.teacher.middleName[0] : ''}.
                                    </Text>
                                </View>
                                <Text style={[globalStyles.text, {fontSize: 20}]}>{lesson.name}</Text>
                                <Text style={[globalStyles.text, {fontSize: 12}]}>{lesson.type}</Text>
                            </View>
                            <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 15}}>
                                <View style={{flexDirection: 'row', flex: 1}}>
                                    <Text style={[globalStyles.text, {fontSize: 10, marginRight: 7}]}>Время</Text>
                                    <Text
                                        style={[globalStyles.text, {fontSize: 10, fontWeight: 'bold'}]}
                                    >
                                        {time}
                                    </Text>
                                </View>
                                <View style={{flexDirection: 'row', flex: 1}}>
                                    <Text style={[globalStyles.text, {fontSize: 10, marginRight: 7}]}>Аудитория</Text>
                                    <Text style={[globalStyles.text, {fontSize: 10, fontWeight: 'bold'}]}>
                                        {lesson.classroom}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    )
                }}
            />
        </>
    )
}