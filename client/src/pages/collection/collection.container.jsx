import React from "react";
import { useQuery, gql } from "@apollo/client";

import CollectionPage from "./collection.component";
import Spinner from "../../components/spinner/spinner.component";

const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionByTitle($title: String) {
    Collection_collection(where: { title: { _eq: $title } }) {
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

const CollectionPageContainer = ({ match }) => {
  const coll_title = match.params.collectionId;
  const { loading, data } = useQuery(GET_COLLECTION_BY_TITLE, {
    variables: { title: coll_title },
  });

  if (loading) {
    return <Spinner />;
  } else {
    return <CollectionPage collection={data.Collection_collection[0]} />;
  }
};

export default CollectionPageContainer;
