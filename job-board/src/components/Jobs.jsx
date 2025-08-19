import Job from "./Job"

const Jobs = ({num}) => {
    // console.log(num);
    
    return (
    <main>
        <section className="flexContainer">
            {num.map((e, index) => {
                return <Job key={index} title={e.title} location={e.location} contrat={e.contrat} borderColor={e.borderColor} />
            })}
        </section>
    </main>
    )
}
export default Jobs