import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Card, Text, ActivityIndicator, MD2Colors } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  const [categorias, setCategorias] = useState([]);


  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category-list")
      .then((res) => setCategorias(res.data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <View style={styles.container}>
      <FlatList
        data={categorias}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card
            style={styles.card}
            onPress={() =>
              navigation.navigate("ListaProdutosScreen", { categoria: item })
            }
          >
            <Card.Title title={item} />
          </Card>

        )}
        ListEmptyComponent={() => (
          <View style={styles.loading}>
            <ActivityIndicator
              animating={true}
              color={MD2Colors.red800}
              size={50}
            />
            <Text>Carregando categorias</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#778899" },
  card: { margin: 8 },
  loading: { marginTop: 100, alignItems: "center" },
});
