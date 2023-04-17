import { View, Text, StyleSheet } from "react-native";
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
        <View style={styles.row}>
            <CheckBox style={styles.check}
                value={verifyCheck()}
                onValueChange={() => verifyCheck() ? removeChecked(item.id) : handleChecked(item.id)}
                color={verifyCheck() ? '#5E60CE' : undefined}
            />
            <Text style={styles.title}>
                {item.titulo}
            </Text>
        </View >
    )
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        alignItems: 'center',
        flexDirection: "row",
        marginRight: 55,
    },
    title: {
        flexWrap: 'wrap',
    },

    check: {
        marginRight: 10,
        alignItems: 'center',
        alignSelf: 'center',
    },
});


