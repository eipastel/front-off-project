import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FlechaNavegacao( {acao} ) {
    return (
        <TouchableOpacity onPress={() => acao()}>
            <Ionicons name="arrow-back" size={24} color="black" style={{ marginLeft: 20 }} />
          </TouchableOpacity>
    );
}