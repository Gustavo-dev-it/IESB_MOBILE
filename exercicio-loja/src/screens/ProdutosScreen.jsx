import axios from "axios";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Card, Text, ActivityIndicator, MD2Colors } from "react-native-paper";

export default function ProdutoScreen({ route }) {
  const idProduto = route.params;
  const [produto, setProduto] = useState(null);


  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${idProduto}`)
      .then((res) => setProduto(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!produto) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator
          animating={true}
          color={MD2Colors.red800}
          size={50}
        />
        <Text>Carregando produto</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Card>
        <Card.Title title={produto.title} subtitle={`$${produto.price}`} />
        <Card.Cover source={{ uri: produto.thumbnail }} />
        <Card.Content>
          <Text variant="titleLarge">Descrição:</Text>
          <Text>{produto.description}</Text>
          <Text> </Text>
          <Text>Marca: {produto.brand}</Text>
          <Text>Categoria: {produto.category}</Text>
          <Text>Estoque: {produto.stock}</Text>
          <Text>Avaliação: {produto.rating}</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  loading: {
    flex: 1,
    
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
});
