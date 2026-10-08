import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Botao } from "@/components/Botao";

export default function Detalhes() {
    const { titulo, genero, ano } = useLocalSearchParams();
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{titulo}</Text>
            <Text style={styles.info}>{genero}</Text>
            <Text style={styles.info}>{ano}</Text>

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
        marginBottom: 20
    },
    info: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 3
    },
})