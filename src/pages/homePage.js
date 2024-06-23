import React from 'react';
import {
  ScrollView, Text, StyleSheet, View, TouchableOpacity,
} from 'react-native';

const HomePage = ({ navigation }) => {

  const buttonCurso = () => {
    navigation.navigate('Curso');
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerTop}>
        <Text style={styles.headerText}>Temas de estudos</Text>
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerText}
          activeOpacity={0.5}
          onPress={buttonCurso}>
          <Text style={styles.headerText}>Princípios do 12 Factor App</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>I. Base de Código</Text>
      <Text style={styles.content}>Uma base de código com rastreamento utilizando controle de revisão, muitos deploys.</Text>
      {/* Repeat for other factors */}
      <Text style={styles.title}>XII. Processos de Administração</Text>
      <Text style={styles.content}>Execute tarefas de administração/gerenciamento como processos pontuais</Text>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerText}
          activeOpacity={0.5}
          onPress={buttonCurso}>
          <Text style={styles.headerText}>DevOps</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>O que o DevOps significa para as equipes?</Text>
      <Text style={styles.content}>O DevOps permite que funções anteriormente isoladas – desenvolvimento, operações de TI, engenharia da qualidade e segurança – atuem de forma coordenada e colaborativa para gerar produtos melhores e mais confiáveis.</Text>
      {/* Repeat for other factors */}
      <Text style={styles.title}>Azure DevOps</Text>
      <Text style={styles.content}>Azure DevOps Server, anteriormente conhecido como Team Foundation Server e Visual Studio Team System, é um produto da Microsoft que fornece controle de versão, relatórios, gerenciamento de requisitos, gerenciamento de projetos, compilações automatizadas, testes e recursos de gerenciamento de lançamento.</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#f4f4f4',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#0056b3',
    fontWeight: 'bold',
  },
  headerTop: {
    backgroundColor: '#ffffff',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    marginTop: 20,
    marginBottom: 5,
    fontSize: 18,
    color: '#0056b3',
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
    color: '#333',
  },
  buttonStyle: {
    backgroundColor: '#24353f',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    width: 150,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 15,
    marginRight: 35,
    marginTop: 10,
    marginBottom: 10,
  },
  ViewButtonStyle: {
    flexDirection: 'row',
    // height: 40,
    // marginTop: 20,
    // marginLeft: 35,
    // marginRight: 35,
    // margin: 10,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  }
});

export default HomePage;