import './Input.css'
import PeopleIcon from '/icon-person.svg'

export const BillInput = () => {
  return (
    <label style={{backgroundImage: `url(${PeopleIcon})`}} htmlFor="input-bill"><input className="input-bill" id="input-bill" type="number" value="0" min="0" /></label>
    )
}

export const CustomInput = () => {
  return (
    <li><input type="number" placeholder="Custom" id="custom-percentage-button" className="percentage-button" /></li>
    )
}

export const PeopleInput = () => {
  return (
    <label htmlFor="input-people"><input id="input-people" className="input-people" type="number" value="1" min="1"/></label>  
    )
}
