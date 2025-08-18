import Title from "./Title"

const Job = ({title, location, contrat, borderColor}) => {
    return (
        <article className={`card flexContainer ${borderColor}`}>
            <Title balise="h2" text={title} location={location} />
            <div>{contrat}</div>
        </article>
    )
}
export default Job