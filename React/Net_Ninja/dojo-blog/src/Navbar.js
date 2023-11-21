

const Navbar = () => {
    return ( 
    <nav className="navbar">
        <h1>The Dojo Blog</h1>
        <div className="links">
            <a href="/">Home</a>
{/* use inline css styling, here use {} for dyamic value, & also css properites are object so use again {}-{{}} */}
            <a href="/create">New Blog</a>
        </div>
    </nav>
     );
}
 
export default Navbar ;