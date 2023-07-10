import BlogList from '../blog/BlogList';
import useFetch from '../Fetch/useFetch';
import './Home';

const Home = () => {
    const { data: blog,isPending, error } = useFetch('http://localhost:8000/blogs');

    return ( 
      <div className="home">
          { error && <div>{ error }</div> }
          { isPending && <div>Loading...</div> }
          {blog && <BlogList blogs={blog} title="All Blogs!" />}
          </div> 
    );
}
 
export default Home ;
