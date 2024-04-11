import './Button.css'

export const Button = ({percentage}) => {
  return (
<li id={`percentage-${percentage}`}><button type="button" className="percentage-button" value={percentage}>{percentage}%</button></li>  )
}

export const ResetButton = () => {
  return (
<button type="button" id="reset-button" className="reset-button">RESET</button>  )
}

