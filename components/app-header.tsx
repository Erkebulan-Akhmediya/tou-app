import {Image} from 'react-native'
import useGeneralStore from "@/store/generalStore";

export default function AppHeader() {
    const student = useGeneralStore((state) => state.student);
    return (
        <Image
            source={{uri: student.profilePictureUrl}}
            style={{width: 50, height: 50, borderRadius: 50}}
        />
    )
}