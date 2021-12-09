import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

import {PRIMARY, LIGHT_TEXT} from '../utils/colors'
import { REGULAR } from '../utils/values';

const Button = ({onPress, text, buttonStyles, textStyles}) => {
    return(
        <>
            <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={[styles.button, buttonStyles]}>
                <Text style={[styles.text, textStyles]}>{text}</Text>
            </TouchableOpacity>
        </>
    )
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: PRIMARY,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    text: {
        color: LIGHT_TEXT,
        fontSize: 16,
        fontFamily: REGULAR,
    }
});

export default Button;