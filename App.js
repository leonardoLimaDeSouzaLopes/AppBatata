import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Pressable, Text, ScrollView, StyleSheet, View } from 'react-native';

const corPrincipal = "#e0b040"
const corLetraBranca = "#ffffff"

export default function App() {

  const [imagem, setImagem] = useState(0)
  const [revelada, setRevelada] = useState(0)
  const frases = [
    "Sempre Siga o Caminho de Batata",
    "BATATA!",
    "Clodoaldo Come Batatas, Você Devia Fazer o Mesmo!",
    "Sempre que Estiver Inserto, Peça Conselhos a uma Batata",
    "Batatinha Quando Nasce Te Ama de Montão, Batatinha Quando Cresce Enche seu Coração!",
    "Dinheiro Não Traz Felicidade, Só Batatas Fazem Isso"
  ]
  const [mensagem, setMensagem] = useState();

  return (

    <View style={styles.body}>

      <StatusBar style="auto" />

      <View style={styles.container}>

        <View style={{flex: 3}}>
          {mostrarImagem(imagem)}
        </View>

        <View style={{flex: 1}}>
          {mostrarMensagem()}
        </View>

        <View style={{flex: 3, width: "25%",}}>
          {mostraBotao()}
        </View>

      </View>

    </View>

  );

  function mostrarImagem(indexImagem) {

    if (indexImagem == 0) {
      return (<Image source={require("./assets/potato.png")} style={styles.batata} />)
    } else if (indexImagem == 1) {
      return (<Image source={require("./assets/cut-potato.png")} style={styles.batata} />)
    }
  }

  function mostraBotao() {
    if (revelada == false) {
      return (<Pressable style={styles.botao} onPress={() => revelar()}>Revelar</Pressable>)
    } else if (revelada == true) {
      return (<Pressable style={styles.botao} onPress={() => reintegrar()}>Novo</Pressable>)
    }
  }

  function mostrarMensagem() {
    if (revelada) {
      return (<Text style={styles.mensagem}>{mensagem}</Text>)
    }
  }

  function revelar() {
    if (!revelada) {
      setImagem(1)
      setRevelada(true)
      setMensagem(frases[Math.floor(Math.random() * frases.length)])
    }
  }

  function reintegrar() {
    if (revelada) {
      setImagem(0)
      setRevelada(false)
    }
  }

}

const styles = StyleSheet.create({
  body: {
    fontFamily: "Arial",
    flex: 1,
  },
  container: {
    alignItems: "center",
    margin: "5%",
    height: 700,
    flex: 1,
  },
  batata: {
    width: 300,
    height: 300,
    marginBottom: 15,
  },
  mensagem: {
    textAlign: "center",
    marginBottom: 15,
  },
  botao: {
    backgroundColor: corPrincipal,
    color: corLetraBranca,
    textAlign: "center",
    paddingVertical: 15,
    marginBottom: 15,
  }
});
