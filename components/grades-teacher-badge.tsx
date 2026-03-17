import {PersonState} from "@/store/generalStore";
import {Text, View} from "react-native";
import globalStyles from "@/styles/globalStyles";
import OptionalProfileImage from "@/components/optional-profile-image";

export default function GradesTeacherBadge({teacher}: { teacher: PersonState }) {
    const teacherFullName = `${teacher.surname} ${teacher.name[0]}.` +
        (teacher.middleName ? ` ${teacher.middleName[0]}.` : '')
    return (
        <View style={{...globalStyles.lightContainer, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 5}}>
            <OptionalProfileImage
                source={{uri: teacher.profilePictureUrl}}
                style={{width: 10, height: 10}}
            />
            <Text style={[globalStyles.text, {fontSize: 10, marginLeft: 5}]}>{teacherFullName}</Text>
        </View>
    )
}