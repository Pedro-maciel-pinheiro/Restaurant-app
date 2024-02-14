import { ActivityIndicator, View } from "react-native";
import  Colors  from "tailwindcss/colors";

export function Loading(){
    return (
        <View className="flex-1 items-center justify-center bg-zinc-100"> 
            <ActivityIndicator color={Colors.black}/>
        </View>
    )
}