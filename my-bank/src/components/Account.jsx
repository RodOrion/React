import Button from "./Button";

const Account = ({account}) => {
    console.log(account);
    const operations = account.operations
    return (
        <section className="blocAccount flexContainer">
            <header className="flexContainer" style={{backgroundColor:account.color}}>
                <h2>{account.name}</h2>
                <div className="balance">{account.balance} €</div>
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
            <Button children="See more" />
        </section>
    )
}
export default Account