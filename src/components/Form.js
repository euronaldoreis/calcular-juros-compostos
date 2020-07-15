import React from 'react';

export default function Form({ data, onChangeData }) {
  const { initalValue, monthlyPeriod, monthlyInterest } = data;

  const handleChangeInitialValue = (event) => {
    onChangeData(+event.target.value, null, null);
  };
  const handleChangeMonthlyInterest = (event) => {
    onChangeData(null, +event.target.value, null);
  };
  const handleChangeMonthlyPeriod = (event) => {
    onChangeData(null, null, +event.target.value);
  };
  return (
    <div className="center row">
      <div className="col input-field s12 m6 l4">
        <input
          id="inputInitialValue"
          type="number"
          value={initalValue}
          min="100"
          step="100"
          onChange={handleChangeInitialValue}
        />
        <label htmlFor="inputInitialValue" className="active">
          Montante inicial:
        </label>
      </div>

      <div className="col input-field s12 m6 l4">
        <input
          id="inputMonthlyInterest"
          type="number"
          value={monthlyInterest}
          min="-12"
          max="12"
          step="0.1"
          onChange={handleChangeMonthlyInterest}
        />
        <label htmlFor="inputMonthlyInterest" className="active">
          Taxa de juros mensal:
        </label>
      </div>

      <div className="col input-field s12 m6 l4">
        <input
          id="inputMonthlyPeriod"
          type="number"
          value={monthlyPeriod}
          min="1"
          max="36"
          step="1"
          onChange={handleChangeMonthlyPeriod}
        />
        <label htmlFor="inputMonthlyPeriod" className="active">
          Quantidade de períodos:
        </label>
      </div>
    </div>
  );
}
