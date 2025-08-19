const Section = ({infos}) => {
    console.log(infos)
    return (
        <section className="flexContainer">
            <div className="time">{ infos.time }</div>
            <figure><img src={infos.image} alt="" /></figure>
            <div className="desc">
                <h3>{infos.title}</h3>
                <p>{infos.type}</p>
                <div className="flexContainer">
                    <span>{infos.duration}</span> 
                    {infos.direct && <span className="direct"> &bull; Direct</span>}
                    {infos.isUnseen && <span className="isUnseen"> &bull; Inédit</span>}
                </div>
            </div>
        </section>
    )
}
export default Section