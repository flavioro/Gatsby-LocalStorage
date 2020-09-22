import React from "react"
import { ScoreProvider } from "./src/context/score-context"

export const wrapRootElement = ({ element }) => {
  return <ScoreProvider>{element}</ScoreProvider>
}


// export const wrapRootElement = Provider;