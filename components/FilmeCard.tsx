import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { usePathname, useRouter } from "expo-router";

type FilmeCardProps = {
  titulo: string;
  imagem: any;
  genero: string;
  ano: number;
  favorito: boolean;
};

export function FilmeCard({
  titulo,
  imagem,
  genero,
  ano,
  favorito,
}: FilmeCardProps) {
  const [favoritoAtual, setFavoritoAtual] = useState(favorito);
  const router = useRouter();

  return (
      <View style={styles.card}>
        <Image source={imagem} style={styles.image} />

        <View style={styles.content}>
            <View>
              <Text style={styles.title}>{titulo}</Text>
              <Text style={styles.info}>{genero}</Text>
              <Text style={styles.info}>{ano}</Text>
            </View>

          <Pressable 
            onPress={() => setFavoritoAtual(!favoritoAtual)}
            style={({ pressed }) => [
              styles.favoriteButton,
              pressed && styles.favoriteButtonPressed,
            ]}
          >
            <Text style={styles.info}>
              {favoritoAtual ? "★ Favorito" : "☆ Favoritar"}
            </Text>
          </Pressable>

          <Pressable
            onPress={() => 
              router.push({
              pathname: "/detalhes",
              params: { 
                titulo,
                genero,
                ano: ano.toString(),
              }
            })
          }
          style={({ pressed }) => [
            styles.detailsButton,
            pressed && styles.detailsButtonPressed,
          ]}
          >
            <Text style={styles.info}>Ver detalhes</Text>
          </Pressable>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 170,
    height: 280,
    padding: 9,
    borderRadius: 10,
    backgroundColor: "#d6ccf4",
    margin: 10,
  },
  image: {
    width: '100%',
    height: 90,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 2,
    alignSelf: "center",
  },
  content: {
    marginTop: 4,
    flex: 1,
    justifyContent: 'space-between'
  },
  title: {
    width: "100%",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
  },
  info: {
    width: "100%",
    fontSize: 16,
    textAlign: "left",
    fontWeight: '600',
    marginBottom: 4,
  },
  favoriteButton: {
    marginTop: 8,
    marginBottom: 0
  },
  favoriteButtonPressed: {
    opacity: 0.5,
  },
  detailsButton: {
    marginTop: 8,
  },
  detailsButtonPressed: {
    opacity: 0.5,
  }
});
