import "./style.css"

function Button({text, onClick, width}){
    return(
    <button onClick={onClick} style={{width:{width}}}>{text}</button>
    )
}

export default Button