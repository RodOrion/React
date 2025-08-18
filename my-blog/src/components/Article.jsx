import ContentDesc from "./ContentDesc"
import Picture from "./Picture"
import Title from "./Title"

const Article = ({title, subtitle, img, alt, content}) => {
    return (
        <article>
            <Title balise="h2" text={title} />
            <Title balise="h3" text={subtitle} />
            <Picture src={img} alt={alt} />
            <ContentDesc content={content} />
        </article>
    )
}
export default Article