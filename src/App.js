import React, {useState} from "react"

function App() {
  const [text, setText] = useState('')

  function handleChange(event){
    const {value} = event.target
    setText(value)
  }

  return (
    <main>
      <h1 className="text">How fast can you type?</h1>
      {/* <h3>High score: 0</h3> */}
      <textarea 
        name={text}
        placeholder="Type here..."
        disabled={false}
        onChange={handleChange}
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
