import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    day: {
        paddingLeft: 10,
        paddingTop: 10,
        fontSize: 16,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        alignSelf: 'flex-start'
    },
    titulo: {
        fontSize: 18,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        textAlign: 'justify'
    },
    subtitulo: {
        fontSize: 12,
        fontFamily: 'Roboto',
        paddingVertical: 5
    },
    tituloDescricao: {
        padding: 10,
        fontSize: 18,
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    },
    texto: {
        padding: 10,
        fontSize: 16,
        fontFamily: 'Roboto',
        color: 'black',
        textAlign: 'justify',
        marginVertical: 10
    },
    item: {
        padding: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc'
    },
    botao: {
        padding: 10,
        borderRadius: 10
    },
    /*Root Styles*/
    topBar: { 
        backgroundColor: '#694fad' 
    },
    tituloToolbar: {
        fontSize: 18,
        fontFamily: 'Roboto Mono'
    },
    listaItem: {
        fontSize: 20,
        padding: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    icone: {
        marginBottom: 10
    },

    /*Notification*/
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
    tituloNotificacao: {
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
})


export default styles;
