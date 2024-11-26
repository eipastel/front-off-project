import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Text, Animated } from "react-native";

export default function TituloAnimado() {
  const tituloAnim = useRef(new Animated.Value(500)).current; 
  const subtituloAnim = useRef(new Animated.Value(500)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(tituloAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(subtituloAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.containerTitulo, { transform: [{ translateX: tituloAnim }] }]}>
        <Text style={styles.titulo}>Bem vindo</Text>
      </Animated.View>
      <Animated.View style={[styles.containerTitulo, { transform: [{ translateX: subtituloAnim }] }]}>
        <Text style={styles.subtitulo}>Off-Project</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  containerTitulo: {
    marginVertical: 10,
  },
  titulo: {
    fontSize: 62,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 32,
    color: "#38434D",
    textAlign: "center",
  },
});
