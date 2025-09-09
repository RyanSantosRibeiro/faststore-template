import { vtexApiRequest } from "../../utils/vtexApiRequest";

export async function getCollectionById(
  collectionId: number
): Promise<SearchProduct> {
  //From https://developers.vtex.com/docs/api-reference/search-api#get-/api/catalog_system/pub/products/search
  return vtexApiRequest<SearchProduct>(
    `/api/catalog_system/pub/products/search?fq=productClusterIds%3A${collectionId}`,
    true
  );
}

type SearchProduct = {
  productName: string;
}[];
