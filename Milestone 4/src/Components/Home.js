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

  

const [like, changeLike] = useState(false)
  
  const handleLike = ()=>
  {
    changeLike(!like)
  }

  useEffect(() => {
    
    console.log("Like run");
  }, [like])


    return ( 

        <div>
                 
                 {error}
                { 
                    blogs===null ? <div>Loading..</div>: blogs.map((blog)=><Blog id={blog.id} 
                    title={blog.title} 
                    rating={blog.idb_rating} 
                    content={blog.content}
                    like={blog.like}
                    handleDel={handleDel}
                    handleLike= {handleLike}
                    />
                    
                    )
                }
                
        </div>
       
     );
    }
 
export default Home;