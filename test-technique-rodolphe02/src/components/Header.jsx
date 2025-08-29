import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
        <Link to="/">
          logo
        </Link>
        <nav>
            <ul>
              <li>
                <Link to="/pokemons">Pokemons</Link>
              </li>
                <li>
                  <Link to="/pokemon/types">Types</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;