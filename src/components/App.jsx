import React, { useState } from 'react';
import Statistic from './statistics/statistics';
import FeedbackOptions from './feedbackOptions/feedbackOptions';
import { Section } from './sectionTitle/sectionTitle';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // const incrementOnClickBtn = option => {
  //   switch (option) {
  //     case 'good':
  //       setGood(prevState => prevState + 1);
  //       break;
  //     case 'neutral':
  //       setNeutral(prevState => prevState + 1);
  //       break;
  //     case 'bad':
  //       setBad(prevState => prevState + 1);
  //       break;
  //     default:
  //       break;
  //   }
  // };
  const incrementOnClickBtn = option => {
    const optionHandlers = {
      good: setGood,
      neutral: setNeutral,
      bad: setBad,
    };

    const handler = optionHandlers[option];
    if (handler) {
      handler(prevState => prevState + 1);
    }
  };


  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const rating = (good / countTotalFeedback()) * 100;
    return Math.round(rating) || 0;
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={incrementOnClickBtn}
        />
      </Section>
      <Section title={'Statistic'}>
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
};
