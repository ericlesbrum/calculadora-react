import { useState } from 'react';
import Button from '../components/Button/Button';
import Display from '../components/Display/Display';
import './Calculator.css';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}
const Calculator = () => {
    const [state, setState] = useState(initialState)
    const clearMemory = () => {
        setState({ ...initialState })
    }
    const setOperation = (operation) => {
    }
    const addDigit = (number) => {
        if (number === '.' && state.displayValue.includes('.')) {
            return;
        }
        const clearDisplay = state.displayValue == '0' || state.clearDisplay;
        const currentValue = clearDisplay ? '' : state.displayValue;
        const displayValue = currentValue + number;
        const values = state.values;

        if (number !== '.') {
            const i = state.current;
            const newValue = parseFloat(displayValue);
            values[i] = newValue;
        }
        setState({ ...state, displayValue, clearDisplay: false, values })
        console.log(state)
    }
    return (
        <div className='calculator'>
            <Display value={state.displayValue} />
            <Button label={'AC'} Click={clearMemory} typeButton={' triple'} />
            <Button label={'/'} Click={setOperation} typeButton={' operation'} />
            <Button label={7} Click={addDigit} />
            <Button label={8} Click={addDigit} />
            <Button label={9} Click={addDigit} />
            <Button label={'*'} Click={setOperation} typeButton={' operation'} />
            <Button label={4} Click={addDigit} />
            <Button label={5} Click={addDigit} />
            <Button label={6} Click={addDigit} />
            <Button label={'-'} Click={setOperation} typeButton={' operation'} />
            <Button label={1} Click={addDigit} />
            <Button label={2} Click={addDigit} />
            <Button label={3} Click={addDigit} />
            <Button label={'+'} Click={setOperation} typeButton={' operation'} />
            <Button label={0} Click={addDigit} typeButton={' double'} />
            <Button label={'.'} Click={addDigit} />
            <Button label={'='} Click={setOperation} typeButton={' operation'} />
        </div>
    )
}

export default Calculator;