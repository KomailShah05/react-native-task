import * as React from "react";
import { View, Text, Image } from "react-native";

const ProductItem = ({ item }) => {
  return (
    <View style={{ marginTop: 10 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: 10,
        }}
      >
        <Image
          style={{ width: 30, borderRadius: 16, height: 30 }}
          source={{ uri: item.category.image }}
        />
        <Text style={{ marginTop: 10 }}>{item.title}</Text>
      </View>
      <Text style={{ marginTop: 10 }}>{item.description}</Text>
    </View>
  );
};

export default ProductItem;
