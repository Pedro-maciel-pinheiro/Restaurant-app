import { Text, Pressable, PressableProps } from "react-native";
import { clsx } from "clsx";

type CategoryProps = PressableProps & {
    title: string
    isSelected?: boolean
}

export function CategoryButton({ title, isSelected, ...rest }: CategoryProps) {
    return (
        <Pressable className={
            clsx("bg-orange-500 px-2 justify-center rounded-t-2xl h-9" ,
            isSelected && "border-2 border-black") }
            {...rest}>
            <Text className="text-black font-bold text-sm">
                {title}
            </Text>
        </Pressable>
    )
}