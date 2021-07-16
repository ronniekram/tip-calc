import React from 'react';

const Form = ({ calculation, setCalculation, calculate }) => {
  let prevSelect = document.querySelector('selected');

  // need debounce
  const handleChange = (e) => {
    setCalculation({
      ...calculation, 
      [e.target.name]: e.target.value
    });
    calculate();
  };

  const handleClick = (e) => {
    if (e.target.type === 'button') {
      if (prevSelect) prevSelect.classList.remove('selected');
      prevSelect = e.target;
      e.target.classList.add('selected');
      handleChange();
    };
    calculate();
  };

  return (
    <article className="calculator">
        <div className="input">
          <label for="total">Bill</label> <br />
          <input type="text" 
            placeholder="0" 
            name="bill"
            value={calculation.bill} 
            onChange={handleChange} 
          />
        </div>

        <div className="tip">
          <label for="tip-amount">Select Tip %</label> <br />
          <div className="btn-grp tip-amount" onClick={handleClick}>
            <button type="button" value=".05" name="percent">5%</button>
            <button type="button" value=".1" name="percent">10%</button>
            <button type="button" value=".15" name="percent">15%</button>
            <button type="button" value=".25" name="percent">25%</button>
            <button type="button" value=".5" name="percent">50%</button>
          </div>

          <input 
            type="text" 
            name="percent" 
            id="custom" 
            placeholder="Custom"
            value={calculation.percent} 
            onChange={handleChange} 
            />

        </div>

        <div className="input">
          <label for="people">Number of People</label> <br />
          <input 
            type="text" 
            placeholder="0" 
            name="people"
            value={calculation.people} 
            onChange={handleChange} 
          />
        </div>
    </article>
  );
};

export default Form;