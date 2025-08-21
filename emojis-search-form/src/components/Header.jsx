const Header = ({setSearch, search}) => {
    
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <header>
            <h1>Emojis search</h1>
            <form>
                <input type="text" name="search" id="search" value={search} onChange={handleChange} />
            </form>
        </header>
    )
}
export default Header