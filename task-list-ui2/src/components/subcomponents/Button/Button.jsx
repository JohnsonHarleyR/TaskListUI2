import "./button.css";

const Button = ({text, onClick, disabled = "false"}) => {

    function getButtonByDisabled() {
        if (disabled === "true") {
            return <button className="btn btn-primary" onClick={onClick} disabled>{text}</button>;
        } else {
            return <button className="btn btn-primary" onClick={onClick}>{text}</button>;
        }
    }

    return (
        <>
            {getButtonByDisabled()}
        </>
    );
}

export default Button;