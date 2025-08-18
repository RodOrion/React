import Job from "./Job"

const Jobs = () => {
    return (
    <main>
        <section className="flexContainer">
            <Job title="Full Time Sales Associate" location="Sydney Boutique" contrat="CDI - Australie - Sydney" borderColor="red" />
            <Job title="Agent de Sécurité" location="Pantin" contrat="CDI - France - Pantin" borderColor="green" />
            <Job title="Responsable d'Atelier (H/F)" location="" contrat="CDD - France - Paris" borderColor="yellow" />
            <Job title="Chef de Projets" location="" contrat="CDD - France - Paris" borderColor="blue" />
            <Job title="Développeur React.js" location="" contrat="CDI - France - Paris" borderColor="pink" />
            <Job title="Sales Associate" location="Stockholm" contrat="CDI - Suède - Stockholm" borderColor="red" />
            <Job title="Vendeur/se" location="Crans Montana" contrat="CDI - Suisse - Crans-Montana" borderColor="green" />
            <Job title="CRM & Data Quality Analyst" location="" contrat="CDI - USA - New York" borderColor="yellow" />
            <Job title="Infirmier (H/F)" location="" contrat="CDI - France - Pantin" borderColor="blue" />
        </section>
    </main>
    )
}
export default Jobs