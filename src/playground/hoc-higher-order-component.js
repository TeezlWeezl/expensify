import React from "react";
import ReactDOM from 'react-dom/client'

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
)

// WithAdminWarning
const withAdminWarninig = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share.</p>}
      <WrappedComponent {...props} />
    </div>
  )
}

// RequireAuthentication
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    props.isAuthenticated ?
      <WrappedComponent {...props}/>
      :
      <p>Please login to view the content</p>
  )
}

const AdminInfo = requireAuthentication(Info)


const rootElement = document.getElementById('app-root')
const reactRoot = ReactDOM.createRoot(rootElement)
reactRoot.render(<AdminInfo isAuthenticated={true} isAdmin={true} info='There are the details' />)