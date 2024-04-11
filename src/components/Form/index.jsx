import { useEffect, useState } from "react"
import { Button } from "../Button"
import { BillInput, CustomInput, PeopleInput } from "../Input"
import './Form.css'
import { Result } from "../Result"

export const Form = () => {
  const [tip, setTip] = useState()
  const [customTip, setCustomTip] = useState(0)
  const [bill, setBill] = useState(0)
  const [people, setPeople] = useState(1)
  const [tipAmount, setTipAmount] = useState(0)
  const [peopleAmount, setPeopleAmount] = useState(0)


  useEffect(() => {
    calcularTipAmount();
  }, [bill, tip, people]);

  function calcularTipAmount() {
    if (bill && tip && people && parseInt(bill) !== 0 && parseInt(people) !== 0 && parseInt(tip) !== 0) {
      const tipAmountPerPerson = (bill * (tip / 100)) / people;
      const totalAmountPerPerson = (bill / people) + tipAmountPerPerson;
      setPeopleAmount(totalAmountPerPerson.toFixed(2));
      setTipAmount(tipAmountPerPerson.toFixed(2));
    }
  }



  function manejarClick(e) {
    if(e.target.type === 'button'){
    setTip(e.target.value)
    setCustomTip(0)
    }
    else if(e.target.id === 'custom-percentage-button'){
    setCustomTip(e.target.value)
    setTip(e.target.value)
    }
  }
  return (
    <div className="general-wrapper">
      <div className="data-wrapper">
        <h1>Bill</h1>
        <BillInput bill={bill} setBill={setBill}/>
        <h2>Select Tip %</h2>
        <ul onClick={(e)=>manejarClick(e)}>
          <Button percentage="5" tip={tip}/>
          <Button percentage="10" tip={tip}/>
          <Button percentage="15" tip={tip}/>
          <Button percentage="25" tip={tip}/>
          <Button percentage="50" tip={tip}/>
          <CustomInput tip={customTip} setTip={setTip} customTip={customTip} setCustomTip={setCustomTip}/>
        </ul>
        <h2>Number of People</h2>
          <PeopleInput people={people} setPeople={setPeople}/>
      </div>
      <Result tipAmount={tipAmount} peopleAmount={peopleAmount} setTip={setTip} setBill={setBill} setPeople={setPeople} setTipAmount={setTipAmount} setPeopleAmount={setPeopleAmount} setCustomTip={setCustomTip} bill={bill} tip={tip} />
    </div>  )
}
