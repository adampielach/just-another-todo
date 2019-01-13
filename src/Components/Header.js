import React from 'react'

export default function Header() {
    const headerStyle = {
        backgroundColor: '#222',
        color: 'white',
        textAlign: 'center',
        padding: '15px',
        textTransform: 'uppercase'
    }
  return (
    <div>
      <header style={headerStyle}>
        Todo app
      </header>
    </div>
  )
}
