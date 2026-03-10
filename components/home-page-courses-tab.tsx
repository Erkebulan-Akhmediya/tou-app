import useGeneralStore from '@/store/generalStore'
import globalStyles from "@/styles/globalStyles";
import {FlatList, Text, View} from "react-native";

export default function HomePageCoursesTab() {
    const courses = useGeneralStore((state) => state.courses);
    return (
        <View>
            <Text>Курсы</Text>
            <FlatList
                data={courses}
                numColumns={2}
                renderItem={({item: course}) => (
                    <View style={{...globalStyles.container, flex: 1}}>
                        <Text>{course.name}</Text>
                    </View>
                )}
            />
        </View>
    )
}