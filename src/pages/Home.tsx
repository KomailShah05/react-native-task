import * as React from "react";
import { FlatList } from "react-native";
import ProductItem from "../components/ProductItem";
import useProductListing from "../hooks/useProductListing";

const Home = () => {
  const { response, fetchNextPage, refetch } = useProductListing();

  return (
    <FlatList
      data={response}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <ProductItem item={item} />}
      removeClippedSubviews={true}
      onReachEnd={() => {
        console.log("reached end");
      }}
      refreshingControl={refetch}
      onReachedEndTreshold={0.5}
    />
  );
};

export default Home;
