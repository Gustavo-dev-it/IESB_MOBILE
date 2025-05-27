import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import {
  Avatar,
  Card,
  IconButton,
  Text,
  ActivityIndicator,
  MD2Colors,
} from "react-native-paper";

export default function ListaProdutosScreen({ navigation, route }) {
  const { categoria } = route.params;
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${categoria}`)
      .then((res) => setProdutos(res.data.products))
      .catch((err) => console.log(err));
  }, []);


  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            style={styles.card}
            onPress={() => navigation.navigate("ProdutoScreen", item.id)}
          >
            <Card.Title
              title={item.title}
              subtitle={`Preço: $${item.price}`}
              left={(props) => (
                <Avatar.Image {...props} source={{ uri: item.thumbnail }} />
              )}
              right={() => <IconButton icon="chevron-right" />}
            />
          </Card>

        )}
        ListEmptyComponent={() => (
          <View style={styles.loading}>
            <ActivityIndicator
              animating={true}
              color={MD2Colors.red800}
              size={50}
            />
            
            <Text>Carregando produtos</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  card: { margin: 8 },
  loading: { marginTop: 100, alignItems: "center" },
});
