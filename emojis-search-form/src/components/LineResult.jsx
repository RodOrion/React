const LineResult = ({emoji}) => {
    return (
        <div className="lineResult">{emoji.symbol} : {emoji.title}</div>
    )
}
export default LineResult