import useGeneralStore from "@/store/generalStore";
import OptionalProfileImage from "@/components/optional-profile-image";

export default function AppHeader() {
    const student = useGeneralStore((state) => state.student);
    return (
        <OptionalProfileImage
            source={{uri: student.profilePictureUrl}}
            style={{width: 50, height: 50, borderRadius: 50}}
        />
    )
}