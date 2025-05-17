import React, { useState, useMemo, useCallback } from "react";
import { Button, Text, Image, View } from "react-native";
import { Card } from "react-native-paper";

// Dados dos animais do jogo do bicho
const animais = [
  { nome: "Avestruz", imagem: "https://i.pinimg.com/736x/ef/3a/bb/ef3abbbc39b3cacee1ba922f95f1b0cd.jpg" },
  { nome: "Águia", imagem: "https://i.pinimg.com/736x/88/04/3b/88043b814c6d4fef1f4aee14356c00b1.jpg" },
  { nome: "Burro", imagem: "https://i.pinimg.com/736x/bc/f3/ee/bcf3eee6436f220cb4d10962e394c741.jpg" },
  { nome: "Borboleta", imagem: "https://i.pinimg.com/736x/dc/91/91/dc91911cb150d57f2f43da7466d1ab4f.jpg" },
  { nome: "Cachorro", imagem: "https://i.pinimg.com/736x/82/fb/de/82fbde9c403d43ebc83d79414b9239c3.jpg" },
  // Adicione outros animais aqui...
];

const JogoDoBicho = () => {
  const [animalGerado, setAnimalGerado] = useState(null);

  // Memoiza os dados dos animais para evitar recriação em cada renderização
  const animaisMemo = useMemo(() => animais, []);

  // Função otimizada de geração do animal usando useCallback
  const gerarAnimal = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * animaisMemo.length);
    setAnimalGerado(animaisMemo[randomIndex]);
  }, [animaisMemo]);

  return (
    <View style={{ padding: 20 }}>
      <Button title="Gerar Animal" onPress={gerarAnimal} />
      {animalGerado && (
        <Card style={{ marginTop: 20 }}>
          <Card.Content>
            <Card.Title title={animalGerado.nome} />
            <Image source={{ uri: animalGerado.imagem }} style={{ width: 100, height: 100 }} />
            <Text>{animalGerado.nome}</Text>
          </Card.Content>
        </Card>
      )}
    </View>
  );
};

export default JogoDoBicho;
