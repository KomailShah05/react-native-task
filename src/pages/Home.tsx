import * as React from "react";
import { FlatList } from "react-native";
import { fakeData } from "../fakeData";
import ProductItem from "../components/ProductItem";

const Home = () => {
  return (
    <FlatList
      data={fakeData}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <ProductItem item={item} />}
    />
  );
};

export default Home;
