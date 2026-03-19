import {Text} from "react-native";
import {TextInput} from "react-native-paper";

export type LoginTextInputProps = {
    value: string,
    onChangeText: (text: string) => void,
    label: string
}

export default function LoginTextInput({value, onChangeText, label}: LoginTextInputProps) {
    return (
        <TextInput
            value={value}
            onChangeText={onChangeText}
            mode="outlined"
            label={<Text style={{fontSize: 25}}>{label}</Text>}
            outlineStyle={{
                borderRadius: 50,
            }}
            style={{marginBottom: 20}}
            contentStyle={{fontSize: 20}}
            activeOutlineColor='transparent'
        />
    )
}