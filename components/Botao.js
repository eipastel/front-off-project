import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Botao({ acao, titulo, corFundoProp, exibeFundo, corTextoProp, ajustaAoTexto }) {

  const corFundo = exibeFundo ? corFundoProp : 'transparent'
  const corTexto = corTextoProp ?? 'white'

  //chave alignSelf para ser lida como css
  const alignSelf = ajustaAoTexto ? 'flex-start' : '';

  return (
    <View style={styles.containerBotao}>
      
     <TouchableOpacity 
        style={[styles.botao, { backgroundColor: corFundo, alignSelf }]} 
        onPress={acao}>
        <Text style={[styles.textoBotao, {color: corTexto}]}>{titulo}</Text>
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
  botao: {
    marginVertical: 8,
    paddingVertical: 10, 
    borderRadius: 8, 
    alignItems: 'center',
  },
  textoBotao: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
