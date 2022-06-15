import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import React from 'react'
import { Text, View, StyleSheet } from "react-native"
import { useState } from 'react';

export const Setka = () => {

    const [value, setValue] = useState('1500');


    return (
        <View style={styles.block}>
            <Text>Тип сетки</Text>
            <RNPickerSelect
                useNativeAndroidPickerStyle={true}
                style={styles}
                placeholder={{}}
                onValueChange={(value) => setValue(value)}
                items={[
                    { label: 'Стандарт', value: '1500' },
                    { label: 'Антикошка', value: '2700' },
                    { label: 'Антипыль', value: '3200' },
                ]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    inputAndroid: {
        fontSize: 26,
        paddingHorizontal: 120,
        borderWidth: 1,
        paddingRight: 30,
        marginStart: 30,
        backgroundColor: '#2196f3',
        color: 'white',
    },
    inputIOS: {
        fontSize: 26,
        paddingHorizontal: 120,
        borderWidth: 1,
        paddingRight: 30,
        marginStart: 30,
        backgroundColor: '#2196f3',
        color: 'white',
    },
});