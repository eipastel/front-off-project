import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

export default function CampoDeTexto( { nomeInput, placeholder, campoDeSenha } ) {
  const [text, setText] = useState('');

  return (

    //TODO: enriquecer o componente com proprs dinamicas

    <View style={styles.container}>
      <Text style={styles.nomeInput}>{nomeInput}</Text>

      <TextInput
        style={styles.input}
        placeholder={placeholder || 'Digite algo...'}
        secureTextEntry={campoDeSenha}
        value={text}
        onChangeText={setText} 
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  input: {
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  nomeInput: {
    marginBottom: 3,
    fontSize: 16,
    color: '#888',
  },
});
