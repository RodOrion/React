const User = ({username}) => {
    const urlImg = `http://localhost:5173/src/assets/avatars/avatar_${username}.webp`
    return (
        <div className="flexContainer">
            <span className="user">{username}</span>
            <img className="avatar" src={urlImg} alt="" />
        </div>
    )
}
export default User