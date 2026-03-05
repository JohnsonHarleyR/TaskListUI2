import "./button.css";

const Button = ({text, onClick, disabled = false}) => {

    console.log(`Button ${text} disabled:`, disabled);
    if (disabled === "true") {
        console.log(`Button ${text} is disabled`);
    }

    const buttonClass = disabled === true ? "btn btn-primary disabled" : "btn btn-primary";
    const clickFunction = disabled === true ? () => {} : onClick;



    return (
        <>
            <button className={buttonClass} onClick={clickFunction}>{text}</button>
        </>
    );
}

export default Button;