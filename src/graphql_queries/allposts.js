export const allPostsQuery = `
  query {
    pokemon_v2_pokemon(limit: 10) {
      id
      name
      pokemon_species_id
    }
  }
`;
