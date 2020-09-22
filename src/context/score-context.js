import React from "react"

const ScoreStateContext = React.createContext()
const ScoreDispatchContext = React.createContext()

function writeToLocal(score) {
  typeof window !== `undefined` && window.localStorage.setItem("score", score)
}
function scoreReducer(state, action) {
  switch (action.type) {
    case "increment": {
      const points = action.points ? action.points : 1
      const newScore = state.score + points
      writeToLocal(newScore)
      return { score: newScore }
    }
    case "reset": {
      return { score: 0 }
    }
    default: {
      throw new Error(`Unhandled action type ${action.type}`)
    }
  }
}
function ScoreProvider({ children }) {
  // We set an initial score to get the score on refresh or to avoid null
  // And we make it a function so it's only called the first time when the component mount
  // Number() to transfom string -> int
  // Window is not defined during build
  let localScore = () => {
    if (typeof window !== `undefined`) {
      const score = Number(window.localStorage.getItem("score") || 0)
      return { score }
    }
    // if window is undefined (on build and refresh)
    else {
      return { score: "loading" }
    }
  }

  const [state, dispatch] = React.useReducer(scoreReducer, {score:0}, localScore)
  console.log("Score", state.score)
  return (
    <ScoreStateContext.Provider value={state}>
      <ScoreDispatchContext.Provider value={dispatch}>
        {children}
      </ScoreDispatchContext.Provider>
    </ScoreStateContext.Provider>
  )
}

function useScoreState() {
  const context = React.useContext(ScoreStateContext)
  if (context === undefined) {
    throw new Error("useScoreState must be withina ScoreProvider")
  }
  return context
}

function useScoreDispatch() {
  const context = React.useContext(ScoreDispatchContext)
  if (context === undefined) {
    throw new Error("useScoreDispatch must be within a ScoreProvider")
  }
  return context
}

export { ScoreProvider, useScoreState, useScoreDispatch }
