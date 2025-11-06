import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-7xl'>  IP Address Tracker

  Search for any IP address or domain

  IP Address
  Location
  Timezone
    UTC 
  ISP </div>
    </>
  )
}

export default App
