import * as React from "react";
import { useState, useMemo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getRequest } from "../api/axiosMethod";

const useProductListing = () => {
  const {
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    promise,
    refetch,
    data,
    ...result
  } = useInfiniteQuery({
    queryKey: ["Products"],
    queryFn: async ({ pageParam }) => {
      const resp = await getRequest("products", {
        offset: pageParam,
        limit: 10,
      });

      return resp.data.map((item) => item);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      console.log(
        "getNextPageParam****",
        allPages,
        lastPageParam,
        allPageParams,
      );
      if (lastPage.source !== "api" || lastPage.products.length < 10) {
        return undefined;
      }

      return allPages.reduce((total, page) => total + page.products.length, 0);
    },
    getPreviousPageParam: (
      firstPage,
      allPages,
      firstPageParam,
      allPageParams,
    ) => {
      return 2;
    },
  });
  const products = useMemo(
    () => (data?.pages ? data.pages.flatMap((page) => page) : []),
    [data?.pages],
  );
  return { response: products, fetchNextPage, refetch };
};

export default useProductListing;
