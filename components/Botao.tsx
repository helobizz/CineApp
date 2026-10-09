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
        backgroundColor: '#a4a7d8',
        borderRadius: 5,
        alignItems: 'center',
        margin: 30,
        marginHorizontal: 40
    },
    buttonPressed: {
        opacity: 0.6,
    }
})