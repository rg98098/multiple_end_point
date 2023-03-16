import React from "react";
import { useQuery } from "graphql-hooks";
import PostList from "../atoms/PostList";
import { allPostsQuery } from "../../graphql_queries/allposts";

export default function Posts() {
  const { loading, data, error } = useQuery(allPostsQuery);

  return (
    <>
      <h3>Posts</h3>
      <PostList loading={loading} error={error} data={data} />
    </>
  );
}
