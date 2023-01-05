import React from "react"
import { Link } from "react-router-dom"

const ErrorPage = () => (
  <div>
    404 Page not found. <Link to='/'>Go back to Dashboard.</Link>
  </div>
)

export default ErrorPage