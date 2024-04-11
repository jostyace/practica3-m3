import './Button.css'

export const Button = ({percentage, tip}) => {
  return (
<li id={`percentage-${percentage}`}><button type="button" className={`percentage-button ${tip === percentage && 'active'}`} value={parseInt(percentage)}>{percentage}%</button></li>  )
}

export const ResetButton = ({setTip, setBill, setPeople, setTipAmount, setPeopleAmount, bill}) => {
  function resetAll(){
      setTip(0)
      setBill(0)
      setPeople(1)
      setTipAmount(0)
      setPeopleAmount(0)
  }
  return (
<button onClick={()=>resetAll()} type="button" id="reset-button " className={`reset-button ${bill < 1 && 'inactive'}`}>RESET</button>  )
}

