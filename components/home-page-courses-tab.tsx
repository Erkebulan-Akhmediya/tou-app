import useGeneralStore from '@/store/generalStore'
import globalStyles from "@/styles/globalStyles";
import {FlatList, Text, View} from "react-native";
import homePageTabStyles from "@/styles/homePageTabStyles";

export default function HomePageCoursesTab() {
    const courses = useGeneralStore((state) => state.courses);
    return (
        <View>
            <Text style={[globalStyles.text, homePageTabStyles.bigText]}>Курсы</Text>
            <FlatList
                data={courses}
                numColumns={2}
                contentContainerStyle={{gap: 10, paddingBottom: 20}}
                columnWrapperStyle={{gap: 10}}
                renderItem={({item: course}) => (
                    <View style={{...globalStyles.darkContainer, flex: 1, height: 100, justifyContent: 'flex-end', padding: 15}}>
                        <Text style={[globalStyles.text, {fontSize: 15}]}>{course.name}</Text>
                    </View>
                )}
            />
        </View>
    )
}