import { Pressable, Text, StyleSheet } from "react-native";

type BotaoProps = {
    titulo: string;
    onPress: () => void;
};

export function Botao({ titulo, onPress }: BotaoProps) {
    return (
        <Pressable 
            onPress={onPress}
            style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
            ]}
        >
            <Text>{titulo}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 12,
        backgroundColor: '#B8A4D8',
        borderRadius: 5,
        margin: 30,
    },
    buttonPressed: {
        opacity: 0.6,
    }
})