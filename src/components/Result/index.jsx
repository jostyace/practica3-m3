import { ResetButton } from "../Button"
import { TipAmount, TotalAmount } from "../Values"
import './Result.css'

export const Result = () => {
  return (
    <div className="result-wrapper">
      <div className="result-txt">
        <div className="text-amount">
          <div>
            <h2>Tip Amount</h2>
            <p>/ person</p>
          </div>
          <h3>$
          <TipAmount tipAmount="0"/>
          </h3>
        </div>
        <div className="total-amount">
          <div>
            <h2>Total</h2>
            <p>/ person</p>
          </div>
          <h3>$
          <TotalAmount
          totalAmount="0"/>
          </h3>
        </div>
      </div>
      <ResetButton/>
    </div>
  )
}
