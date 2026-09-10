function NavBar(){

    return(
        <nav id="searchBar">
           <p>New York's Favorite News App Sience 1932</p>

            <label htmlFor="search">
                <input type="text" id="search" placeholder="Find News...." />
                <button className="btn" id="search_btn">Search</button>
            </label>
            
        </nav>
    )
}
export default NavBar 