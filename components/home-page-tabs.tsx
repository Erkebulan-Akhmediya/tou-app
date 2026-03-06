import {SceneMap, TabView} from "react-native-tab-view";
import {useState} from "react";
import {FlatList, Image, Text, View} from "react-native";
import useGeneralStore from '@/store/generalStore'
import globalStyles from "@/styles/globalStyles";

function MainRoute() {
    const lessons = useGeneralStore((state) => state.lessons);
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
                            <Image
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
        </View>
    )
}

function CoursesRoute() {
    return (
        <Text>CoursesRoute</Text>
    )
}

function ChatRoute() {
    return (
        <Text>ChatRoute</Text>
    )
}

export default function HomePageTabs() {
    const [index, setIndex] = useState(0)
    const routes = [
        {key: 'main', title: 'Главная'},
        {key: 'courses', title: 'Курсы'},
        {key: 'chat', title: 'Чат'},
    ]
    const renderScene = SceneMap({
        main: MainRoute,
        courses: CoursesRoute,
        chat: ChatRoute
    })
    return (
        <TabView
            onIndexChange={setIndex}
            navigationState={{index, routes}}
            renderScene={renderScene}
        ></TabView>
    )
}