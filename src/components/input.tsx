import { TextInput ,TextInputProps} from "react-native";
import colors from "tailwindcss/colors";

export function Input({...rest}:TextInputProps){
    return (
    <TextInput {...rest} 
    multiline 
    textAlignVertical="top"
    placeholderTextColor={colors.slate[800]}
    className="text-black bg-slate-300 h-32  rounded-md px-5 py-4 font-body text-sm"
    
    /> 
    )
}