const Picture = ({src, alt, legend}) => {
    return (
        <figure>
            <img src={src} alt={alt} />
            {legend && <figcaption>{legend}</figcaption>}
        </figure>
    )
    }
export default Picture