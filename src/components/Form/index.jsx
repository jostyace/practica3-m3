import { Button } from "../Button"
import { BillInput, CustomInput, PeopleInput } from "../Input"
import './Form.css'

export const Form = () => {
  return (
    <div className="data-wrapper">
      <h1>Bill</h1>
      <BillInput/>
      <h2>Select Tip %</h2>
      <ul>
        <Button percentage="5"/>
        <Button percentage="10"/>
        <Button percentage="15"/>
        <Button percentage="25"/>
        <Button percentage="50"/>
        <CustomInput/>
      </ul>
      <h2>Number of People</h2>
        <PeopleInput/>
    </div>  )
}
