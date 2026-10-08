import { View, Text } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Botao } from "@/components/Botao";

export default function Detalhes() {
    const { titulo, genero, ano } = useLocalSearchParams();
    const router = useRouter();

    return (
        <View>
            <Text>{titulo}</Text>
            <Text>{genero}</Text>
            <Text>{ano}</Text>

            <Botao
                titulo="Voltar ao catálogo"
                onPress={() => router.back()}
            />
        </View>
    );
}