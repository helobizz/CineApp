import { View, Text, StyleSheet } from "react-native";
import { Botao } from "@/components/Botao";
import { useRouter } from "expo-router";

export default function Sobre() {
    const router = useRouter();

    return(
        <View style={styles.container}>
            <Text style={styles.title}>CineApp</Text>
            <Text style={styles.info}>Catálogo de filmes</Text>
            <Text style={styles.info}>Versão: 1.0</Text>
            <Text style={styles.info}>Disciplina: PDM</Text>

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
        marginBottom: 20,
    },
    info: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
    }
});