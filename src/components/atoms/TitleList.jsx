function TitleList({ loading, error, data }) {
  if (loading) return "Loading...";
  if (error) return "There was an error loading the posts :(";
  if (
    !data ||
    !data.allFilms ||
    !data.allFilms.films ||
    !data.allFilms.films.length
  )
    return "No posts";

  return (
    <ul>
      {data.allFilms.films.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default TitleList;
