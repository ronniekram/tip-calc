import React, { useState } from 'react';
import Form from './Form';
import Results from './Results';

const Calc = () => {
  const [calculation, setCalculation] = useState({
    bill: 0,
    people: 0,
    percent: 0,
  });

  const [totalsPer, setTotalsPer] = useState({
    tip: 0,
    total: 0
  })

  const { bill, people, percent } = calculation;
  const { tip, total } = totalsPer;

  const calculate = () => {
    const values = Object.values(calculation); 
    if (values.every(value => value !== 0)) {
      const fullTip = parseFloat(bill) * parseFloat(percent);
      const totalPer = parseFloat(bill) / parseInt(people);
      const tipPer = fullTip / parseInt(people);

      setTotalsPer({
        ...totalsPer,
        tip: tipPer, 
        total: totalPer
      });
    };
  };

  return (
    <article>
      <section>
        <Form 
          calculation={calculation} 
          setCalculation={setCalculation} 
          calculate={calculate} 
        />
      </section>

      <section>
        <Results 
          tip={tip} 
          total={total} 
        />
      </section>
    </article>
  );
};

export default Calc;