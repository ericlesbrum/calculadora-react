import './Button.css'

const Button = ({ label, typeButton, Click }) => {
    let classes = `button${typeButton ? typeButton : ''}`;
    return (
        <button
            className={classes}
            onClick={e => Click && Click(label)}
        >
            {label}
        </button>
    )
}
export default Button;