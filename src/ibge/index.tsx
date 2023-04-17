import { View, Text } from "react-native";
import CheckBox from 'expo-checkbox';

import { useIbgeStore } from '../store/useIbgeStore'

import { Item } from "../hooks/useIbge";

type Props = {
    item: Item
}

export function Ibge({ item }: Props) {
    const { handleChecked, checkedNews, removeChecked } = useIbgeStore();


    function verifyCheck(): boolean {
        return checkedNews.includes(item.id);
    }


    return (
        <View >
            <CheckBox
                value={verifyCheck()}
                onValueChange={() => verifyCheck() ? removeChecked(item.id) : handleChecked(item.id)}
                color={verifyCheck() ? '#5E60CE' : undefined}
            />
            <Text >
                {item.titulo}
            </Text>
        </View >
    )
}


