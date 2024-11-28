import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { ReferenciaImagens } from "../assets/ReferenciasImagens";
import { Cores } from "../colors/Cores";
import { useNavigation } from '@react-navigation/native';
import { Telas } from "../navigation/Telas";
import TituloAnimado from "../components/TituloAnimado";
import Botao from "../components/Botao";

export default function PaginaInicial() {

  const navigation = useNavigation();

  const navegarParaLogin = () => { navigation.navigate(Telas.LOGIN) };

  const navegarParaRegistro = () => { navigation.navigate(Telas.REGISTRO) };

    return (
        <View style={styles.container}>

        <Image source={ReferenciaImagens.TELA_INICIAL} style={styles.imagem}/>

        <View style={styles.caixaTextos}>
            <TituloAnimado/>
            <Text style={{marginTop: 4}}>
                Controle gastos, poupe inteligentemente, prospere sempre.
            </Text>
        </View>

        <View style={styles.camposInteragiveis}>

          <Botao
            titulo={"Login"}
            corFundoProp={Cores.padroes.vermelho}
            exibeFundo={true}
            acao={() => navegarParaLogin()}
          />

          <Botao
            titulo={"Registre-se"}
            corFundoProp={Cores.padroes.preto}
            exibeFundo={true}
            acao={() => navegarParaRegistro()}
          />

        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      paddingVertical: 5,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    containerTitulo: {
      alignSelf: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    imagem: {
        width: 400,
        height: 300,
        resizeMode: 'contain',
    },
    caixaTextos: {
        alignItems: 'center',
        marginBottom: 10,
    },
    camposInteragiveis: {
      width: 400,
    },
  });