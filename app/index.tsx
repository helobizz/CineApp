import { View, Text, Image, StyleSheet } from "react-native";
import { Botao } from "../components/Botao";
import { useRouter } from "expo-router";

export default function Inicio() {
    const router = useRouter();
    
    return (
        <View style={styles.container}>
            <Image 
                source={require('../assets/images/cineapp-logo.png')}
                style={styles.logo} 
            />

            <Text style={styles.description}>
                Explore filmes e descubra sua próxima história favorita.
            </Text>

            <Botao 
                titulo="Ver catálogo"
                onPress={() => router.push('/catalogo')}
            /> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f3e9f6"
    },
    logo: {
        width: 200,
        height: 200,
    },
    description: {
        fontSize: 18,
        textAlign: 'center',
    }
});