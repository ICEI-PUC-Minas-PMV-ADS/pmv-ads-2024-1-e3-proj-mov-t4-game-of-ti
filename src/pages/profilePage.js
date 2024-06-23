import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

import Container from "../components/container";


const ProfilePage = () => {

    const [user, setUser] = useState({
        id: "88e2",
        name: "Teste",
        email: "teste@teste.com.br",
        password: "12",
        age: "67",
        interests: ["DevOps"]
    });

    const handleChange = (name, value) => {
        setUser(prevState => ({
            ...prevState,
            [name]: name === 'interests' ? [value] : value
        }));
    };

    const saveProfile = () => {
        // Logic to save the profile, e.g., update backend or local storage
        console.log('Profile saved:', user);
    };

    return (
        <View>
            <Text>Edit Profile</Text>
            <TextInput placeholder="Name" value={user.name} onChangeText={(text) => handleChange('name', text)} />
            <TextInput placeholder="Email" value={user.email} onChangeText={(text) => handleChange('email', text)} />
            <TextInput placeholder="Password" value={user.password} onChangeText={(text) => handleChange('password', text)} secureTextEntry />
            <TextInput placeholder="Age" value={user.age} onChangeText={(text) => handleChange('age', text)} />
            <TextInput placeholder="Interests" value={user.interests.join(', ')} onChangeText={(text) => handleChange('interests', text)} />
            <Button title="Save Changes" onPress={saveProfile} />
        </View>
    );
};

export default ProfilePage;