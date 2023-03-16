function Characters({ loading, error, data }) {
  if (loading) return "Loading...";
  if (error) return "There was an error loading the posts :(";
  if (
    !data ||
    !data.characters ||
    !data.characters.results ||
    !data.characters.results.length
  )
    return "No posts";
  return (
    <ul>
      {data.characters.results.map((post) => (
        <li key={post.id}>{post.name}</li>
      ))}
    </ul>
  );
}

export default Characters;
