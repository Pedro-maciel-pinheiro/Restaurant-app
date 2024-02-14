import { View, Image, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Link } from 'expo-router'


type HeaderProps = {
    title: string
    cartQuantityItems: number
}



export function Header({ title, cartQuantityItems = 0 }: HeaderProps) {
    return (
        <View className='flex-row items-center justify-around border-b 
         border-slate-800 pb-2 mx-1'>


            <View className='flex-row '>
                 <Image source={require("@/assets/images/LOGO_Pinheiro-Ferraço-1-black.png")}
                    className=' h-20 w-14 '
                /> 
                
            </View>

            <Text className='text-xl font-heading mt-2 '> {
                    title
                }

                </Text>

            {
                cartQuantityItems > 0 &&
                <Link href="/cart" asChild>
                    <TouchableOpacity className='relative '>
                        <View className='bg-orange-500 w-5 h-5 rounded-full 
                        items-center justify-center top-2 z-10  -right-3.5 '>
                            <Text className='text-slate-900 font-bold text-xs'>
                                {cartQuantityItems}
                            </Text>
                        </View>
                        <Feather name='shopping-bag' color={colors.black} size={28} />
                    </TouchableOpacity>
                </Link>
            }

        </View>


    )
}

