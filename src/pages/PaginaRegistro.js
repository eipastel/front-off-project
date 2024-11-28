import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ReferenciaImagens } from "../assets/ReferenciasImagens";
import { Cores } from "../colors/Cores";

export default function PaginaRegistro() {
    return (
        <View style={styles.container}>

            <Image source={ReferenciaImagens.EM_DESENVOLVIMENTO}  style={styles.imagem}/>

            <Text style={styles.emDesenvolvimento}>
                Em desenvolvimento...
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
      },
      emDesenvolvimento: {
        fontSize: 20,
        fontWeight: "bold",
      },
      imagem: { 
        height: "50%",
        resizeMode: "contain",
    },
});