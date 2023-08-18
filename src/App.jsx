import { useState } from 'react'
import WeatherApp from './components/WeatherApp/WeatherApp'



function App() {
  const [count, setCount] = useState(0)

  return (
    <WeatherApp/>
  )
}

export default App
