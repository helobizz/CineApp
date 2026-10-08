import { ScrollView, View, Text } from "react-native";
import { FilmeCard } from "@/components/FilmeCard";

type Filme = {
    titulo: string;
    imagem: any;
    genero: string;
    ano: number;
    favorito: boolean;
}

const filmes: Filme[] = [
    {
        titulo: 'Meu Vizinho Totoro',
        imagem: require('../assets/images/totoro.webp'),
        genero: 'Fantasia',
        ano: 1988,
        favorito: false,
    },
    {
        titulo: 'O serviço de Entregas da Kiki',
        imagem: require('../assets/images/kiki.jpg'),
        genero: 'Fantasia',
        ano: 1989,
        favorito: false,
    },
    {
        titulo: 'A Viagem de Chihiro',
        imagem: require('../assets/images/chihiro.jpg'),
        genero: 'Fantasia',
        ano: 2001,
        favorito: false,
    },
    {
        titulo: 'O Castelo Animado',
        imagem: require('../assets/images/castelo-animado.webp'),
        genero: 'Fantasia',
        ano: 2004,
        favorito: false,
    },
    {
        titulo: 'Ponyo',
        imagem: require('../assets/images/ponyo.jpg'),
        genero: 'Fantasia',
        ano: 2008,
        favorito: false,
    },
    {
        titulo: 'O Castelo no Céu',
        imagem: require('../assets/images/castelo-ceu.webp'),
        genero: 'Fantasia',
        ano: 1986,
        favorito: false,
    },
];

export default function Catalogo() {
    return (
        <ScrollView>
            <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}
            >
                {filmes.map((filme) => (
                    <FilmeCard 
                        titulo={filme.titulo} 
                        imagem={filme.imagem}
                        genero={filme.genero}
                        ano={filme.ano}
                        favorito={filme.favorito}
                    />
                ))}
            </View>
        </ScrollView>
    );
}