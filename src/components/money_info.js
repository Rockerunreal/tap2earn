import { memo } from "react"

const Money_info = memo((props) =>{
    function textShadow(){
        var slotElement = document.querySelector('.balance');
        slotElement.className = 'balance--'
    }
    return (
    <div className="money_info">
        <img src="/img/Moneta3 1.png"></img>
        <span className="balance" id="balance">{props.data}</span>
    </div>
)});

export default Money_info