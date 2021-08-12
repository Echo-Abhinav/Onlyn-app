import React from "react";
import { useQuery, gql } from "@apollo/client";

import CollectionsOverview from "./collections-overview.component";
import Spinner from "../spinner/spinner.component";

const GET_COLLECTIONS = gql`
  query {
    Collection_collection {
      id
      title
      collectionItems {
        id
        imageUrl
        name
        price
      }
    }
  }
`;

const CollectionsOverviewContainer = () => {
  const { loading, data } = useQuery(GET_COLLECTIONS);

  if (loading) {
    return <Spinner />;
  } else {
    return <CollectionsOverview collections={data.Collection_collection} />;
  }
};

export default CollectionsOverviewContainer;
