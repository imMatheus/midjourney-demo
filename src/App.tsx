import { useState } from 'react'
import { Grid } from './components/Grid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <Grid />
      </div>
    </>
  )
}

export default App
