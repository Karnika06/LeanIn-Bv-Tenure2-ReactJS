import {Link} from 'react-router-dom';
const Blog = (props) => {
    return ( 
        <>
            <div className={`blog ${props.id}`} key={props.id}>
                <Link to= {`blog/${props.id}`}>
            <h3 style= {{
                color: 'white', 
                backgroundColor: '#91032e',
                borderRadius: '8px' 
                }}>{props.title} (IMDb Rating: {props.rating})</h3>
                
            <p>{props.content}</p>
            </Link>
            <button onClick= {()=> props.handleDel(props.id)}>Delete</button>
            <button onClick= {()=> props.handleLike}>Like</button>
          </div>
        </>     
    );
}
 
export default Blog;