// this file contains initial testing setup and should not be used in production
import useGeneralStore, {CourseState, LessonState, NotificationState} from "@/store/generalStore";
import useChatStore, {ConversationState} from "@/store/chatStore";
import usePerformanceStore from "@/store/performanceStore";

export function initialFetch(): void {
    const student = {
        name: 'Вонён',
        surname: 'Джан',
        middleName: '',
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

    const conversations: ConversationState[] = [
        {
            person: {
                surname: 'Ахмедия',
                name: 'Ерке',
                middleName: 'Ерланұлы',
                profilePictureUrl: 'https://wallpapercat.com/w/full/3/7/0/2068046-1920x1080-desktop-1080p-demolition-movie-background-photo.jpg'
            },
            messages: [
                {
                    text: 'Twin, where u at',
                    time: new Date().toISOString()
                },
                {
                    text: 'nigga',
                    time: (() => {
                        const date = new Date();
                        date.setHours(date.getHours() - 1);
                        return date.toISOString()
                    })()
                }
            ]
        }
    ]

    const {
        setStudent,
        setWeek,
        setLessons,
        setNotifications,
        setAnnouncementImageUrls,
        setCourses
    } = useGeneralStore.getState();
    setStudent(student)
    setWeek(week)
    setLessons(lessons)
    setNotifications(notifications)
    setAnnouncementImageUrls(announcementImageUrls)
    setCourses(courses)
    const {setConversations} = useChatStore.getState();
    setConversations(conversations)
    const {setGpa} = usePerformanceStore.getState();
    setGpa(gpa)
}
