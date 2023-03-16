import React from "react";
import { allPostsQuery } from "../../graphql_queries/allposts";
import PostList from "../atoms/PostList";
import useMultiEndPoint from "../../hooks/useMultiEndPoint";
import { useMainContext } from "../../MainApp";
import { ServiceType } from "../../constants";

const Pokemon = () => {
  const { loading, error, data } = useMultiEndPoint(
    useMainContext,
    allPostsQuery,
    ServiceType.POKEMON
  );

  return (
    <>
      <h3>Pokemon</h3>
      <PostList loading={loading} error={error} data={data} />
    </>
  );
};

export default Pokemon;
