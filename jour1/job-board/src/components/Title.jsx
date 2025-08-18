const Title = ({text, balise, location}) => {
    const Tag = balise
    return <Tag>{text}{location && ` - ${location}`}</Tag>
}
export default Title