import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className="bg-red-100 w-full h-screen duration-1000" style={{ backgroundColor: color }}>
      <div className="p-4 rounded-lg shadow-lg flex justify-center align-bottom flex-row gap-4 fixed bottom-0 left-0 right-0 w-screen">
        <button onClick={() => setColor('red')}>
          red</button>
        <button onClick={() => setColor('green')}>green</button>
        <button onClick={() => setColor('blue')}>blue</button>
        <button onClick={() => setColor('orange')}>orange</button>
      </div>
    </div>
  )
}

export default App
