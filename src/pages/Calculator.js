import React, { useState} from 'react'
import { Button, Display } from '../components/index'
import './calculator.css'

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0')
  const [clearDisplay, setClearDisplay] = useState(false)  
  const [operation, setOperation] = useState(null)
  const [values, setValues] = useState([0, 0]) 
  const [current, setCurrent] = useState(0)

  function clearMemory() {
    setDisplayValue('0')
    setClearDisplay(false)
    setOperation(null)
    setValues([0, 0]) 
    setCurrent(0)   
  }

  function changeOp(n) {
    if(current === 0) {
      setOperation(n)
      setCurrent(1)
      setClearDisplay(true)
    } else {
      const equals = n === '='
      const currentOperation = operation  
      const valor = [...values]
  
      let result
      switch(currentOperation){
        case '+':
          result = valor[0] + valor[1] 
          break
        case '-':
          result = valor[0] - valor[1] 
          break
        case '*':
          result = valor[0] * valor[1] 
          break
        case '/':
          result = valor[0] / valor[1] 
          break
        default:
          result = 0
      }
  
      valor[0] = result
      valor[1] = 0
  
      setDisplayValue(valor[0])
      setOperation(equals ? null : n)
      setCurrent(equals ? 0 : 1)
      setClearDisplay(!equals)
      setValues(valor)
      }
  }

  function addDigit(n) {            
    if(n === '.' && displayValue.includes('.')) {
      return
    }

    const clear = displayValue === '0' || clearDisplay
    const currentValue = clear ? '' : displayValue    
    const value = currentValue + n
    setDisplayValue(value)
    setClearDisplay(false)

    if(n !== '.') {      
      const i = current
      const newValue = parseFloat(value)
      const valor = [...values]
      valor[i] = newValue     
      setValues(valor) 
    }
  }

  return (
    <div className='calculator animate__animated animate__jackInTheBox'>
      <Display value={displayValue} />
      <Button label='AC' click={() => clearMemory() } triple />
      <Button label='/' click={changeOp} operation />
      <Button label='7' click={addDigit} />
      <Button label='8' click={addDigit} />
      <Button label='9' click={addDigit} />
      <Button label='*' click={changeOp} operation />
      <Button label='4' click={addDigit} />
      <Button label='5' click={addDigit} />
      <Button label='6' click={addDigit} />
      <Button label='-' click={changeOp} operation />
      <Button label='1' click={addDigit} />
      <Button label='2' click={addDigit} />
      <Button label='3' click={addDigit} />
      <Button label='+' click={changeOp} operation />
      <Button label='0' click={addDigit} double />
      <Button label='.' click={addDigit} />
      <Button label='=' click={changeOp} operation />
    </div>
  )
}

export default Calculator