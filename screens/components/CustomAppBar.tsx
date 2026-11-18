import { Appbar } from 'react-native-paper';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';


export default function CustomAppBar({ navigation, back, }: NativeStackHeaderProps) { //käy läpi route ja  options  myös jos tarvit niitä joskus
    return (
        <Appbar.Header>
            <Appbar.Content title="MD Nav Demo" />
            {back ? ( //jos back on mahdollinen niin:
                <Appbar.BackAction
                    onPress={() => navigation.goBack()}
                />
            ) : ( //muuten:
                <Appbar.Action
                    icon="arrow-right"
                    onPress={() => navigation.navigate('Second')}
                />
            )}


        </Appbar.Header>
    );
}