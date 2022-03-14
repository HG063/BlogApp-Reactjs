import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {

    return ( 
        <div className="blog-list">
             {blogs.map((blogs) => (
                 <div className="blog-preview" key={blogs.id}>
                     <Link to={`/blogs/${blogs.id}`}>
                     <h2>{blogs.title}</h2>
                     <p>Written By {blogs.author}</p>
                     </Link>
                 </div> 
            ))}
        <br />
        </div> 
     );
}
 
export default BlogList;