import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Botao({ acao, titulo }) {
  return (
    <View style={styles.containerBotao}>
      <TouchableOpacity style={styles.button} onPress={acao}>
        <Text style={styles.buttonText}>{titulo || 'Login'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBotao: {
    width: '100%',
    paddingHorizontal: 20, 
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#6F6F6F', 
    marginVertical: 8,
    paddingVertical: 10, 
    borderRadius: 8, 
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});
