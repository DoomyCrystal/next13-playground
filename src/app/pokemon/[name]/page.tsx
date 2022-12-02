import Image from "next/image";

async function fetchPokemon(url: string) {
  const resp = await fetch(url)
  return await resp.json()
}

export default async function PokemonPage({ params }: {
  params: { name: string; }
}) {
  const url = `https://pokeapi.co/api/v2/pokemon/${params.name}`
  const pokemon: any = await fetchPokemon(url)
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`  
  return (
    <div>
      <a href="/" style={{ display: 'block', color: 'blue', textDecoration: 'underline' }}>Zurück</a>
      <h1>{pokemon.name}</h1>
      <a href={url} target="_blank" rel="noreferrer" style={{ display: 'block', color: 'blue', textDecoration: 'underline' }}>API-Link</a>
      <Image
        src={imageUrl}
        alt={pokemon.name}
        width={475}
        height={475}
      />
    </div>
  )
}