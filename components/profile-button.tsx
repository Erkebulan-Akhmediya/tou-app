import {Href, useRouter} from "expo-router";
import {Button} from "react-native-paper";
import {ChevronRight} from "lucide-react-native";

export type ProfileButtonPropsType = {
    href: Href,
    text: string,
}

export default function ProfileButton(props: ProfileButtonPropsType) {
    const router = useRouter();
    return (
        <Button
            onPress={() => router.push(props.href)}
            contentStyle={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
                width: '100%'
            }}
            textColor='white'
            icon={({color, size}) =>
                <ChevronRight color={color} size={size}/>}
        >
            {props.text}
        </Button>
    )
}