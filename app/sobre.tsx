import { View, Text } from "react-native";
import { Botao } from "@/components/Botao";
import { useRouter } from "expo-router";

export default function Sobre() {
    const router = useRouter();

    return(
        <View>
            <Text>CineApp</Text>
            <Text>Catálogo de filmes</Text>
            <Text>Versão: 1.0</Text>
            <Text>Disciplina: PDM</Text>

            <Botao
                titulo="Voltar"
                onPress={() => router.back()}
            />
        </View>
    );
}