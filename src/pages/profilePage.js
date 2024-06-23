import React, { useState, createRef, useEffect } from 'react';
import { set } from 'react-hook-form';
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

const ProfilePage = ({ navigation }) => {

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [idUser, setIdUser] = useState('');
    const [userIinterests, setUserinterests] = React.useState([]);
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
        { key: '1', value: ' 12-factor' },
        { key: '2', value: ' DevOps' },
        { key: '3', value: ' SecOps' },
        { key: '4', value: ' CI/CD' },
        { key: '5', value: ' Mobile React' },
        { key: '6', value: ' Android' },
        { key: '7', value: ' iOS' },
    ]

    buttonEdit = () => {
        getIdUser();
    }

    buttonSaved = () => {

        // if (!userName) {
        //     alert('Por favor, preencha o nome');
        //     return;
        // }
        // if (!userEmail) {
        //     alert('Por favor, preencha o e-mail');
        //     return;
        // }
        // if (!userPassword) {
        //     alert('Por favor, preencha a senha');
        //     return;
        // }
        // if (!userAge) {
        //     alert('Por favor, preencha a idade');
        //     return;
        // }
        // if (selected.length == 0) {
        //     alert('Por favor, selecione pelo menos um interesse');
        //     return;
        // }
        // setErrortext('');
        // if (!userName) {
        //     alert('Por favor, preencha o nome');
        //     return;
        // }
        // if (!userEmail) {
        //     alert('Por favor, preencha o e-mail');
        //     return;
        // }
        // if (!userPassword) {
        //     alert('Por favor, preencha a senha');
        //     return;
        // }
        // if (!userAge) {
        //     alert('Por favor, preencha a idade');
        //     return;
        // }
        // if (selected.length == 0) {
        //     alert('Por favor, selecione pelo menos um interesse');
        //     return;
        // }
        // setErrortext('');
        // alert('Cadastro realizado com sucesso');
        // //postSaved();
        // //postInrerestSaved();
        // navigation.navigate("Login")
    }

    const getIdUser = async () => {
        const response = await fetch('http://localhost:3000/users', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });

        await response.json().then((data) => {
            data.map((user) => {
                if (user.email) {
                    setIdUser(user.id);
                    setUserName(user.name);
                    setUserinterests(user.interests);
                    setUserAge(user.age);
                    setUserEmail(user.email);
                    setUserPassword(user.password);
                    return;
                }
            });
        });
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
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    marginTop: 10,
                    justifyContent: 'center',
                    alignContent: 'center',
                }}>
                <View>
                    <Text style={styles.Text}>
                        Informações do usuário
                    </Text>
                </View>
                <View style={styles.SectionStyle}>
                    <Text style={styles.TextInput}>
                        Usuário: {userName}
                    </Text>
                </View>
                <View style={styles.SectionStyle}>
                    <Text style={styles.TextInput}>
                        E-mail: {userEmail}
                    </Text>
                </View>
                <View style={styles.SectionStyle}>
                    <Text style={styles.TextInput}>
                        Idade: {userAge}
                    </Text>
                </View>
                <View>
                    <Text style={styles.Text}>
                        Edição de Interesses
                    </Text>
                </View>
                <View style={styles.SectionStyle}>
                    <Text style={styles.TextInput}>
                        Interesses: {userIinterests}
                    </Text>
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
                        onPress={buttonEdit}>
                        <Text style={styles.buttonTextStyle}>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.5}
                        onPress={buttonSaved}>
                        <Text style={styles.buttonTextStyle}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    Text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        alignContent: 'center',
        top: 10,
    },
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

export default ProfilePage;