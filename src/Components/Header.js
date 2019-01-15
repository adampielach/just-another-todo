import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    const headerStyle = {
        backgroundColor: '#222',
        color: 'white',
        textAlign: 'center',
        padding: '15px',
        textTransform: 'uppercase'
    }
    const linkStyle = {
      color: "#fff",
      textDecoration: 'none'
    }
  return (
    <div>
      <header style={headerStyle}>
        <h1>Todo app</h1>
        <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
      </header>
    </div>
  )
}
