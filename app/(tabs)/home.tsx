import HomePageTabs from "@/components/home-page-tabs";
import {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import useGeneralStore, {CourseState, type LessonState, NotificationState} from '@/store/generalStore';
import globalStyles from "@/styles/globalStyles";

function initialFetch(): void {
    const student = {
        name: 'Вонён',
        profilePictureUrl: "https://i0.wp.com/bloganchoi.com/wp-content/uploads/2023/03/jang1wonyoung1.jpg",
    }
    const gpa = 3.6
    const week = {number: 3, isNumerator: true}
    const lessons: LessonState[] = [
        {
            teacher: {
                profilePictureUrl: 'https://wallpapercat.com/w/full/3/7/0/2068046-1920x1080-desktop-1080p-demolition-movie-background-photo.jpg',
                surname: 'Ахмедия',
                name: 'Еркебұлан',
                middleName: 'Ерланұлы'
            },
            name: 'System Design',
            type: 'Лекция',
            time: '14:20',
            classroom: 'A-113'
        },
        {
            teacher: {
                profilePictureUrl: 'https://cdn.britannica.com/02/162002-050-02512608/Tupac-Shakur-1993.jpg',
                surname: 'Смагулов',
                name: 'Асланбек',
                middleName: 'А'
            },
            name: 'DBMS',
            type: 'Практика',
            time: '15:10',
            classroom: 'A-114'
        }
    ]
    const notifications: NotificationState[] = [
        {
            imageUrl: 'https://wallpapercat.com/w/full/3/7/0/2068046-1920x1080-desktop-1080p-demolition-movie-background-photo.jpg',
            title: 'Новое сообщение!',
            description: 'Ахмедия Е. Е.',
            time: '11:20',
        },
        {
            imageUrl: 'https://i.pinimg.com/originals/0e/6e/11/0e6e112ad264d42985cef412a78d07c5.jpg',
            title: 'Новое сообщение!',
            description: 'Амантай А. А.',
            time: '12:20',
        },
        {
            imageUrl: 'https://cdn.britannica.com/02/162002-050-02512608/Tupac-Shakur-1993.jpg',
            title: 'Новое сообщение!',
            description: 'Смагулов А. А.',
            time: '13:20',
        },
        {
            imageUrl: 'https://statico.profootballnetwork.com/wp-content/uploads/2026/02/09224943/what-eileen-gu-said-winning-02-10-26-1920x1280.jpg',
            title: 'Новое сообщение!',
            description: 'Гу А. Э.',
            time: '14:20',
        }
    ]
    const announcementImageUrls = [
        'https://i.imgflip.com/73ezmf.jpg',
        'https://i.kym-cdn.com/entries/icons/original/000/052/449/bloxburg-news.jpg',
        'https://i.kym-cdn.com/entries/icons/original/000/051/821/cover6.jpg',
        'https://i.kym-cdn.com/editorials/icons/original/000/014/592/kirkified-explained.jpg',
        'https://i.kym-cdn.com/editorials/icons/original/000/009/155/druski_explainer.jpg'
    ]
    const courses: CourseState[] = []

    for (let i = 1; i <= 10; i++)
        courses.push({
            name: `Предмет ${i}`,
            type: '',
            faculty: '',
        })

    const {setStudent, setGpa, setWeek, setLessons, setNotifications, setAnnouncementImageUrls, setCourses} = useGeneralStore.getState();
    setStudent(student)
    setGpa(gpa)
    setWeek(week)
    setLessons(lessons)
    setNotifications(notifications)
    setAnnouncementImageUrls(announcementImageUrls)
    setCourses(courses)
}

export default function Home() {
    const student = useGeneralStore((state) => state.student);
    const gpa = useGeneralStore((state) => state.gpa);
    const week = useGeneralStore((state) => state.week);

    useEffect(() => {
        initialFetch();
    }, [])

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1, flexDirection: 'column', padding: 20}}>
                <Image
                    source={{uri: student.profilePictureUrl}}
                    style={{width: 50, height: 50, borderRadius: 50}}
                />
                <Text>Сәлем, {student.name}</Text>
                <View
                    style={{...styles.generalInfoRow}}>
                    <View style={{...globalStyles.container, flex: 1}}>
                        <Text>Мой GPA</Text>
                        <Text>{gpa}</Text>
                    </View>
                    <View style={{...globalStyles.container, flex: 1}}>
                        <Text>Неделя №{week.number}</Text>
                        <Text>{week.isNumerator ? 'Числитель' : 'Знаменатель'}</Text>
                    </View>
                </View>
                <HomePageTabs/>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    generalInfoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 15,
    }
})