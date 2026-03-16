import {Image, Text} from "react-native";
import globalStyles from "@/styles/globalStyles";
import useGeneralStore from "@/store/generalStore";
import {useEffect, useState} from "react";

export default function HomePageMainTabAnnouncements() {
    const announcementImageUrls = useGeneralStore((state) => state.announcementImageUrls);
    const [announcementIndex, setAnnouncementIndex] = useState(0);

    useEffect(() => {
        setInterval(() => {
            if (announcementIndex < announcementImageUrls.length - 1)
                setAnnouncementIndex(announcementIndex + 1);
            else
                setAnnouncementIndex(0)
        }, 3000)
    })
    return (
        <>
            <Text style={[globalStyles.text]}>Объявления</Text>
            <Image
                source={{uri: announcementImageUrls[announcementIndex]}}
                style={{width: '100%', height: 200, borderRadius: 10}}
            />
        </>
    )
}