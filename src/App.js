import React, {useState, useEffect} from "react"

function App() {
  const TIMER_VALUE = 10

  const [text, setText] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(TIMER_VALUE)
  const [isTimeRunning, setIsTimeRunning] = useState(false)

  function handleChange(event){
    const {value} = event.target
    setText(value)
  }

  function startGame(){
    setIsTimeRunning(true)
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0){
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    }
  }
  ,[timeRemaining, isTimeRunning])

  return (
    <main>
      <h1 className="text">How fast can you type?</h1>
      {/* <h3>High score: 0</h3> */}
      <textarea 
        name={text}
        placeholder="Type here..."
        //disabled={!isTimeRunning}
        onChange={handleChange}
      />
      <h3 className="text">Time remaining: {timeRemaining}</h3>
      <button 
        className="text btn"
        //disabled={isTimeRunning}
        onClick={startGame}
      >START
      </button>
      <h2 className="text">Word count: 0</h2>
    </main>
  )
}

export default App
