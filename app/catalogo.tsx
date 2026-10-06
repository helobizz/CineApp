import { View, Text } from "react-native";

type Filme = {
    titulo: string;
    imagem: any;
    genero: string;
    ano: number;
    favorito: boolean;
}

export default function Catalogo() {
    return (
        <View>
            <Text>Catálogo</Text>
        </View>
}