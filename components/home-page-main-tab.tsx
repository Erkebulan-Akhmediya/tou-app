import {ScrollView} from "react-native";
import HomePageMainTabLessons from "@/components/home-page-main-tab-lessons";
import HomePageMainTabNotifications from "@/components/home-page-main-tab-notifications";
import HomePageMainTabAnnouncements from "@/components/home-page-main-tab-announcements";

export default function HomePageMainTab() {
    return (
        <ScrollView>
            <HomePageMainTabLessons/>
            <HomePageMainTabNotifications/>
            <HomePageMainTabAnnouncements/>
        </ScrollView>
    )
}

