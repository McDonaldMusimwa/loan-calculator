import React,{useState} from 'react';
import styles from './Form.module.css';
const Form = (props) => {
    const [savings,setSavings] = useState(0);
    const [contribution,setContribution] = useState(0);
    const [expectedreturn,setExpextedReturn] = useState(0);
    const [duration,setDuration] = useState(0);

    const addSavingsHandler=(event)=>{
        setSavings(event.target.value)
       
       
    }
    const addContributionHandler=(event)=>{
        setContribution(event.target.value)
    }

    const addReturnHandler=(event)=>{
        setExpextedReturn(event.target.value)
    }

    const addDurationHandler=(event)=>{
        setDuration(event.target.value)
    }

    const sendData = (event)=>{
        event.preventDefault();
       let  formData={
            savings:savings,
        contribution:contribution,
        expectedreturn:expectedreturn,
        duration:duration
        }
        props.calculate(formData)
     
    }

    const onResetHandler = ()=>{
        setDuration(0)
        setContribution(0)
        setExpextedReturn(0)
        setSavings(0)
    }


  return (
    <div>
      <form className={styles.form} onSubmit={sendData}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" onChange={addSavingsHandler}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" onChange={addContributionHandler} />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" onChange={addReturnHandler}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange={addDurationHandler}/>
          </p>
        </div>
        <p className={styles.actions}>
          <button type="reset" className={styles.buttonAlt} onClick={onResetHandler}>
            Reset
          </button>
          <button type="submit" className={styles.button} onClick={sendData}>
            Calculate
          </button>
        </p>
      </form>

    </div>
  )
}

export default Form