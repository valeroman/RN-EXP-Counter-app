import { Text, Pressable, StyleSheet } from 'react-native'
import React from 'react';

interface Props {
    label: string;
    position?: 'left' | 'right';

    // Methods
    onPress?: () => void;
    onLongPress?: () => void;
}

export default function FAB({ label, onLongPress, onPress, position = 'right' }: Props) {
    return (
        <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            style={ ({ pressed }) => [
                styles.foatinngButton, 
                position === 'right' ? styles.positionRight : styles.positionLeft,
                pressed ? { opacity: 0.7 } : { opacity: 1 }
            ]}
            
        >
            <Text style={{ color: 'white', fontSize: 20 }}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    foatinngButton: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: '#65558F',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        elevation: 3,
        shadowRadius: 4,
    },

    positionRight: {
        right: 20,
    },

    positionLeft: {
        left: 20
    }
})