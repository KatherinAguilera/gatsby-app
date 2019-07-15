import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

export default () => {
  return (
    <>
      <SEO title="Compra Exitosa" />
      <Purchase>
        <h2>Compra Cancelada</h2>
        <p>¡Te esperamos de vuelta!</p>
        <span rol="img" aria-label="emoji">
          ❤️
        </span>
        <Link to="/">
          <Button>Volver al Catálogo</Button>
        </Link>
      </Purchase>
    </>
  )
}