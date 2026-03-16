import {SceneMap, TabBar, TabView} from "react-native-tab-view";
import {useState} from "react";
import HomePageMainTab from "@/components/home-page-main-tab";
import HomePageCoursesTab from "@/components/home-page-courses-tab";
import MainPageChatTab from "@/components/home-page-chat-tab";

export default function HomePageTabs() {
    const [index, setIndex] = useState(0)
    const routes = [
        {key: 'main', title: 'Главная'},
        {key: 'courses', title: 'Курсы'},
        {key: 'chat', title: 'Чат'},
    ]
    const renderScene = SceneMap({
        main: HomePageMainTab,
        courses: HomePageCoursesTab,
        chat: MainPageChatTab
    })
    return (
        <TabView
            onIndexChange={setIndex}
            navigationState={{index, routes}}
            renderScene={renderScene}
            renderTabBar={props => (
                <TabBar
                    style={{backgroundColor: 'transparent'}}
                    indicatorStyle={{backgroundColor: 'white'}}
                    inactiveColor='#FFFFFF99'
                    {...props}
                />
            )}
        ></TabView>
    )
}