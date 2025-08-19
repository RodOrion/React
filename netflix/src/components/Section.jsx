const Section = ({category, images}) => {
    ///console.log(images);
    return (
        <section>
            <h2>{category}</h2>
            <div className="caroussel">
                <div className="flexContainer">       
                    {images.map( (e, index) => {
                        return <img key={index} src={e} alt="photo movie" />
                    })}
                </div>
            </div>
        </section>
    )
}
export default Section