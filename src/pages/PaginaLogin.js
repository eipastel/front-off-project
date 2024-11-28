import React from "react";

import { View, Image, StyleSheet, Text } from "react-native";
import { ReferenciaImagens } from "../assets/ReferenciasImagens";
import { Cores } from "../colors/Cores";
import CampoDeTexto from "../components/CampoDeTexto";
import Botao from "../components/Botao";

export default function PaginaLogin() {
  return (
      <View style={styles.container}>

        {/* TODO: trocar a imagem e inserir um texto de "que bom te ver novamente" */}
        <Image source={ReferenciaImagens.BEM_VINDO} style={styles.image}/>

        <View style={styles.containerTexto}>
          <Text style={styles.titulo}>Olá novamente</Text>
          <Text style={styles.subtitulo}>continue controlando seus gastos.</Text>  
        </View>

        <View style={styles.camposInteragiveis}>

          <CampoDeTexto
            placeholder="Digite seu email"
            nomeInput="Email"
          />

          <CampoDeTexto
            placeholder="Digite sua senha"
            nomeInput="Senha"
            campoDeSenha={true}
          />

          <Botao
            titulo={"Login"}
            corFundoProp={Cores.padroes.vermelho}
            exibeFundo={true}
          />

          <Botao
            titulo={"Crie sua conta"}
            corTextoProp={Cores.padroes.preto}
            ajustaAoTexto={true}
          />

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
    containerTitulo: {
      alignSelf: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    containerTexto: {
      marginVertical: 20,
    },
    titulo: {
      fontSize: 38,
      fontWeight: "bold",
      textAlign: 'center',
    },
    subtitulo: {
      fontSize: 20,
      color: "#38434D",
      textAlign: 'center',
    },
    image: {
        width: 400,
        height: 300,
        resizeMode: 'contain',
    },
    camposInteragiveis: {
      width: '100%',
    },
    crieSuaContaTexto : {
      width: '100%',
      textAlign: 'center',
      fontSize: 18,
      color: Cores.padroes.preto,
    },
  });