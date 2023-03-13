import Button from '../components/Button/Button';
import Display from '../components/Display/Display';
import './Calculator.css';

const clearMemory = () => {
}
const setOperation = (operation) => {
    console.log(operation);
}
const addDigit = (number) => {
    console.log(number);
}
const Calculator = () => {
    return (
        <div className='calculator'>
            <Display value={100} />
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
            <Button label={'.'} Click={setOperation} />
            <Button label={'='} Click={setOperation} typeButton={' operation'} />
        </div>
    )
}

export default Calculator;