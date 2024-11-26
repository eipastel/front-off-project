import {View, Image, StyleSheet, } from "react-native";
import { ReferenciaImagens } from "../assets/ReferenciasImagens";
import { Cores } from "../colors/Cores";
import TituloAnimado from "../components/TituloAnimado";
import CampoDeTexto from "../components/CampoDeTexto";
import Botao from "../components/Botao";

export default function Login() {
  return (
      <View style={styles.container}>

        <TituloAnimado/>

        <Image source={ReferenciaImagens.login} style={styles.image}/>

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
      paddingHorizontal: 20,
      paddingVertical: 5,
    },
    containerTitulo: {
      alignSelf: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    titulo: {
      fontSize: 64,
      fontWeight: "bold",
      textAlign: 'center',
    },
    subtitulo: {
      fontSize: 36,
      color: "#38434D",
      textAlign: 'center',
    },
    image: {
        width: 400,
        height: 300,
        resizeMode: 'contain',
    },
    camposInteragiveis: {
      width: 400,
    },
    crieSuaContaTexto : {
      width: '100%',
      textAlign: 'center',
      fontSize: 18,
      color: Cores.padroes.preto,
    },
    });