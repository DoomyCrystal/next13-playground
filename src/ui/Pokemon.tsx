import Link from "next/link"
import { FC } from "react"
import { IPokemon } from "../models/pokemon"

export const Pokemon: FC<IPokemon> = ({ name }) => {
  return (
    <Link href={`/pokemon/${name}`}>
      {name}
    </Link>
  )
}