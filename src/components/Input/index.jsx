import './Input.css'
import PeopleIcon from '/icon-person.svg'

export const BillInput = ({ bill, setBill }) => {
  return (
    <label style={{ backgroundImage: `url(${PeopleIcon})` }} htmlFor="input-bill"><input onChange={(e) => { setBill(e.target.value) }} className="input-bill" id="input-bill" type="number" value={bill} min="0" /></label>
  )
}

export const CustomInput = ({ tip, setTip }) => {
  return (
    <li><input onChange={(e) => { setTip(e.target.value) }} type="number" placeholder="Custom" id="custom-percentage-button" value={tip} className="percentage-button" /></li>
  )
}

export const PeopleInput = ({ people, setPeople }) => {

  if (parseInt(people) == 0 || !parseInt(people)) {
    return (
      <label htmlFor="input-people" style={{color:'#ff2222'}}><input onChange={(e) => { setPeople(e.target.value) }} id="input-people" className="input-people" type="number" value="" min="1" /> Can't be zero</label>
    )
  } else {
    return (
      <label htmlFor="input-people"><input onChange={(e) => { setPeople(e.target.value) }} id="input-people" className="input-people" type="number" value={people} min="1" /></label>
    )
  }


}
