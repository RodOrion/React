const Account = ({compte}) => {
    console.log(compte);
    const operations = compte.operations
    return (
        <section>
            <header className="flexContainer" style={{backgroundColor:compte.color}}>
                <h2>{compte.name}</h2>
                <div className="balance">{compte.balance} €</div>
            </header>
            <div className="operations">
                {
                    operations.map( (o, index) => {
                        return (
                            <div key={index} className="op flexContainer">
                                <div className="date">{o.date}</div>
                                <div className="desc">{o.description}</div>
                                <div className="amount">{o.amount}</div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default Account