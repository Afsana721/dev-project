
//here create a BlogList variable, & use it in my home.jsx file
// easy way to destructured prop 
// const Bloglist = (props) =>{}

const BlogList = ({ blogs, title, handleDelete }) => {

    //const blogs = props.blogs;   // used blogs as props
    //const title = props.title;    //used title as props property

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2> {blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    
                    <button onClick={() => handleDelete(blog.id)}>delete blog</button>

                </div>
            ))}
        </div>

    );
}

export default BlogList;