import { useState } from 'react'
import TimeCard from './TimeCard'
import cardCategories from '../data.json'
import '../styles/App.css'
import HeaderCard from './HeaderCard'

function App() {

  const [ timeframe, setTimeframe ] = useState('Daily')

  return (
    
    <div className='time-tracking-dashboard'>
      <HeaderCard setTimeframe={setTimeframe} currentTimeframe={timeframe}></HeaderCard>

      {cardCategories.map(category => {
        return <TimeCard {...category} timeframe={timeframe.toLowerCase()}></TimeCard>
      })}
    </div>
    
  )
}

export default App
