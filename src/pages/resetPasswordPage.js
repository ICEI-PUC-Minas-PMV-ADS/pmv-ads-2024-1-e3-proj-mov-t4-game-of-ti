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

const ResetPasswordPage = ({ navigation }) => {

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userIinterests, setUserinterests] = React.useState([]);;
  const [idUser, setIdUser] = useState('');

  const emailInputRef = createRef();
  const passwordInputRef = createRef();

  buttonCanceled = () => {
    navigation.navigate("Login")
  }

  buttonSaved = () => {
    if (!userEmail) {
      alert('Por favor, preencha o e-mail');
      return;
    }
    if (!userPassword) {
      alert('Por favor, preencha a senha');
      return;
    }
    if (!newUserPassword) {
      alert('Por favor, preencha a nova senha');
      return;
    }
    if (userPassword !== newUserPassword) {
      alert('As senhas não conferem');
      return;
    }
    getIdUser();
    updatePassword();
    navigation.navigate("Login")
  }

  const getIdUser = async ( ) => {
    const response = await fetch('http://localhost:3000/users?email=' + userEmail, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    await response.json().then((data) => {
      data.map((user) => {
        if (user.email === userEmail) {
          setIdUser(user.id);
          setUserName(user.name);
          setUserinterests(user.interests);
          setUserAge(user.age);
        } else {
          Alert.alert('Usuário não encontrado!',
            'Preencha o formulário para se cadastrar!',
            [{ Text: 'OK', onPress: () => { navigation.navigate('Cadastro') } }]
          )
          return;
        }
      });
    });
  }

  const updatePassword = async () => {
    const response = await fetch('http://localhost:3000/users/' + idUser, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: idUser,
        name: userName,
        email: userEmail,
        password: newUserPassword,
        age: userAge,
        interests: userIinterests
      }),
    });
    await response.json().then((data) => {
      data.map((user) => {
        if (user.email === userEmail) {
          setNewUserPassword(user.password);
        } else {
          Alert.alert('Usuário não encontrado!',
            'Preencha o formulário para se cadastra!' + idUser,
            [{ Text: 'OK', onPress: () => { navigation.navigate('Cadastro') } }]
          )
          return;
        }
      });
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff', marginTop: 80 }}>
      <KeyboardAvoidingView enabled>
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(UserEmail) => setUserEmail(UserEmail)}
            underlineColorAndroid="#f000"
            placeholder="Digite seu e-mail"
            placeholderTextColor="#8b9cb5"
            keyboardType="email-address"
            autoCapitalize="none"
            spellCheck={false}
            returnKeyType="next"
            onSubmitEditing={() =>
              passwordInputRef.current &&
              passwordInputRef.current.focus()
            }
          />
        </View>
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(UserPassword) =>
              setUserPassword(UserPassword)
            }
            underlineColorAndroid="#f000"
            placeholder="Digite sua nova senha"
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
            onChangeText={(NewUserPassword) =>
              setNewUserPassword(NewUserPassword)
            }
            underlineColorAndroid="#f000"
            placeholder="Confirme sua nova senha"
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

export default ResetPasswordPage;
