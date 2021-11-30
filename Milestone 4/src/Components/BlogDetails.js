import {useParams, useHistory} from "react-router";
import useFetch from "../Custom Hooks/useFetch";
import {useState} from "react";

const BlogDetails = () => {
    const {id} = useParams();
    const history = useHistory();

    const handleDelete = () =>
    {
        fetch('http://localhost:8000/Shows/'+id,
        {method: 'DELETE'})
        .then(()=>
        {
            history.push('/');
        })
    }

    //const[name, changeName] = useState('1');
    const {blogs,changeBlogs, error} = useFetch(`http://localhost:8000/Shows/${id}`);
    //console.log(name);
    return(
        <div className = 'blogdetails'>
            {error}
            {blogs === null? <div>loading.. </div>:
            <div>
                <h2 style= {{
                color: 'white', 
                backgroundColor: '#91032e',
                borderRadius: '8px' 
                }}>Show name: {blogs.title}</h2>
                <h4 style={{color: '#91032e'}}> IMDB rating = {blogs.idb_rating}</h4>
                <p>
                    {blogs.content}
                </p>
            <button style={{ 
                color: 'white', 
                backgroundColor: '#91032e',
                borderRadius: '8px' 
                }} onClick={handleDelete}> Delete this Anime</button>
            </div>}
        </div>
    )
}

export default BlogDetails;