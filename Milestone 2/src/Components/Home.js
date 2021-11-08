import Navbar from "./Navbar";
import {useState, useEffect} from "react";
import Blog from "./Blog";


const Home = () => {

  const [blogs, changeBlogs] = useState(null);

  const handleDel = (id)=>
  {
    const reBlogged = blogs.filter((b)=>b.id !== id);
    console.log(reBlogged);
    changeBlogs(reBlogged);
  }

  useEffect(() =>{
    console.log("UseEffect runs");
  },[blogs])

  useEffect(() => {
    fetch('http://localhost:8000/Shows')
      .then(response=>{
        return response.json()
    })
    .then((data)=>{console.log(data);
      changeBlogs(data)
      console.log("This is ", blogs)
  })
}, [])

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
                 <Navbar/>
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