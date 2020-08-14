import React, { useState, useEffect } from "react"
import { TextField, Paper, Typography } from "@material-ui/core"
import isNumeric from "validator/lib/isNumeric"
import isEmpty from "validator/lib/isEmpty"
import "../styles/calculator.css"

const calculateCTR = (clicks, impressions) => {
  let result = (clicks / impressions) * 100
  result = result.toFixed(2)
  return result
}

const Calculator = () => {
  const [clicks, setClicks] = useState(0)
  const [impressions, setImpressions] = useState(0)
  const [result, setResult] = useState(0)

  // set result on input
  useEffect(() => {
    // only calculate if both inputs are valid
    if (clicks > 0 && impressions > 0) {
      // calculate and set result
      setResult(calculateCTR(clicks, impressions))
    }
  }, [clicks, impressions])

  return (
    <section>
      <Typography variant="h4" component="h1">
        Click Through Rate Calculator
      </Typography>
      <Paper variant="outlined" className="calculator">
        <div className="inputContainer">
          <TextField
            label="Clicks"
            variant="standard"
            type="number"
            id="clicks"
            value={clicks}
            onFocus={e => {
              e.target.select()
            }}
            onChange={({ target: { value } }) => {
              if (isNumeric(value) || isEmpty(value)) setClicks(value)
            }}
          />
        </div>
        <div className="inputContainer">
          <TextField
            variant="standard"
            label="impressions"
            type="number"
            id="impressions"
            value={impressions}
            onFocus={e => {
              e.target.select()
            }}
            onChange={({ target: { value } }) => {
              if (isNumeric(value) || isEmpty(value)) setImpressions(value)
            }}
          />
        </div>
        <Typography variant="h5" component="p">
          CTR is: <strong>{`${result}%`}</strong>
        </Typography>
      </Paper>
    </section>
  )
}

export default Calculator
