import {useParams} from "react-router";
import useFetch from "../Custom Hooks/useFetch";
import {useState} from "react";

const BlogDetails = () => {
    const {id} = useParams();
    const[name, changeName] = useState('1');
    const {blogs,changeBlogs, error} = useFetch(`http://localhost:8000/Shows/${name}`);
    console.log(name);
    return(
        <div className = 'blogdetails'>
            {error}
            {blogs === null? <div>loading.. </div>:
            <div>
                <h2>Show name: {blogs.title}</h2>
                <h4> IMDB rating = {blogs.idb_rating}</h4>
                <p>
                    {blogs.content}
                    </p>
                    </div>}
            <input type="text" value={name} onChange= {(e) => {changeName(e.currentTarget.value)}}/>
        </div>
    )
}

export default BlogDetails;