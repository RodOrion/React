const User = ({username}) => {
    return (
        <div className="flexContainer">
            <span className="user">{username}</span>
            <img src={`../assets/avatar_${username}.webp`} alt="" />
        </div>
    )
}
export default User