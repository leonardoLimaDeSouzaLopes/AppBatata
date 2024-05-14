import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Pressable, Text, ScrollView, StyleSheet, View } from 'react-native';

const corPrincipal = "#e0b040"
const corLetraBranca = "#ffffff"

export default function App() {

  const [imagem, setImagem] = useState(0)
  const [revelada, setRevelada] = useState(0)
  const frases = [
    "Sempre Siga o Caminho de BATATA",
    "BATATA!",
    "Clodoaldo Come BATATAS, Você Devia Fazer o Mesmo!",
    "Sempre que Estiver Incerto, Peça Conselhos a uma BATATA",
    "Batatinha Quando Nasce Te Ama de Montão, Batatinha Quando Cresce Enche seu Coração!",
    "Dinheiro Não Traz Felicidade, Só BATATAS Fazem Isso",
    "BBB Significa 'Big BATATAS Brasil'",
    "Os Verdadeiros Amigos São as BATATAS que Fazemos Pelo Caminho!",
    "O B no Simbolo do Bitcoin Vem de BATATA",
    "Caso Esteja Sozinho uma BATATA Pode-lhe Fazer Compania",
    "Se Estiver com Medo Saiba que a BATATA Está com Você!",
    '"BATATA OU MORTE!" Dom BATATA I',
    "É Incrível Como o BB Consegue Misturar Humor com BATATA",
    "Me Jogem aos Lobos que Eu Voltarei BATATA!",
    "O Cozimento de uma BATATA é uma Tragédia, o Cozimento de Várias Pessoas é Estatiística",
    "O Ignorante Afirma, O Sábio Dúvida E A Batata Reflete",
    "Eu Vos Declaro Potato E Batata",
    "República Federativa Das Batatas Unidas",
    "A Grande Batata Está Te Observando",
    "Muitas Pessoas Riram, Outras Pessoas Choraram Mas a Maioria Comeu BATATA!",
    '"Agora Me Tornei a Batata, O destruidor Do Mundo" Openheimer',
    "Batata Mecânica",
    "Batata Park",
    "Coma Batata Enquato Eles Dormem",
    "Tá Chovendo Batata!",
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

        <View style={{flex: 1, width: "40%",}}>
          {mostraBotao()}
        </View>

        <View style={{flex: 1, width: "40%",}}>
          <Pressable><Text>Caso Não Goste de Batatas Clique Aqui (ainda n implementamos a punicao n funciona)</Text></Pressable>
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
    fontSize: 20,
    marginBottom: 15,
  },
  botao: {
    backgroundColor: corPrincipal,
    color: corLetraBranca,
    fontSize: 24,
    textAlign: "center",
    borderRadius: 15,
    paddingVertical: 15,
    marginBottom: 15,
  },
});
