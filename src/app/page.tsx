import { IPokemon } from "../models/pokemon"
import { Pokemon } from "../ui/Pokemon"

async function fetchPokemons() {
  const resp = await fetch('https://pokeapi.co/api/v2/pokemon/')
  const data = await resp.json()
  return data.results
}

export default async function HomePage() {
  const pokemons:IPokemon[] = await fetchPokemons()    
  return (
    <ul>
      {pokemons.map(item => (
        <li key={item.name}>
          <Pokemon name={item.name} />
        </li>
      ))}      
    </ul>
  )
}