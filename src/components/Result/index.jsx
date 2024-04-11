import { ResetButton } from "../Button"
import { TipAmount, TotalAmount } from "../Values"
import './Result.css'

export const Result = ({tipAmount, peopleAmount, setTip, setBill, setPeople, setTipAmount, setPeopleAmount, setCustomTip, bill, tip}) => {
  return (
    <div className="result-wrapper">
      <div className="result-txt">
        <div className="text-amount">
          <div>
            <h2>Tip Amount</h2>
            <p>/ person</p>
          </div>
          <h3>$
          <TipAmount tipAmount={tipAmount}/>
          </h3>
        </div>
        <div className="total-amount">
          <div>
            <h2>Total</h2>
            <p>/ person</p>
          </div>
          <h3>$
          <TotalAmount
          peopleAmount={peopleAmount}/>
          </h3>
        </div>
      </div>
      <ResetButton setTip={setTip} setBill={setBill} setPeople={setPeople} setTipAmount={setTipAmount} setPeopleAmount={setPeopleAmount} setCustomTip={setCustomTip} bill={bill} tip={tip} />
    </div>
  )
}
