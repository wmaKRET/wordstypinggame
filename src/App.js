import React, {useState, useEffect} from "react"

function App() {
  const TIMER_VALUE = 10

  const [text, setText] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(TIMER_VALUE)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [isGameOver, setIsGameOver] = useState(false)
  const [howManyWords, setHowManyWords] = useState(0)

  function handleChange(event){
    const {value} = event.target
    setText(value)
  }

  function startGame(){
    setIsGameOver(false)
    setText('')
    setTimeRemaining(TIMER_VALUE)
    setIsTimeRunning(true)
  }

  function endGame(){
    setIsGameOver(true)
    setIsTimeRunning(false)
    setHowManyWords(countHowManyWords(text))
  }

  function countHowManyWords(textArea) {
    const wordsArray = textArea.trim().split(' ')
    return wordsArray.filter(word => word !== '').length
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0){
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    } else if (timeRemaining === 0) endGame()
  }
  ,[timeRemaining, isTimeRunning])

  return (
    <main>
      <h1 className="text">How fast can you type?</h1>
      {/* <h3>High score: 0</h3> */}
      <textarea 
        value={text}
        placeholder="Type here..."
        disabled={!isTimeRunning}
        onChange={handleChange}
      />
      <h3 className="text">Time remaining: {timeRemaining}</h3>
      <button 
        className="text btn"
        disabled={isTimeRunning}
        onClick={startGame}
      >{isGameOver ? "RESTART" : "START"}
      </button>
      {isGameOver && <h2 className="text">Words count: {howManyWords}</h2>}
    </main>
  )
}

export default App
