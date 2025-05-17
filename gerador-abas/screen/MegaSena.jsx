import React, { useState } from "react";
import { View, Text } from "react-native";
import MegaSena from "../components/MegaSenaScreen";

const MegaSenaScreen = () => {
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  return (
    <View style={{ padding: 20 }}>
      <MegaSena jogosMegaSena={jogosMegaSena} setJogosMegaSena={setJogosMegaSena} />
    </View>
  );
};

export default MegaSenaScreen;
