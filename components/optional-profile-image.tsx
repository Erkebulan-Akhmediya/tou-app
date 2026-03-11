import {DimensionValue, Image, ImageProps, ImageSourcePropType, ImageStyle, StyleProp} from 'react-native'
import {CircleUser} from "lucide-react-native";

export type OptionalProfileImageProps = Omit<ImageProps, 'source'> & {
    source: Omit<ImageSourcePropType, 'uri'> & { uri: string | null },
    style: StyleProp<ImageStyle> & { width: DimensionValue, height: DimensionValue },
}

export default function OptionalProfileImage(props: OptionalProfileImageProps) {
    if (props.source.uri === null)
        return (
            <CircleUser style={{width: props.style.width, height: props.style.height}}/>
        )
    return (
        <Image {...props} source={{uri: props.source.uri!}}/>
    )
}