import { getCollectionById } from "../clients/collections";

const getCollectionProductName = {
  getCollectionProductName: async (
    _: unknown,
    { collectionId }: { collectionId: string }
  ): Promise<any> => {
    const collectionIdNumber = Number(collectionId);

    const collection = await getCollectionById(collectionIdNumber);

    return collection[0];
  },
};

export default getCollectionProductName;
