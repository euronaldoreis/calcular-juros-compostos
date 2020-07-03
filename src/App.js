import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Installments2 from './components/Installments2';

import css from './components/header.module.css';

export default function App() {
  const [initalValue, setInitialValue] = useState(1000);
  const [monthlyInterest, setMonthlyInterest] = useState(1);
  const [monthlyPeriod, setMonthlyPeriod] = useState(1);
  const [Installments, setInstallments] = useState([]);

  useEffect(() => {
    calculateInterest(initalValue, monthlyInterest, monthlyPeriod);
  }, [initalValue, monthlyInterest, monthlyPeriod]);

  const calculateInterest = (initalValue, monthlyInterest, monthlyPeriod) => {
    const newInstallments = [];
    let currentId = 1;
    let currentValue = initalValue;
    let percentage = 0;

    for (let i = 1; i <= monthlyPeriod; i++) {
      const percentValue = (currentValue * Math.abs(monthlyInterest)) / 100;

      currentValue =
        monthlyInterest >= 0
          ? currentValue + percentValue
          : currentValue - percentValue;

      percentage = (currentValue / initalValue - 1) * 100;

      newInstallments.push({
        id: currentId++,
        value: currentValue,
        difference: currentValue - initalValue,
        percentage,
        profit: monthlyInterest > 0,
      });
    }

    setInstallments(newInstallments);
  };

  const handleChangeData = (newValue, newInterest, newPeriod) => {
    if (newValue !== null) {
      setInitialValue(newValue);
      return;
    }
    if (newInterest !== null) {
      setMonthlyInterest(newInterest);
      return;
    }

    setMonthlyPeriod(newPeriod);
  };

  return (
    <>
      <div className={css.sidebar}>
        <h3>Calcular Juros Compostos</h3>
      </div>
      <div className="container">
        <Form
          data={{ initalValue, monthlyInterest, monthlyPeriod }}
          onChangeData={handleChangeData}
        />
        <Installments2 data={Installments} />
      </div>
      <div className={css.footer}>
        Criado por{' '}
        <a href="https://github.com/euronaldoreis" target="_blank">
          Ronaldo Reis
        </a>
      </div>
    </>
  );
}
