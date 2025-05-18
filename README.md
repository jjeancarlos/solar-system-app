Aqui está a versão atualizada do README com as imagens em tamanho reduzido:

```markdown
# Solar System & Digital Odometer App

Um aplicativo React Native com Expo que apresenta:
- Uma animação do sistema solar com Terra e Lua orbitando
- Um odômetro digital no estilo "hacker"
- Botões neon com efeitos especiais
- Navegação entre telas

## Pré-requisitos

- Node.js (v16 ou superior)
- Expo CLI instalado globalmente (`npm install -g expo-cli`)
- Dispositivo móvel com o app Expo Go ou emulador configurado

## Instalação

1. Criar um novo app:

```shell
npx create-expo-app -t expo-template-blank-typescript SolarSystemApp
cd SolarSystemApp
```

2. Instalar as dependências:

```shell
npm install @react-navigation/native @react-navigation/native-stack react-native-reanimated react-native-gesture-handler
npx expo install react-native-screens react-native-safe-area-context
```

## Executando o App

```shell
npx expo start
```

Escaneie o QR code com o app Expo Go ou execute em um emulador.

## Estrutura do Projeto

```
SolarSystemApp/
├── components/
│   └── NeonButton.tsx
├── screens/
│   ├── HomeScreen.tsx
│   └── SecondScreen.tsx
├── App.tsx
└── package.json
```

## Funcionalidades Principais

### Tela do Sistema Solar
- Animação realista da Terra orbitando o Sol
- Lua orbitando a Terra em velocidade diferente
- Botão neon para navegação

<img src="https://github.com/user-attachments/assets/12b34eb5-6bd2-4d10-a153-0afbe5e56466" width="300" alt="Sistema Solar">

### Tela do Odômetro Digital
- Contador de 5 dígitos no estilo terminal hacker
- Animação suave entre números
- Efeitos visuais neon

<img src="https://github.com/user-attachments/assets/2821d50c-3278-4218-a821-e94e846cbe26" width="300" alt="Odômetro Digital">

### Componente NeonButton
- Efeito de pulsação contínua
- Animação de ripple ao toque
- Brilho neon e sombras
- Altamente reutilizável

## Personalização

Para alterar as cores do tema neon, modifique estas cores nos estilos:

```typescript
const neonColors = {
  primary: '#0aff9d',
  shadow: 'rgba(10, 255, 157, 0.7)',
  ripple: 'rgba(0, 255, 157, 0.5)',
  text: '#ffffff'
};
```

## Licença

MIT License

## Créditos

Desenvolvido por *Jean Carlos* usando React Native e Expo
