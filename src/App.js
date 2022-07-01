import React from "react"

function App() {
  return (
    <main>
      <h1 className="text">How fast can you type?</h1>
      {/* <h3>High score: 0</h3> */}
      <textarea 
        placeholder="Type here..."
        disabled={false}
      />
      <h3 className="text">Time remaining: 0</h3>
      <button 
        className="text btn"
        disabled={false}
      >START</button>
      <h2 className="text">Word count: 0</h2>
    </main>
  )
}

export default App
