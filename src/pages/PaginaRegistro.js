import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import { ReferenciaImagens } from "../assets/ReferenciasImagens";
import { Cores } from "../colors/Cores";
import CampoDeTexto from "../components/CampoDeTexto";
import Botao from "../components/Botao";

export default function PaginaRegistro() {
    return (
        <View style={styles.container}>

            <Text style={styles.textoCadastro}>Crie sua conta</Text>
            <Text style={styles.subTextoCadastro}>e comece a poupar conosco!</Text>

            <Image source={ReferenciaImagens.REGISTRO} style={{width: 300, height: 300, alignSelf: 'center'}}/>

            <View style={styles.camposInformacoes}>

                <CampoDeTexto
                    placeholder={"Digite seu nome"}
                    nomeInput={"Nome"}
                />
                
                <CampoDeTexto
                    placeholder={"Digite seu email"}
                    nomeInput={"Email"}
                />

                <CampoDeTexto
                    placeholder={"Digite sua senha"}
                    nomeInput={"Senha"}
                />

                {/* //TODO: verificar se ainda vai usar o campo telefone */}

                {/* <CampoDeTexto
                    placeholder={"Digite seu telefone"}
                    nomeInput={"Telefone"}
                /> */}

            </View>
            
            <Botao
                titulo={"Registrar-se"}
                corFundoProp={Cores.padroes.preto}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      },
      textoCadastro: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      subTextoCadastro: {
        fontSize: 16,
        textAlign: 'center',
      },
    camposInformacoes: {
        marginBottom: 10,
    },
     
});