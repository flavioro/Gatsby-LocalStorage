import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useScoreDispatch } from "../context/score-context"

const SecondPage = () => {
  const dispatch = useScoreDispatch()
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <button onClick={() => dispatch({ type: "increment" })}>
        + 1
      </button>
      <button onClick={() => dispatch({ type: "increment", points: 2 })}>
        + 2
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>RESET</button>
      <p>Score: {dispatch.score}</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage