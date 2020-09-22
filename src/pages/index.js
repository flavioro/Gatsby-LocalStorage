import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { useScoreDispatch, useScoreState } from "../context/score-context"

const IndexPage = () => {
  const dispatch = useScoreDispatch()
  const state = useScoreState()
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <button onClick={() => dispatch({ type: "increment" })}>
        + 1
      </button>
      <button onClick={() => dispatch({ type: "increment", points: 2 })}>
        + 2
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>RESET</button>
      {/* <p>Score: {state}</p> */}
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage 
