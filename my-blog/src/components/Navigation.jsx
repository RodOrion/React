import Link from "./Link"

const Navigation = () => {
    return (
        <nav>
            <ul className="flexContainer">
                <li><Link text="Link 1" /></li>
                <li><Link text="Link 2" /></li>
                <li><Link text="Link 3" /></li>
                <li><Link text="Link 4" /></li>
            </ul>
        </nav>
    )
}
export default Navigation