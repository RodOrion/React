import Logo from "./Logo"
import User from "./User"

const Header = ({logo, username}) => {
    console.log(username);
    
    return (
        <header>
            <div className="wrapper flexContainer">
                <Logo logo={logo} />
                <User username={username} />
            </div>
        </header>
    )
}
export default Header