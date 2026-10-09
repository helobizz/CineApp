import { View, Text, StyleSheet } from "react-native";
import { Botao } from "@/components/Botao";
import { useRouter } from "expo-router";

export default function Sobre() {
    const router = useRouter();

    return(
        <View style={styles.container}>
                <Text style={styles.title}>CineApp</Text>
            <View style={styles.card}>
                <Text style={styles.info}>Catálogo de filmes</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.info}>Versão: 1.0</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.info}>Disciplina: PDM</Text>
            </View>

            <Botao
                titulo="Voltar"
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
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 30
    },
    info: {
        fontSize: 18,
        fontWeight: '600',
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
});