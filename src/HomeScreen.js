import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Image, Text, FlatList, TouchableOpacity, Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import styles from './css/styles';



function HomeScreenList ({navigation}) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('http://servicodados.ibge.gov.br/api/v3/noticias/?qtd=22')
        .then((response) => response.json())
        .then((json) => setData(json.items))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []); 

    return (
        <View style={styles.container}>
        {isLoading ? <ActivityIndicator/> : (
            <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
            <View style={styles.item}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Details', { 
                        titulo: item.titulo, 
                        descricao: item.introducao,
                        link: item.link })
                }}>
                    <Text style={styles.titulo}>{item.titulo}</Text>
                    <Text style={styles.subtitulo}>Data publicação: {item.data_publicacao}</Text>
                  
                </TouchableOpacity>
            </View>
            )}
            />
        )}
      </View>
    );
}

function Details ({route, navigation}) {     
    
    const { titulo, descricao, link } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.tituloDescricao}>{titulo}</Text>
            <Text style={styles.texto}>{descricao}</Text>
        </View>
    );     
}

const HomeStack = createStackNavigator();


export default function HomeScreen(){
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="HomeScreenList" component={HomeScreenList}
            options={{ headerShown: false }}/>
            <HomeStack.Screen name="Details" component={Details}
            options={{ headerShown: false }}/>
        </HomeStack.Navigator>
    );
}

/*const styles = StyleSheet.create({
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
    }
})*/
