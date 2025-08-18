import ContentDesc from "./ContentDesc"
import Picture from "./Picture"
import Title from "./Title"

const Aside = ({title, img, alt, content}) => {
    return (
        <aside>
            <Title balise="h2" text={title} />
            <Picture src={img} alt={alt} />
            <ContentDesc content={content} />
        </aside>
    )
}
export default Aside