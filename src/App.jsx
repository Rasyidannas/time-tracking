import { useState } from 'react'
import './App.css';
import Container from './components/UI/Container';
import TimeTracking from './components/TimeTracking/TimeTracking';
import Profile from './components/Profile/Profile';

function App() {
  const id = Math.random()
  const timeTrackingData = [
    {
      id: 1,
      title: "Work",
      daily:['5hrs', '7hrs'],
      weekly:['32hrs', '36hrs'],
      monthly:['103hrs', '128hrs']
    },
    {
      id: 2,
      title: "Play",
      daily:['1hr', '2hrs'],
      weekly:['10hrs', '8hrs'],
      monthly:['23hrs', '29hrs']
    },
    {
      id: 3,
      title: "Study",
      daily:['0hrs', '1hr'],
      weekly:['4hrs', '7hrs'],
      monthly:['13hrs', '19hrs']
    },
    {
      id: 4,
      title: "Exercise",
      daily:['1hr', '1hr'],
      weekly:['4hrs', '5hrs'],
      monthly:['11hrs', '18hrs']
    },
    {
      id: 5,
      title: "Social",
      daily:['1hr', '3hrs'],
      weekly:['5hrs', '10hrs'],
      monthly:['21hrs', '23hrs']
    },
    {
      id: 6,
      title: "Self Care",
      daily:['0hrs', '1hr'],
      weekly:['2hrs', '2hrs'],
      monthly:['7hrs', '11hrs']
    },
  ]

  const [isTime, isSetTime] = useState('Daily')

  const keyDataHandler = (key) => {
    isSetTime(key);
  }
  

  return (
    <Container className="dashboard">
      <Profile className="profile" onKeyData = {keyDataHandler}/>
      <div className="time-tracking__box">
        <TimeTracking items={timeTrackingData} onTimeData={isTime} />
      </div>
    </Container>
  )
}

export default App
