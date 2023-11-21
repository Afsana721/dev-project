

//for inline css use dynamic value using {} and javascript object concept (key & value)

const Navbar = () => {
    return(
        <nav className="navbar">
            <h1>The Dojo Blog</h1>

            <div className="links">
                <a href ="/">Home</a>
                <a href ="/create">New Blog</a>      
            </div>
        </nav>
    );
}

export default Navbar;