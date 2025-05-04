import React, { useState, useEffect, useRef } from 'react';
import TimerInput from './components/TimerInput';
import TimerDisplay from './components/TimerDisplay';
import TaskLog from './components/TaskLog';

import './App.css'

function App() {
  const [taskName, setTaskName] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [log, setLog] = useState([]);
  const intervalRef = useRef(null);


  return (
    <div className='app'>
      <h1>Keep Track of Your Tasks!</h1>
      <TimerInput
      taskName={taskName}
      setTaskName={setTaskName}
      isRunning={isRunning}
      startTimer={startTimer}
      stopTimer={stopTimer}
      />
    </div>
  )
}

export default App
