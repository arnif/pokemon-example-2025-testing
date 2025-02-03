export async function fetchPokemonById(id: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch pokemon");
  }
  const data = await response.json();
  console.log(data);
  return data;
}
