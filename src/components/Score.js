import React from "react"
import { useScore } from "../context/score-context"
// import Spinner from "your/favorite/spinner"

const Score = () => {
  const {state, dispatch} = useScore()
  return (
    <>
      { state.score === "loading" ?
      // <Spinner />
      // :
      <div>{state.score}</div>
      }
    </>
  )
}