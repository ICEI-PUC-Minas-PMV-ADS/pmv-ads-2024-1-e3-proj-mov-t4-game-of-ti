import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert
} from "react-native";

export default function App({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    loginOnPress = () => {
        getLogin();
    };

    const getLogin = async () => {
        const response = await fetch('http://localhost:3000/users', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });

        await response.json().then((data) => {
            data.map((user) => {
                if (user.email === email && reg.test(email)) {
                    setLoginPassword(user.password);
                } else {
                    Alert.alert("Usuário não encontrado!",
                        "Preencha o formulario para se cadastar!",
                        [{ Text: "OK", onPress: () => { navigation.navigate("Cadastro") } }]
                    )
                    return;
                }

                if (!password || password !== loginPassword) {
                    Alert.alert("Senha incorreta!",
                        "Caso tenha esquecido, redefina a senha clicando em 'Esqueceu sua senha?'!",
                        [{ Text: "OK" }]
                    )
                } else {
                    navigation.navigate("Home")
                }
            });
        });
    }

    resetPasswordOnPress = () => {
        navigation.navigate("ResetPassword")
    }

    return (
        <View style={styles.container}>

            <Image style={styles.image} source={require(".././assets/logo.png")} />

            <StatusBar style="auto" />

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="e-mail"
                    placeholderTextColor="#003f5c"
                    inputMode="email"
                    textContentType='emailAddress'
                    keyboardType="email-address"
                    autoCapitalize="none"
                    spellCheck={false}
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="senha"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            <TouchableOpacity onPress={this.resetPasswordOnPress}>
                <Text style={styles.forgot_button}>
                    Esqueceu sua senha?
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.loginOnPress} style={styles.login_button_container}>
                <Text style={styles.login_button_text}>
                    Entrar
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eadcdb',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 500,
        width: 500,
        resizeMode: 'contain'
    },
    inputView: {
        alignSelf: 'stretch',
        width: "70%",
        height: 45,
        margin: 5,
        marginLeft: 50,
        marginRight: 50,
        borderBottomColor: '#24353f',
        borderBottomWidth: 2
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    forgot_button: {
        height: 30,
        marginBottom: 20,
    },
    login_button_container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        width: "70%",
        height: 45,
        borderRadius: 4,
        elevation: 8,
        backgroundColor: "#24353f"
    },
    login_button_text: {
        color: '#fff'
    }
});