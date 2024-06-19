import React, { useState, createRef } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  BackHandler
} from 'react-native';
import { MultipleSelectList } from 'react-native-dropdown-select-list';

function CadastroPage({ navigation }) {

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userAddress, setUserInterest] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errortext, setErrortext] = useState('');
  const [
    isRegistraionSuccess,
    setIsRegistraionSuccess
  ] = useState(false);

  const emailInputRef = createRef();
  const ageInputRef = createRef();
  const passwordInputRef = createRef();
  const interessesInputRef = createRef();

  const [selected, setSelected] = React.useState([]);
  const data = [
    { key: '1', value: '12-factor' },
    { key: '2', value: 'DevOps' },
    { key: '3', value: 'SecOps' },
    { key: '4', value: 'CI/CD' },
    { key: '5', value: 'Mobile React' },
    { key: '6', value: 'Android' },
    { key: '7', value: 'iOS' },
  ]

  buttonCanceled = () => {
    navigation.navigate("Login")
  }
  
  buttonSaved = () => {
    if (!userName) {
      alert('Por favor, preencha o nome');
      return;
    }
    if (!userEmail) {
      alert('Por favor, preencha o e-mail');
      return;
    }
    if (!userPassword) {
      alert('Por favor, preencha a senha');
      return;
    }
    if (!userAge) {
      alert('Por favor, preencha a idade');
      return;
    }
    if (selected.length == 0) {
      alert('Por favor, selecione pelo menos um interesse');
      return;
    }
    setErrortext('');
    if (!userName) {
      alert('Por favor, preencha o nome');
      return;
    }
    if (!userEmail) {
      alert('Por favor, preencha o e-mail');
      return;
    }
    if (!userPassword) {
      alert('Por favor, preencha a senha');
      return;
    }
    if (!userAge) {
      alert('Por favor, preencha a idade');
      return;
    }
    if (selected.length == 0) {
      alert('Por favor, selecione pelo menos um interesse');
      return;
    }
    setErrortext('');
    alert('Cadastro realizado com sucesso');
    postSaved();
    navigation.navigate("Login")
  }

  const postSaved = () => {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: userName,
        email: userEmail,
        password: userPassword,
        age: userAge,
        interests: selected
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        alert('Cadastro realizado com sucesso');
        navigation.navigate("Login")
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          marginTop: 100,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserName) => setUserName(UserName)}
              underlineColorAndroid="#f000"
              placeholder="Digite seu nome completo"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current && emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserEmail) => setUserEmail(UserEmail)}
              underlineColorAndroid="#f000"
              placeholder="Digite seu e-mail"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserPassword) =>
                setUserPassword(UserPassword)
              }
              underlineColorAndroid="#f000"
              placeholder="Digite sua senha"
              placeholderTextColor="#8b9cb5"
              ref={passwordInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={() =>
                ageInputRef.current &&
                ageInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserAge) => setUserAge(UserAge)}
              underlineColorAndroid="#f000"
              placeholder="Digite sua idade"
              placeholderTextColor="#8b9cb5"
              keyboardType="numeric"
              ref={ageInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                addressInputRef.current &&
                addressInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.StyleMultipleSelectList}>
            <MultipleSelectList
              placeholder="Escolha seus interesses"
              setSelected={(val) => setSelected(val)}
              data={data}
              save='value'
              onSelect={() => alert(selected)}
              label="Categories"
            />
          </View>
          {errortext != '' ? (
            <Text style={styles.errorTextStyle}>
              {errortext}
            </Text>
          ) : null}
          <View style={styles.ViewButtonStyle}>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={buttonSaved}>
              <Text style={styles.buttonTextStyle}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={buttonCanceled}>
              <Text style={styles.buttonTextStyle}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  StyleMultipleSelectList: {
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10
  },
  ViewButtonStyle: {
    flexDirection: 'row',
    // height: 40,
    // marginTop: 20,
    // marginLeft: 35,
    // marginRight: 35,
    // margin: 10,
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
    marginLeft: 35,
    marginRight: 35,
    marginTop: 100,
    marginBottom: 50,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'black',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});

export default CadastroPage;