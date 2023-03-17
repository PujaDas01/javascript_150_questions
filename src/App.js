import React, { useState, useEffect } from 'react';
import './App.css';
import PracticeQuestions from './app/pages/PracticeQuestions';
import { timeFormat } from '../src/app/services/timeService';
import PracticeQuestions2 from './app/pages/PracticeQuestions2';
import PracticeQuestions3 from './app/pages/PracticeQuestions3';
import PracticeQuestions4 from './app/pages/PracticeQuestions4';
import PracticeQuestions5 from './app/pages/PracticeQuestions5';
import Ques46_50 from './app/questions/Ques46_50';
import Ques51_55 from './app/questions/Ques51_55';
import Ques56_60 from './app/questions/Ques56_60';
import Ques61_65 from './app/questions/Ques61_65';

const App = () => {

  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime((state) => timeFormat());
    }, 1000);
    return(() => {
      clearInterval(timeInterval);
    })
  }, [])

  return(
    <div>
      <p>{currentTime}</p>
      <PracticeQuestions />
      <PracticeQuestions2 />
      <PracticeQuestions3 />
      <PracticeQuestions4 />
      <PracticeQuestions5 />
      <Ques46_50 />
      <Ques51_55/>
      <Ques56_60/>
      <Ques61_65/>
    </div>
  )
}

export default App;
