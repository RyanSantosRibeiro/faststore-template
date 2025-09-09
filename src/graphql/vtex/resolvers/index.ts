import getCollectionProductName from "./getCollectionProductName";

const resolvers = {
  Query: { ...getCollectionProductName },
  Mutation: {},
};

export default resolvers;
