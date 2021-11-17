import {useState, useEffect} from "react";
import Blog from "./Blog";
import useFetch from '../Custom Hooks/useFetch';




const Home = () => {

  const {blogs, changeBlogs, error} = useFetch('http://localhost:8000/Shows');
  const handleDel = (id)=>
  {
    const reBlogged = blogs.filter((b)=>b.id !== id);
    console.log(reBlogged);
    changeBlogs(reBlogged);
  }

  useEffect(() =>{
    console.log("UseEffect runs");
  },[blogs])

  

const [state, setstate] = useState(false)
  
  const handleLike = ()=>
  {
    setstate(!state)
  }

  useEffect(() => {
    
    console.log("Like run");
  }, [state])


    return ( 

        <div>
                 
                 {error}
                { 
                    blogs===null ? <div>Loading..</div>: blogs.map((blog)=><Blog id={blog.id} 
                    title={blog.title} 
                    rating={blog.idb_rating} 
                    content={blog.content}
                    handleDel={handleDel}
                    handleLike= {handleLike}
                    />
                    
                    )
                }
                <div style={{ background: state ? "red" : "#f3fab3"}}/>
        </div>
       
     );
    }
 
export default Home;