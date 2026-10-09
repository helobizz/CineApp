import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Botao } from "@/components/Botao";

export default function Detalhes() {
    const { titulo, genero, ano } = useLocalSearchParams();
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{titulo}</Text>
            <View style={styles.card}>
                <Text style={styles.info}>{genero}</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.info}>{ano}</Text>
            </View>

            <Botao
                titulo="Voltar ao catálogo"
                onPress={() => router.back()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3e9f6'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30
    },
    info: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 3
    },
    card: {
        backgroundColor: '#cac6f4',
        width: 350,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 10,
        borderLeftColor: '#441fb3',
        borderLeftWidth: 6,
    }
})