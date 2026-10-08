import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
      <Stack>
        <Stack.Screen 
          name="index" 
          options={{ title: "CineApp"}}
        />
        <Stack.Screen 
          name="catalogo" 
          options={{ title: "Catálogo"}}
        />
        <Stack.Screen 
          name="detalhes" 
          options={{ title: "Detalhes do Filme"}}
        />
        <Stack.Screen 
          name="sobre" 
          options={{title: "Sobre o app"}}
        />
      </Stack>
  );
}
