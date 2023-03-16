function PostList({ loading, error, data }) {
  if (loading) return "Loading...";
  if (error) return "There was an error loading the posts :(";
  if (!data || !data.pokemon_v2_pokemon || !data.pokemon_v2_pokemon.length)
    return "No posts";

  return (
    <ul>
      {data.pokemon_v2_pokemon.map((post) => (
        <li key={post.id}>{post.name}</li>
      ))}
    </ul>
  );
}

export default PostList;
