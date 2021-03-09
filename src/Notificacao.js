import React from 'react';
import { View, Text, SafeAreaView} from 'react-native';
import { Switch } from 'react-native-paper';

import styles from './css/styles';

const Notificacao = () => {

    const [isSwitchOn1, setIsSwitchOn1] = React.useState(true);
    const onToggleSwitch1 = () => setIsSwitchOn1(!isSwitchOn1);

    const [isSwitchOn2, setIsSwitchOn2] = React.useState(false);
    const onToggleSwitch2 = () => setIsSwitchOn2(!isSwitchOn2);

    if (isSwitchOn1 == true) {
        if (isSwitchOn2 == true){
        setIsSwitchOn2(!isSwitchOn2);
        }
    }
    else if (isSwitchOn2 == true){
        if (isSwitchOn1 == true){
            setIsSwitchOn1(!isSwitchOn1);
        }
    }

    const dados = [
        {key: 'Notificação Padrão'},
        {key: 'Notificação Personalizada'}
    ]

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.notificacao}> 
                <View style={styles.notificacaoConteudo}>
                    <Text style={styles.tituloNotificacao}>Notificação Padrão</Text>
                    <Switch style={styles.chave1}
                    value={isSwitchOn1} onValueChange={onToggleSwitch1}/>
                </View>
                <Text style={styles.notificacaoTextoDescricao}>Notificações simples</Text>
            </View>
            <View style={styles.notificacao}>
                <View style={styles.notificacaoConteudo}>
                    <Text style={styles.tituloNotificacao}>Notificação Personalizada</Text>
                    <Switch style={styles.chave2}
                    value={isSwitchOn2} onValueChange={onToggleSwitch2}/>
                </View>
                <Text style={styles.notificacaoTextoDescricao}>Notificações Customizadas</Text>
            </View>
        </SafeAreaView>
    );
}

/*const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        alignContent: 'center',
        paddingTop: 30
    },
    notificacao: {
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 10,
        paddingVertical: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc'
    },
    notificacaoConteudo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    },
    chave1: {
        start: 40
    },
    chave2: {
        start: 20
    },
    notificacaoTextoDescricao: {
        end: 30
    },
    notificacao2: {
        flexDirection: 'column',
        marginTop: 10,
        justifyContent: 'center',
        margin: 20,
        paddingVertical: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc'
    },
    notificacaoTexto2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto: {
        fontSize: 14,
        color: '#000' 
    },
})*/


export default Notificacao;
