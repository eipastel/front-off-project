import {View, Image, StyleSheet, Text  } from "react-native";
import CampoDeTexto from "./CampoDeTexto";
import Botao from "./Botao";

export default function Login() {
  return (
      <View style={styles.container}>
        <View>
            <Text style={styles.title}>Bem vindo</Text>
            <Text style={styles.subtitle}>Off-Project</Text>
        </View>
        <Image source={require('../assets/login-image.png')} style={styles.image}/>
        <View style={styles.camposInteragiveis}>
          <CampoDeTexto
          placeholder="Digite seu email"
          nomeInput="Email"
          campoDeSenha={false}
          />
          <CampoDeTexto
          placeholder="Digite sua senha"
          nomeInput="Senha"
          campoDeSenha={true}
          />
          <Botao/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      paddingVertical: 5,
    },
    title: {
      fontSize: 64,
      fontWeight: "bold",
    },
    image: {
        width: 400,
        height: 300,
        resizeMode: 'contain',
    },
    camposInteragiveis: {
      width: 400
    },
    subtitle: {
      fontSize: 36,
      color: "#38434D",
    },
    });