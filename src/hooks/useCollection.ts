import { useQuery } from "src/sdk/graphql/useQuery";
import { gql } from "@generated/gql";
import type { CollectionProductNameResponse } from "@generated/graphql";

const GET_COLLECTION_PRODUCT_NAME = gql(`
    query getCollectionProductName($collectionId: String!){
      getCollectionProductName(collectionId: $collectionId) {
        productName
      }
    }
  `);

export default function useCollection({
  collectionId,
}: {
  collectionId: string;
}) {
  const { data: collectionProductNameData } = useQuery<any>(
    GET_COLLECTION_PRODUCT_NAME,
    {
      collectionId,
    }
  );

  const response: CollectionProductNameResponse =
    collectionProductNameData?.getCollectionProductName;

  return {
    collectionProductName: response?.productName,
  };
}
