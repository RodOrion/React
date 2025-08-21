import { useState } from "react";

const LineResult = ({emoji}) => {
    const [active, setActive] = useState(false)
    const handleClickCopy = () => {
        navigator.clipboard.writeText(emoji.symbol);
        setActive(true)
    }
    const handleMouseOut = () => {
        setActive(false)
    }
    return (
        <div className={`lineResult ${active ? 'active' : ''}`} onClick={handleClickCopy} onMouseLeave={handleMouseOut}>{emoji.symbol} : {emoji.title}</div>
    )
}
export default LineResult