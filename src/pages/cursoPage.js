import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const CoursePage = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Princípios do 12 Factor App</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Descrição</Text>
                <Text style={styles.text}>{`Usam formatos declarativos para automatizar a configuração inicial, minimizar tempo e custo para novos desenvolvedores participarem do projeto;
                \nTem um contrato claro com o sistema operacional que o suporta, oferecendo portabilidade máxima entre ambientes que o executem;
                \nSão adequados para implantação em modernas plataformas em nuvem, evitando a necessidade por servidores e administração do sistema;
                \nMinimizam a divergência entre desenvolvimento e produção, permitindo a implantação contínua para máxima agilidade;
                \nE podem escalar sem significativas mudanças em ferramentas, arquiteturas, ou práticas de desenvolvimento.`}
                </Text>
                <Text style={styles.title}>Instrutor</Text>
                <Text style={styles.text}>Jane Doe</Text>
                <Text style={styles.title}>Duração</Text>
                <Text style={styles.text}>4 hours</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        padding: 20,
        backgroundColor: '#0056b3',
        alignItems: 'center',
    },
    headerTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 20,
        color: '#0056b3',
        marginTop: 20,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 16,
        color: '#333',
    },
});

export default CoursePage;