import * as React from "react";
import { View, Text, Image } from "react-native";

const DEFAULT_IMAGE_URL = "https://placehold.co/600x400?text=Product";

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
          source={{ uri: DEFAULT_IMAGE_URL }}
        />
        <Text style={{ marginTop: 10 }}>{item.title}</Text>
      </View>
      <Text style={{ marginTop: 10 }}>{item.description}</Text>
    </View>
  );
};

export default ProductItem;
